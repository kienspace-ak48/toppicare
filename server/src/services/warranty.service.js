const warrantyProductTypeModel = require("../model/warrantyProductType.model");
const warrantyDeviceModel = require("../model/warrantyDevice.model");
const warrantyTicketModel = require("../model/warrantyTicket.model");
const warrantySettingsModel = require("../model/warrantySettings.model");
const { WARRANTY_STATUSES } = require("../model/warrantyDevice.model");
const { normalizePhoneVN } = require("../utils/phone.util");

const LOOKUP_FAIL_MESSAGE = "Không tìm thấy thông tin phù hợp. Vui lòng kiểm tra mã máy và số điện thoại.";

const WARRANTY_STATUS_LABELS_VI = {
  active: "Đang hiệu lực",
  expired: "Hết hạn",
  pending_repair: "Chờ sửa",
  repairing: "Đang sửa",
  completed: "Hoàn thành",
};

function addMonths(date, months) {
  const d = new Date(date);
  d.setMonth(d.getMonth() + (Number(months) || 0));
  return d;
}

/** Số tháng lịch (tối thiểu 1) giữa hai mốc — ghi nhận khi admin nhập khoảng BH start/end. */
function monthsBetweenCalendar(start, end) {
  const s = new Date(start);
  const e = new Date(end);
  if (Number.isNaN(s.getTime()) || Number.isNaN(e.getTime())) return 1;
  if (e.getTime() <= s.getTime()) return 0;
  let months = (e.getFullYear() - s.getFullYear()) * 12 + (e.getMonth() - s.getMonth());
  if (e.getDate() < s.getDate()) months -= 1;
  return Math.max(1, months);
}

/** Trạng thái hiển thị: nếu đang `active` mà đã quá hạn → coi là hết hạn (không đổi DB ở đây). */
function effectiveWarrantyStatus(device) {
  const s = device.warrantyStatus || "active";
  if (s !== "active") return s;
  if (!device.warrantyEndAt) return s;
  if (Date.now() > new Date(device.warrantyEndAt).getTime()) return "expired";
  return "active";
}

function warrantyPeriodStart(device) {
  if (!device) return null;
  return device.warrantyActivatedAt || device.soldAt;
}

async function migrateDeviceWarrantyIfNeeded(device) {
  if (!device || !device._id || device.warrantyEndAt) return;
  const months =
    device.warrantyMonths ||
    (device.productType && device.productType.defaultWarrantyMonths) ||
    12;
  const start = warrantyPeriodStart(device);
  if (!start) return;
  const warrantyEndAt = addMonths(new Date(start), months);
  await warrantyDeviceModel.findByIdAndUpdate(device._id, {
    $set: {
      warrantyMonths: months,
      warrantyEndAt,
      warrantyActivatedAt: device.warrantyActivatedAt || device.soldAt,
      warrantyStatus: device.warrantyStatus || "active",
    },
  });
}

async function ensureWarrantyExpiredInDb(deviceId) {
  const d = await warrantyDeviceModel.findById(deviceId).select("warrantyStatus warrantyEndAt").lean();
  if (!d || d.warrantyStatus !== "active" || !d.warrantyEndAt) return;
  if (Date.now() > new Date(d.warrantyEndAt).getTime()) {
    await warrantyDeviceModel.findByIdAndUpdate(deviceId, { warrantyStatus: "expired" });
  }
}

function escapeRegex(s) {
  return String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

async function getWarrantySettings() {
  let doc = await warrantySettingsModel.findOne().lean();
  if (!doc) {
    const created = await warrantySettingsModel.create({ autoActivateWarranty: true });
    doc = created.toObject();
  }
  return { autoActivateWarranty: doc.autoActivateWarranty !== false };
}

async function updateWarrantySettings(data) {
  const autoActivateWarranty = !!(data && data.autoActivateWarranty);
  const doc = await warrantySettingsModel.findOneAndUpdate(
    {},
    { $set: { autoActivateWarranty } },
    { upsert: true, new: true, setDefaultsOnInsert: true }
  );
  return { autoActivateWarranty: doc.autoActivateWarranty !== false };
}

async function listProductTypes() {
  return warrantyProductTypeModel.find().sort({ sortOrder: 1, name: 1 }).lean();
}

async function addProductType(data) {
  const doc = await warrantyProductTypeModel.create({
    code: String(data.code).trim().toUpperCase(),
    name: data.name,
    sortOrder: Number(data.sortOrder) || 0,
    defaultWarrantyMonths: Number(data.defaultWarrantyMonths) || 12,
  });
  return doc;
}

async function getProductTypeById(id) {
  return warrantyProductTypeModel.findById(id).lean();
}

async function updateProductType(id, data) {
  return warrantyProductTypeModel.findByIdAndUpdate(
    id,
    {
      code: String(data.code).trim().toUpperCase(),
      name: data.name,
      sortOrder: Number(data.sortOrder) || 0,
      defaultWarrantyMonths: Number(data.defaultWarrantyMonths) || 12,
    },
    { new: true }
  );
}

async function deleteProductType(id) {
  const inUse = await warrantyDeviceModel.exists({ productType: id });
  if (inUse) {
    throw new Error("Không xóa được: đang có thiết bị dùng loại sản phẩm này.");
  }
  return warrantyProductTypeModel.findByIdAndDelete(id);
}

/**
 * Danh sách thiết bị có phân trang + tìm theo mã máy / tên khách / SĐT (không tải hết DB).
 * @param {{ q?: string, page?: number, limit?: number }} options
 */
async function listDevices(options) {
  const q = options && options.q != null ? String(options.q).trim() : "";
  let page = Number(options && options.page) || 1;
  let limit = Number(options && options.limit) || 25;
  page = Math.max(1, page);
  limit = Math.min(100, Math.max(1, limit));
  const skip = (page - 1) * limit;

  const filter = {};
  if (q) {
    const safe = escapeRegex(q);
    const rx = new RegExp(safe, "i");
    const or = [{ serialNumber: rx }, { customerName: rx }, { phone: rx }];
    const pn = normalizePhoneVN(q);
    if (pn.length >= 10) {
      or.push({ phoneNormalized: pn });
    }
    filter.$or = or;
  }

  const [items, total] = await Promise.all([
    warrantyDeviceModel
      .find(filter)
      .populate("productType", "code name defaultWarrantyMonths")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean(),
    warrantyDeviceModel.countDocuments(filter),
  ]);

  const enriched = items.map((row) => {
    const rowCopy = { ...row };
    const start = rowCopy.warrantyActivatedAt || rowCopy.soldAt;
    if (!rowCopy.warrantyEndAt && start && rowCopy.productType) {
      const m = rowCopy.warrantyMonths || rowCopy.productType.defaultWarrantyMonths || 12;
      rowCopy.warrantyEndAt = addMonths(new Date(start), m);
    }
    const eff = effectiveWarrantyStatus(rowCopy);
    return {
      ...rowCopy,
      warrantyStatusEffective: eff,
      warrantyStatusLabel: WARRANTY_STATUS_LABELS_VI[eff] || row.warrantyStatus,
    };
  });

  return {
    data: enriched,
    total,
    page,
    limit,
    totalPages: Math.max(1, Math.ceil(total / limit)),
  };
}

async function getDeviceById(id) {
  return warrantyDeviceModel.findById(id).populate("productType", "code name defaultWarrantyMonths").lean();
}

async function addDevice(data) {
  const phoneNormalized = normalizePhoneVN(data.phone);
  if (!phoneNormalized) {
    throw new Error("Số điện thoại không hợp lệ.");
  }
  const soldAt = data.soldAt ? new Date(data.soldAt) : new Date();
  const settings = await getWarrantySettings();
  const pt = await getProductTypeById(data.productType);
  const defaultMonths = pt && pt.defaultWarrantyMonths ? Number(pt.defaultWarrantyMonths) : 12;

  let warrantyActivatedAt;
  let warrantyEndAt;
  let warrantyMonths;

  if (settings.autoActivateWarranty) {
    warrantyActivatedAt = soldAt;
    warrantyMonths = defaultMonths;
    warrantyEndAt = addMonths(warrantyActivatedAt, warrantyMonths);
  } else {
    if (data.warrantyActivatedAt == null || String(data.warrantyActivatedAt).trim() === "") {
      throw new Error("Vui lòng chọn ngày bắt đầu bảo hành.");
    }
    if (data.warrantyEndAt == null || String(data.warrantyEndAt).trim() === "") {
      throw new Error("Vui lòng chọn ngày kết thúc bảo hành.");
    }
    warrantyActivatedAt = new Date(data.warrantyActivatedAt);
    warrantyEndAt = new Date(data.warrantyEndAt);
    if (Number.isNaN(warrantyActivatedAt.getTime())) {
      throw new Error("Ngày bắt đầu bảo hành không hợp lệ.");
    }
    if (Number.isNaN(warrantyEndAt.getTime())) {
      throw new Error("Ngày kết thúc bảo hành không hợp lệ.");
    }
    if (warrantyEndAt.getTime() <= warrantyActivatedAt.getTime()) {
      throw new Error("Ngày kết thúc bảo hành phải sau ngày bắt đầu.");
    }
    warrantyMonths = monthsBetweenCalendar(warrantyActivatedAt, warrantyEndAt);
  }

  let warrantyStatus = Date.now() > warrantyEndAt.getTime() ? "expired" : "active";

  const deviceLog = [
    {
      at: soldAt,
      title: "Đăng ký bán hàng",
      detail: data.saleLogDetail || `Giao dịch ghi nhận ngày ${soldAt.toLocaleDateString("vi-VN")}.`,
      visibleToCustomer: true,
    },
    {
      at: warrantyActivatedAt,
      title: "Kích hoạt bảo hành",
      detail: settings.autoActivateWarranty
        ? `Bảo hành ${warrantyMonths} tháng (theo loại SP), đến hết ${warrantyEndAt.toLocaleDateString("vi-VN")}.`
        : `Bảo hành từ ${warrantyActivatedAt.toLocaleString("vi-VN")} đến ${warrantyEndAt.toLocaleString("vi-VN")} (${warrantyMonths} tháng ghi nhận).`,
      visibleToCustomer: true,
    },
  ];

  try {
    const device = await warrantyDeviceModel.create({
      serialNumber: String(data.serialNumber).trim(),
      productType: data.productType,
      customerName: String(data.customerName).trim(),
      phone: String(data.phone).trim(),
      phoneNormalized,
      email: (data.email || "").trim(),
      soldAt,
      warrantyActivatedAt,
      warrantyMonths,
      warrantyEndAt,
      warrantyStatus,
      notes: (data.notes || "").trim(),
      isActive: data.isActive !== false,
      deviceLog,
    });
    return device;
  } catch (e) {
    if (e && e.code === 11000) {
      throw new Error("Mã máy (serial) đã tồn tại.");
    }
    throw e;
  }
}

async function updateDevice(id, data) {
  const phoneNormalized = normalizePhoneVN(data.phone);
  if (!phoneNormalized) {
    throw new Error("Số điện thoại không hợp lệ.");
  }
  const existing = await warrantyDeviceModel.findById(id).lean();
  if (!existing) {
    throw new Error("Không tìm thấy thiết bị.");
  }
  const soldAt = data.soldAt ? new Date(data.soldAt) : new Date();
  const pt = await getProductTypeById(data.productType);
  const defaultMonths = pt && pt.defaultWarrantyMonths ? Number(pt.defaultWarrantyMonths) : 12;
  let warrantyMonths = defaultMonths;
  if (data.warrantyMonths != null && data.warrantyMonths !== "") {
    const n = parseInt(data.warrantyMonths, 10);
    if (!Number.isNaN(n) && n >= 1 && n <= 120) {
      warrantyMonths = n;
    }
  }

  let warrantyActivatedAt = existing.warrantyActivatedAt ? new Date(existing.warrantyActivatedAt) : soldAt;
  if (data.warrantyActivatedAt != null && String(data.warrantyActivatedAt).trim() !== "") {
    const d = new Date(data.warrantyActivatedAt);
    if (!Number.isNaN(d.getTime())) {
      warrantyActivatedAt = d;
    }
  }

  let warrantyEndAt;
  const endRaw = data.warrantyEndAt;
  if (endRaw != null && String(endRaw).trim() !== "") {
    const endD = new Date(endRaw);
    if (Number.isNaN(endD.getTime())) {
      throw new Error("Ngày kết thúc bảo hành không hợp lệ.");
    }
    if (endD.getTime() <= warrantyActivatedAt.getTime()) {
      throw new Error("Ngày kết thúc bảo hành phải sau ngày bắt đầu.");
    }
    warrantyEndAt = endD;
    warrantyMonths = monthsBetweenCalendar(warrantyActivatedAt, warrantyEndAt);
  } else {
    warrantyEndAt = addMonths(warrantyActivatedAt, warrantyMonths);
  }

  let warrantyStatus = existing.warrantyStatus || "active";
  if (!["pending_repair", "repairing", "completed"].includes(warrantyStatus)) {
    warrantyStatus = Date.now() > warrantyEndAt.getTime() ? "expired" : "active";
  }

  try {
    return await warrantyDeviceModel.findByIdAndUpdate(
      id,
      {
        serialNumber: String(data.serialNumber).trim(),
        productType: data.productType,
        customerName: String(data.customerName).trim(),
        phone: String(data.phone).trim(),
        phoneNormalized,
        email: (data.email || "").trim(),
        soldAt,
        warrantyActivatedAt,
        warrantyMonths,
        warrantyEndAt,
        warrantyStatus,
        notes: (data.notes || "").trim(),
        isActive: data.isActive !== false,
      },
      { new: true }
    );
  } catch (e) {
    if (e && e.code === 11000) {
      throw new Error("Mã máy (serial) đã tồn tại.");
    }
    throw e;
  }
}

async function updateDeviceWarrantyStatus(deviceId, status) {
  const s = String(status || "").trim();
  if (!WARRANTY_STATUSES.includes(s)) {
    throw new Error("Trạng thái bảo hành không hợp lệ.");
  }
  const d = await warrantyDeviceModel.findByIdAndUpdate(
    deviceId,
    { warrantyStatus: s },
    { new: true }
  );
  if (!d) return null;
  await addDeviceLogEntry(deviceId, {
    title: "Cập nhật trạng thái bảo hành",
    detail: WARRANTY_STATUS_LABELS_VI[s] || s,
    visibleToCustomer: false,
  });
  return d;
}

async function deleteDevice(id) {
  await warrantyTicketModel.deleteMany({ device: id });
  return warrantyDeviceModel.findByIdAndDelete(id);
}

async function addDeviceLogEntry(deviceId, entry) {
  return warrantyDeviceModel.findByIdAndUpdate(
    deviceId,
    {
      $push: {
        deviceLog: {
          at: entry.at ? new Date(entry.at) : new Date(),
          title: entry.title,
          detail: entry.detail || "",
          visibleToCustomer: !!entry.visibleToCustomer,
        },
      },
    },
    { new: true }
  );
}

async function updateDeviceLogEntry(deviceId, logId, entry) {
  const d = await warrantyDeviceModel.findOneAndUpdate(
    { _id: deviceId, "deviceLog._id": logId },
    {
      $set: {
        "deviceLog.$.title": String(entry.title || "").trim(),
        "deviceLog.$.detail": String(entry.detail || "").trim(),
        "deviceLog.$.visibleToCustomer": !!entry.visibleToCustomer,
      },
    },
    { new: true }
  );
  return d;
}

async function deleteDeviceLogEntry(deviceId, logId) {
  return warrantyDeviceModel.findByIdAndUpdate(
    deviceId,
    { $pull: { deviceLog: { _id: logId } } },
    { new: true }
  );
}

async function getDeviceDetailJson(deviceId) {
  let device = await warrantyDeviceModel
    .findById(deviceId)
    .populate("productType", "code name defaultWarrantyMonths")
    .lean();
  if (!device) return null;
  await migrateDeviceWarrantyIfNeeded(device);
  await ensureWarrantyExpiredInDb(deviceId);
  device = await warrantyDeviceModel
    .findById(deviceId)
    .populate("productType", "code name defaultWarrantyMonths")
    .lean();
  const eff = effectiveWarrantyStatus(device);
  device.warrantyStatusEffective = eff;
  device.warrantyStatusLabel = WARRANTY_STATUS_LABELS_VI[eff] || device.warrantyStatus;
  return { device };
}

/**
 * Tra cứu công khai: chỉ trả dữ liệu an toàn.
 */
async function publicLookup(serialNumber, phoneInput) {
  const serial = String(serialNumber || "").trim();
  const phoneNorm = normalizePhoneVN(phoneInput);
  if (!serial || !phoneNorm) {
    return { ok: false, message: LOOKUP_FAIL_MESSAGE };
  }
  let device = await warrantyDeviceModel
    .findOne({ serialNumber: serial, phoneNormalized: phoneNorm, isActive: true })
    .populate("productType", "code name defaultWarrantyMonths")
    .lean();

  if (!device) {
    return { ok: false, message: LOOKUP_FAIL_MESSAGE };
  }

  await migrateDeviceWarrantyIfNeeded(device);
  await ensureWarrantyExpiredInDb(device._id);
  device = await warrantyDeviceModel
    .findById(device._id)
    .populate("productType", "code name defaultWarrantyMonths")
    .lean();

  const eff = effectiveWarrantyStatus(device);
  const deviceLogPublic = (device.deviceLog || []).filter((e) => e.visibleToCustomer);

  return {
    ok: true,
    data: {
      productType: device.productType
        ? {
            code: device.productType.code,
            name: device.productType.name,
            defaultWarrantyMonths: device.productType.defaultWarrantyMonths,
          }
        : null,
      serialNumber: device.serialNumber,
      soldAt: device.soldAt,
      warrantyMonths: device.warrantyMonths,
      warrantyEndAt: device.warrantyEndAt,
      warrantyStatus: eff,
      warrantyStatusLabel: WARRANTY_STATUS_LABELS_VI[eff] || eff,
      customerNameMasked: maskName(device.customerName),
      deviceLog: deviceLogPublic,
    },
  };
}

function maskName(name) {
  const s = String(name || "").trim();
  if (s.length <= 2) return "*".repeat(s.length);
  return s[0] + "*".repeat(Math.max(1, s.length - 2)) + s.slice(-1);
}

module.exports = {
  getWarrantySettings,
  updateWarrantySettings,
  listProductTypes,
  addProductType,
  getProductTypeById,
  updateProductType,
  deleteProductType,
  listDevices,
  getDeviceById,
  addDevice,
  updateDevice,
  updateDeviceWarrantyStatus,
  deleteDevice,
  addDeviceLogEntry,
  updateDeviceLogEntry,
  deleteDeviceLogEntry,
  getDeviceDetailJson,
  publicLookup,
  WARRANTY_STATUSES,
  WARRANTY_STATUS_LABELS_VI,
  LOOKUP_FAIL_MESSAGE,
};

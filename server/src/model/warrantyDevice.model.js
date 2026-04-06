const mongoose = require("mongoose");

/** Trạng thái theo dõi bảo hành (admin cập nhật; hết hạn có thể tự gắn khi quá ngày). */
const WARRANTY_STATUSES = ["active", "expired", "pending_repair", "repairing", "completed"];

const DeviceLogEntrySchema = new mongoose.Schema(
  {
    at: { type: Date, default: Date.now },
    title: { type: String, required: true },
    detail: { type: String, default: "" },
    visibleToCustomer: { type: Boolean, default: true },
  },
  { _id: true }
);

const WarrantyDeviceSchema = new mongoose.Schema(
  {
    serialNumber: { type: String, required: true, unique: true, trim: true, index: true },
    productType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "WarrantyProductType",
      required: true,
    },
    customerName: { type: String, required: true, trim: true, index: true },
    phone: { type: String, required: true, trim: true },
    phoneNormalized: { type: String, required: true, index: true },
    email: { type: String, trim: true, default: "" },
    soldAt: { type: Date, required: true },
    /** Ngày bắt đầu tính thời hạn BH (bật auto = thường trùng ngày bán; tắt auto = do admin chọn). */
    warrantyActivatedAt: { type: Date, default: null },
    /** Thời hạn BH: kết thúc = warrantyEndAt (tính từ warrantyActivatedAt và số tháng). */
    warrantyMonths: { type: Number, default: 12 },
    warrantyEndAt: { type: Date, default: null },
    warrantyStatus: {
      type: String,
      enum: WARRANTY_STATUSES,
      default: "active",
      index: true,
    },
    notes: { type: String, default: "" },
    isActive: { type: Boolean, default: true },
    deviceLog: [DeviceLogEntrySchema],
  },
  { timestamps: true }
);

const WarrantyDevice = mongoose.model("WarrantyDevice", WarrantyDeviceSchema);
module.exports = WarrantyDevice;
module.exports.WARRANTY_STATUSES = WARRANTY_STATUSES;

const warrantyService = require("../services/warranty.service");
const { WARRANTY_STATUSES } = require("../model/warrantyDevice.model");

const CNAME = "warranty.controller.js ";
const V = "admin/warranty/";

const warrantyController = () => ({
  /** Một trang duy nhất: loại SP + đăng ký + danh sách + chi tiết (modal). */
  Workspace: async (req, res) => {
    const labels = warrantyService.WARRANTY_STATUS_LABELS_VI || {};
    const warrantyStatusOptions = WARRANTY_STATUSES.map((value) => ({
      value,
      label: labels[value] || value,
    }));
    let warrantySettings = { autoActivateWarranty: true };
    try {
      warrantySettings = await warrantyService.getWarrantySettings();
    } catch (e) {
      console.log(CNAME, e.message);
    }
    try {
      res.render(V + "workspace", { warrantyStatusOptions, warrantySettings });
    } catch (e) {
      console.log(CNAME, e.message);
      res.render(V + "workspace", { warrantyStatusOptions, warrantySettings });
    }
  },
  WarrantySettingsGet: async (req, res) => {
    try {
      const warrantySettings = await warrantyService.getWarrantySettings();
      res.json({ success: true, warrantySettings });
    } catch (e) {
      console.log(CNAME, e.message);
      res.status(500).json({ success: false, mess: e.message });
    }
  },
  WarrantySettingsUpdate: async (req, res) => {
    try {
      const warrantySettings = await warrantyService.updateWarrantySettings(req.body);
      res.json({ success: true, warrantySettings });
    } catch (e) {
      console.log(CNAME, e.message);
      res.status(400).json({ success: false, mess: e.message });
    }
  },
  DeviceWarrantyStatusUpdate: async (req, res) => {
    try {
      const d = await warrantyService.updateDeviceWarrantyStatus(req.params.id, req.body.status);
      if (!d) return res.status(404).json({ success: false, mess: "Không tìm thấy" });
      res.json({ success: true });
    } catch (e) {
      console.log(CNAME, e.message);
      res.status(400).json({ success: false, mess: e.message });
    }
  },
  DeviceDetailJson: async (req, res) => {
    try {
      const payload = await warrantyService.getDeviceDetailJson(req.params.id);
      if (!payload) return res.status(404).json({ success: false, mess: "Không tìm thấy" });
      res.json({ success: true, ...payload });
    } catch (e) {
      console.log(CNAME, e.message);
      res.status(500).json({ success: false, mess: e.message });
    }
  },
  DeviceLogUpdate: async (req, res) => {
    try {
      const d = await warrantyService.updateDeviceLogEntry(req.params.deviceId, req.params.logId, req.body);
      if (!d) return res.status(404).json({ success: false, mess: "Không tìm thấy" });
      res.json({ success: true });
    } catch (e) {
      console.log(CNAME, e.message);
      res.status(400).json({ success: false, mess: e.message });
    }
  },
  DeviceLogDelete: async (req, res) => {
    try {
      const d = await warrantyService.deleteDeviceLogEntry(req.params.deviceId, req.params.logId);
      if (!d) return res.status(404).json({ success: false, mess: "Không tìm thấy" });
      res.json({ success: true });
    } catch (e) {
      console.log(CNAME, e.message);
      res.status(400).json({ success: false, mess: e.message });
    }
  },

  // —— Loại sản phẩm (view riêng) ——
  ProductTypeIndex: (req, res) => {
    res.render(V + "product-type/index");
  },
  ProductTypeList: async (req, res) => {
    try {
      const data = await warrantyService.listProductTypes();
      res.json({ success: true, data });
    } catch (e) {
      console.log(CNAME, e.message);
      res.json({ success: false, mess: e.message });
    }
  },
  ProductTypeFormAdd: (req, res) => {
    res.redirect(302, "/admin/warranty/product-types");
  },
  ProductTypeAdd: async (req, res) => {
    try {
      await warrantyService.addProductType(req.body);
      res.json({ success: true });
    } catch (e) {
      console.log(CNAME, e.message);
      res.status(400).json({ success: false, mess: e.message });
    }
  },
  ProductTypeFormEdit: (req, res) => {
    res.redirect(302, "/admin/warranty/product-types");
  },
  ProductTypeUpdate: async (req, res) => {
    try {
      await warrantyService.updateProductType(req.params.id, req.body);
      res.json({ success: true });
    } catch (e) {
      console.log(CNAME, e.message);
      res.status(400).json({ success: false, mess: e.message });
    }
  },
  ProductTypeDelete: async (req, res) => {
    try {
      await warrantyService.deleteProductType(req.params.id);
      res.json({ success: true });
    } catch (e) {
      console.log(CNAME, e.message);
      res.status(400).json({ success: false, mess: e.message });
    }
  },

  // —— Thiết bị ——
  DeviceIndex: (req, res) => {
    res.redirect(302, "/admin/warranty");
  },
  DeviceList: async (req, res) => {
    try {
      const q = (req.query && req.query.q) || "";
      const page = Math.max(1, parseInt(req.query.page, 10) || 1);
      const limit = Math.min(100, Math.max(1, parseInt(req.query.limit, 10) || 25));
      const result = await warrantyService.listDevices({ q, page, limit });
      res.json({ success: true, ...result });
    } catch (e) {
      console.log(CNAME, e.message);
      res.json({ success: false, mess: e.message });
    }
  },
  DeviceFormAdd: (req, res) => {
    res.redirect(302, "/admin/warranty");
  },
  DeviceAdd: async (req, res) => {
    try {
      const d = await warrantyService.addDevice(req.body);
      res.json({ success: true, id: d._id });
    } catch (e) {
      console.log(CNAME, e.message);
      res.status(400).json({ success: false, mess: e.message });
    }
  },
  DeviceFormEdit: (req, res) => {
    res.redirect(302, "/admin/warranty?device=" + encodeURIComponent(req.params.id));
  },
  DeviceUpdate: async (req, res) => {
    try {
      await warrantyService.updateDevice(req.params.id, req.body);
      res.json({ success: true });
    } catch (e) {
      console.log(CNAME, e.message);
      res.status(400).json({ success: false, mess: e.message });
    }
  },
  DeviceDelete: async (req, res) => {
    try {
      await warrantyService.deleteDevice(req.params.id);
      res.json({ success: true });
    } catch (e) {
      console.log(CNAME, e.message);
      res.status(400).json({ success: false, mess: e.message });
    }
  },
  DeviceDetail: (req, res) => {
    res.redirect(302, "/admin/warranty?device=" + encodeURIComponent(req.params.id));
  },
  DeviceLogAdd: async (req, res) => {
    try {
      await warrantyService.addDeviceLogEntry(req.params.id, req.body);
      res.json({ success: true });
    } catch (e) {
      console.log(CNAME, e.message);
      res.status(400).json({ success: false, mess: e.message });
    }
  },
});

module.exports = warrantyController;

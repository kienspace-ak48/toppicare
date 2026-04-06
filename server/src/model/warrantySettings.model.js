const mongoose = require("mongoose");

/** Một bản ghi singleton: cấu hình chung cho module bảo hành. */
const WarrantySettingsSchema = new mongoose.Schema(
  {
    autoActivateWarranty: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("WarrantySettings", WarrantySettingsSchema);

const mongoose = require("mongoose");

const WarrantyProductTypeSchema = new mongoose.Schema(
  {
    code: { type: String, required: true, unique: true, trim: true, uppercase: true },
    name: { type: String, required: true, trim: true },
    sortOrder: { type: Number, default: 0 },
    defaultWarrantyMonths: { type: Number, default: 12 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("WarrantyProductType", WarrantyProductTypeSchema);

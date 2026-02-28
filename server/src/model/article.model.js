const mongoose = require("mongoose");
const slugify = require('slugify');
const articleSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  desc: {type: String},
  content: {
    type: String,
    required: true,
  },
  image_url: String,
  slug: {type: String},
  status: Boolean,
  tags: [String],
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category_center",
    required: true,
  },
  type: {
    type: String,
    enum: ["customer", "technician"],
    default: "customer"
  }
}, {timestamps:  true});

module.exports = mongoose.model('article', articleSchema);
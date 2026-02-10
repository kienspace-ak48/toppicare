const mongoose = require('mongoose');
const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  subject: String,
  message: String,
  status: {
    type: String,
    default: "new"
  }
}, { timestamps: true });

module.exports = mongoose.model('contact', ContactSchema);


const contactEntity = require("../model/contact.model");
const CNAME = "contact.service.js ";
class ContactService {
  async getAll() {
    try {
        
      const data = await contactEntity.find({}).sort({ createdAt: -1 });
      return data;
    } catch (error) {
      console.log(CNAME, erorr.message);
      return [];
    }
  }
  getById(id) {}
  add(data) {}
  update(data, id) {}
  delete(id) {}
}

module.exports = new ContactService(); // export instance

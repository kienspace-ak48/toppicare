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
  async getByNotType(type='partner'){
    try {
      const data = await contactEntity.find(
        {type: {$ne: type}}, // khac partner
        // {type: {$exists: false}} //hoawc ko co filed type
      ).sort({createdAt: -1});
      return data;
    } catch (error) {
      console.log(CNAME, error.message);
      return [];
    }
  }
  getById(id) {}
  add(data) {}
  update(data, id) {}
  delete(id) {}
  async changeStatus(ids, status){
    try {
      await contactEntity.updateMany(
        {_id: {$in: ids}},
        {$set: {
          status
        }}
      );
      return true;
    } catch (error) {
      console.log(CNAME, error.message);
      return false;
    }

    
  }
  async deleteByIds(ids){
    try {
      await contactEntity.deleteMany({
        _id: {$in: ids}
      });
      return true;
    } catch (error) {
      console.log(CNAME, error.message);
      return false;
    }
  }
  async countNewNotPartner(type='partner'){
    try {
      const count = await contactEntity.countDocuments({
        $and:[
          {
            $or: [
              {type: {$ne: type}},
              {type: {$exists: false}}
            ]
          },
          {status: 'new'}
        ]
      })
      return count;
    } catch (error) {
      console.log(CNAME, error.message)
      return 0;
    }
  }
}

module.exports = new ContactService(); // export instance

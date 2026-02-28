const categoryCenterEntity = require("../model/categoryCenter.model");

const CNAME = "categoryCenter.service.js ";

class CategoryCenterService {
  constructor() {
    console.log("Initial ", CNAME);
  }
  async getAll() {
    try {
      const categories = await categoryCenterEntity
        .find({})
        .sort({ createdAt: -1 });
      return categories;
    } catch (error) {
      console.log(CNAME, error.message);
      return [];
    }
  }
  getbyId(id) {
    try {
      const category = categoryCenterEntity.findById(id).lean();
      return category;
    } catch (error) {
      console.log(CNAME, error.message);
      return {};
    }
  }
  async create(data) {
    try {
      const c = new categoryCenterEntity(data);
      await c.save();
      return true;
    } catch (error) {
      console.log(CNAME, error.message);
      return false;
    }
  }
  async update(data, id) {
    try {
      const result = await categoryCenterEntity.findByIdAndUpdate(
        id,
        {
          name: data.name,
          slug: data.slug,
          desc: data.desc
        },
        { new: true },
      );
      return { success: true, data: result };
    } catch (error) {
      console.log(CNAME, error.message);
      return false;
    }
  }
  async delete(id) {
    try {
      const result = await categoryCenterEntity.deleteOne({ _id: id });
      return true;
    } catch (error) {
        console.log(CNAME, error.message);
        return fasle;
    }
  }
  async getMenu(){
    try {
      const menus = categoryCenterEntity.find({}).select('name slug').sort({createdAt: -1});
      return menus;
    } catch (error) {
      console.log(CANME, error.message);
      return [];
    }
  }
}

module.exports = new CategoryCenterService();

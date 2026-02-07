const CNAME = "category.service.js ";
const CategoryEntity = require("../model/category.model");
const menuUtils = require("../utils/menu.utils");

class CategoryService {
  constructor(parameters) {
    console.log("initial " + CNAME);
  }
  async add(category) {
    try {
      const c = new CategoryEntity(category);
      await c.save();
      return true;
    } catch (error) {
      console.log(CNAME, error.message);
      return false;
    }
  }
  async getAll() {
    try {
      const categories = await CategoryEntity.find().lean();
      return categories;
    } catch (error) {
      console.log(CNAME, error.message);
      return [];
    }
  }
  async getBySlug() {}
  async getById(id) {
    try {
      const category = await CategoryEntity.findOne({ _id: id }).lean();
      return { success: true, cat: category };
    } catch (error) {
      console.log(CNAME, error.message);
      return { success: false, cat: {} };
    }
  }
  async update(id, category) {
    try {
      const result = await CategoryEntity.findByIdAndUpdate(
        id,
        {
          name: category.name,
          category_root: category.category_root,
          slug: category.slug,
        },
        {
          new: true,
        },
      );
      return { success: true, data: result };
    } catch (error) {
      console.log(CNAME, error.message);
      return { success: false, mess: error.message };
    }
  }
  async Delete(id) {
    try {
      const result = await CategoryEntity.deleteOne({ _id: id });
      return true;
    } catch (error) {
      console.log(CNAME, error.message);
      return false;
    }
  }
  async getMenuFilterByRoot(root) {
    try {
      const categories = await CategoryEntity.find({
        category_root: root,
      }).sort({ createdAt: 1 });
      return categories;
    } catch (error) {
      console.log(CNAME, error);
      return [];
    }
  }
  async getMenu() {
    try {
      const categories = await CategoryEntity.find()
        .select("name category_root slug")
        .sort({ createdAt: 1 });

      const menu = {
        news: [],
        training: [],
        // service: [],
      };
      categories.forEach((c) => {
        if (menu[c.category_root]) {
          menu[c.category_root].push(c);
        }
      });
      return menu;
    } catch (error) {
      console.log(CNAME, error.message);
      return [];
    }
  }
  async increaseCountCategory(id) {
    try {
      const result  = await CategoryEntity.findByIdAndUpdate(
        id,
        {$inc: {quantity: 1}}
      );
      console.log(result);
      return true;
    } catch (error) {
      console.log(CNAME, error.message);
      return false;
    }
  }
  async reduceCountCategory(id){
    try {
      const result = await CategoryEntity.findByIdAndUpdate(
        id,
        {$inc: {quantity: -1}}
      )
      console.log(result);
      return true;
    } catch (error) {
      console.log(CNAME, error.message);
      return false;
    }
  }

}

module.exports = new CategoryService();

const articleEntity = require("../model/article.model");

const CNAME = "article.service.js ";

class ArticleService {
  constructor() {
    console.log("Initial ", CNAME);
  }

  async create(data) {
    try {
      const result = await articleEntity.create(data);
      console.log(result);
      console.log(typeof result);
      return true;
    } catch (error) {
      console.log(CNAME, error.message);
      return false;
    }
  }
  async getAll() {
    try {
      const articles = await articleEntity.find({}).lean();
      return articles;
    } catch (error) {
      console.log(CNAME, error.message);
      return [];
    }
  }
  async getbyId(id) {
    try {
      const article = await articleEntity.findById(id);
      return article;
    } catch (error) {
      console.log(CNAME, error.message);
      return {};
    }
  }
  async update(data, id) {
    try {
      const result = await articleEntity.findByIdAndUpdate(
        id,
        {
          $set: data,
        },
        { new: true },
      );
      return true;
    } catch (error) {
      console.log(CANME, error.message);
      return false;
    }
  }
  async delete(id) {
    try {
      const result = await articleEntity.findByIdAndDelete(id);
      console.log(result);
      return true;
    } catch (error) {
      console.log(CNAME, error.message);
      return false;
    }
  }
}

module.exports = new ArticleService();

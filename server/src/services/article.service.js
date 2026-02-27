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
      return {}
    }
  }
  update(data, id) {}
  delete(id) {}
}

module.exports = new ArticleService();

const categoryModel = require("../model/category.model");
const categoryService = require("../services/category.service");

const CNAME = "category.controller.js ";
const VNAME = "admin/blog/";

const categoryController = () => {
  return {
    Index: async (req, res) => {
      try {
        const categories = await categoryService.getAll();
        res.render(VNAME + "category", { c: categories });
      } catch (error) {
        console.log(CNAME, error.message);
        res.render(VNAME + "category", { c: [] });
      }
    },
    // ajax
    Categories: async (req, res) => {
      try {
        const categories = await categoryService.getAll();
        res.json({ success: true, data: categories });
      } catch (error) {
        console.log(CNAME, error.message);
        res.status(500).json({ success: false, data: [] });
      }
    },
    Add: async (req, res) => {
      try {
        const data = req.body;
        const cateogryDTO = {
          name: data.name,
          category_root: data.category_root,
        };
        console.log("data ", cateogryDTO);
        const result = await categoryService.add(cateogryDTO);
        return res.json({
          success: true,
          data: result,
        });
      } catch (error) {
        console.log(CNAME, error.message);
        res.status(500).json({ success: false, mess: error.message });
      }
    },
    // ajax
    Edit: async (req, res) => {
      try {
        const _id = req.params.id;
        console.log(_id);
        const c = await categoryService.getById(_id);
        res.json({ success: true, cat: c });
      } catch (error) {
        console.log(CNAME, error.message);
        res.json({ success: true, cat: error.message });
      }
    },
    Update: async (req, res) => {
      try {
        const data = req.body;
        const cDTO = {
          name: data.name,
          category_root: data.category_root,
        };
        const result = await categoryService.update(cDTO);
        res.json({ success: true });
      } catch (error) {
        console.log(CNAME, error.message);
        res.json({ success: false, mess: error.message });
      }
    },
    Delete: async (req, res) => {
      try {
        const _id = req.params.id;
        console.log(_id);
        const result = await categoryService.Delete(_id);
        res.json({ success: true });
      } catch (error) {
        console.log(CNAME, error.message);
        return res.status(500).json({
          success: false,
          mess: error.message,
        });
      }
    },
  };
};

module.exports = categoryController;

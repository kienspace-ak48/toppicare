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
      console.log('is running')
      try {
        const _id = req.params.id;
        console.log(_id);
        const c = await categoryService.getById(_id);
        console.log(c)
        res.json({ success: true, data: c.cat });
      } catch (error) {
        console.log(CNAME, error.message);
        res.json({ success: false, mess: error.message });
      }
    },
    Update: async (req, res) => {
      try {
        const data = req.body;
        const _id = req.params.id;
        const cDTO = {
          name: data.name,
          category_root: data.category_root,
          slug: data.slug
        };
        const result = await categoryService.update(_id, cDTO);
        if(result.success){
          return res.json({ success: true });
        }
        res.status(500).json({ success: false, mess: result.mess })
      } catch (error) {
        console.log(CNAME, error.message);
        res.json({ success: false, mess: error.message });
      }
    },
    Delete: async (req, res) => {
      try {
        console.log('is running')
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
    getMenuFilterByRoot: async(req, res)=>{
      try {
        const _root = req.query.root;
        console.log('id ',_root);
        const menu = await categoryService.getMenuFilterByRoot(_root);
        return res.json(menu)
      } catch (error) {
        console.log(CNAME, error.message)
        return res.status(500).json({success: false, mess: error.message})
      }
    },
    getMenu:async (req, res)=>{
      try {
        const menu = await categoryService.getMenu();
        res.json(menu) 
      } catch (error) {
        console.log(CNAME, error.message);
        res.status(500).json({success: false, mess: error.message})
      }
    }
  };
};

module.exports = categoryController;

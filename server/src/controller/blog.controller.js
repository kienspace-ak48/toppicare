const categoryModel = require("../model/category.model");
const categoryService = require("../services/category.service");

const CNAME = "blog.controller.js ";
const VNAME = "admin/blog/";

const BlogController = () => {
  return {
    Index: async (req, res) => {
      res.render(VNAME + "index");
    },
    Category: async (req, res) => {
      res.render(VNAME + "category");
    },
    //
    CategoryAdd: async (req, res) => {
      try {
        const cDTO = {
          name: "Bấm Huyệt",
        //   slug: "massage",
          category_root: "service"
        };
        // const result = await categoryService.add(cDTO);
        console.log('is running')
        const c = new categoryModel(cDTO);
        const result = await c.save();
        res.json({success: true, data: result});
      } catch (error) {
        res.status(500).json({
          success: false, 
          message: error.message,
        });
      }
      
    },
    CategoryGetAll: async(req, res)=>{
      try {
        const categories = await categoryService.getAll();
        res.json({success: true, data: categories})
      } catch (error) {
        console.log(CANME, error.message);
      }
    }
  };
};

module.exports = BlogController;

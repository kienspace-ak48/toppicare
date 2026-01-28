const categoryModel = require("../model/category.model");
const blogService = require("../services/blog.service");
const categoryService = require("../services/category.service");


const CNAME = "blog.controller.js ";
const VNAME = "admin/blog/";

const BlogController = () => {
  return {
    Index: async (req, res) => {
      try {
        const menu = await categoryService.getMenu();
        console.log(menu)
        res.render(VNAME + "index", {menu: menu});
      } catch (error) {
        console.log(CNAME, error.message);
        res.render(VNAME + "index", {menu:[]});
      }
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
    },
    // 
    AddBlog: async(req, res)=>{
      try {
        const data = req.body;
        const bDTO = {
          title: data.title,
          desc: data.desc,
          content: data.content,
          slug: data.slug,
          status: data.status,
          category_id: data.category,
          img: data.img
        }
        console.log(bDTO);
        const result = await blogService.add(bDTO)
        console.log(result)
        if(!result){
          throw new Error(CNAME+"add blog failed");
        }
        res.json({success: true, data: bDTO})
      } catch (error) {
        console.log(CNAME, error.message)
        res.status(500).json({success: false, message: error.message})
      }
    },
    EditBlog: async(req, res)=>{
      try {
        const _id = req.params.id;
        const blog = await blogService.getById(_id);
        console.log(blog);
        const menu = await categoryService.getMenu();
        res.render(VNAME+'edit', {menu, blog});
      } catch (error) {
        console.log(CNAME, error.message)
        res.render(VNAME+'edit', {menu: [], blog: {}});
      }
    },
    UpdateBlog: async(req, res)=>{
      console.log('is running')
      try {
        const _id = req.params.id;
        const data = req.body;
        const bDTO ={
          title: data.title,
          desc: data.desc,
          slug: data.slug,
          content: data.content,
          status: data.status,
          img: data.img,
          category_id: data.category
        }
        console.log(bDTO);
        console.log('id', _id)
        const result = await blogService.update(_id, bDTO);
        // const result = true;
        console.log(result);
        if(!result){
          throw new Error(CNAME+'update faield');
        }
        res.json({success: true})
      } catch (error) {
        console.log(CNAME, error.message)
        res.json({success: false, mess: error.message})
      }
    }
  };
};

module.exports = BlogController;

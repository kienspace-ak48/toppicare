const blogEntity = require("../model/blog.model");
const categoryModel = require("../model/category.model");
const blogService = require("../services/blog.service");
const categoryService = require("../services/category.service");


const CNAME = "blog.controller.js ";
const VNAME = "admin/blog/";

const BlogController = () => {
  return {
    Index: async (req, res) => {
      try {
        const blogs = await blogService.getAll();
        const menu = await categoryService.getMenu();
        res.render(VNAME + "index", {menu: menu});
      } catch (error) {
        console.log(CNAME, error.message);
        res.render(VNAME + "index", {menu:[]});
      }
    },
    //ajax
    BlogGetAll: async(req, res)=>{
      try {
        const blogs = await blogService.getAllMergeCaregory();
        res.json({data:blogs})
      } catch (error) {
        console.log(CNAME, error.message)  
        return res.json({success: false, mess: error.message});
      }
    },
    FormAdd: async (req, res) => {
      try {
        const menu = await categoryService.getMenu();
        res.render(VNAME + "add", {menu: menu});
      } catch (error) {
        console.log(CNAME, error.message);
        res.render(VNAME + "add", {menu:[]});
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
          category_root: "service"
        };
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
          status: data.status == '0' ? false : true,
          category_id: data.category,
          img: data.img
        }
        const result = await blogService.add(bDTO);
        if(!result){
          throw new Error(CNAME+"add blog failed");
        }
        const task2 = await categoryService.increaseCountCategory(bDTO.category_id);
        res.json({success: true, data: bDTO})
      } catch (error) {
        console.log(CNAME, error.message)
        res.status(500).json({success: false, message: error.message})
      }
    },
    DeleteBlog: async(req, res)=>{
      try {
        const _id = req.params.id;
        //tim ra doc truoc khi delete
        const task1 = await blogService.getById(_id);
        const result = await blogService.delete(_id);
        if(!result){
          throw new Error("Delete blog failed");
          // return false;
        }
        const task2 = await categoryService.reduceCountCategory(task1.category_id);
        res.json({success: true})
      } catch (error) {
        console.log(CNAME, error.message)
        res.status(500).json({success: false, mess: error.message})
      }
    },
    EditBlog: async(req, res)=>{
      try {
        const _id = req.params.id;
        const menu = await categoryService.getMenu();
        const blog = await blogEntity.findById(_id)
                              .populate('category_id');
        res.render(VNAME+'edit', {menu, blog});
      } catch (error) {
        console.log(CNAME, error.message)
        res.render(VNAME+'edit', {menu: [], blog: {}});
      }
    },
    UpdateBlog: async(req, res)=>{
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
        const beforeUpdate = await blogService.getById(_id);
        if(!(beforeUpdate.category_id == bDTO.category_id)){
          await categoryService.reduceCountCategory(beforeUpdate.category_id) // cu -> giam
          await categoryService.increaseCountCategory(bDTO.category_id); // moi -> tang
        }
        const result = await blogService.update(_id, bDTO);
        if(!result){
          throw new Error(CNAME+'update faield');
        }
        // const task1 = await categoryService.increaseCountCategory()
        res.json({success: true})
      } catch (error) {
        console.log(CNAME, error.message)
        res.json({success: false, mess: error.message})
      }
    }
  };
};

module.exports = BlogController;

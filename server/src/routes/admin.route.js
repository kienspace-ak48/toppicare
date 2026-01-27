const express = require("express");
const router = express.Router();
const homeController = require("../controller/home.controller")();
const galleryController = require("../controller/gallery.controller")();
const blogController = require('../controller/blog.controller')();
const categoryController = require('../controller/category.controller')();

const uploadImage = require("../config/uploadImage.config");

//
router.post("/page-config", homeController.CreatePageConfig)
router.get("/page-config", homeController.PageConfig);
// gallery
router.post(
  "/gallery/image-upload",
  uploadImage.single("image"),
  (req, res, next) => {
    console.log("REQ.FILE =", req.file);
    next();
  },
  galleryController.UploadFile,
);
router.delete("/gallery/image-delete", galleryController.DeleteImage);
router.get("/gallery", galleryController.Index);
router.get('/gallery/image-getall', galleryController.GetAll);
// blog
// POSTS controller 
router.get('/blog/category/getall', blogController.CategoryGetAll);
router.get('/blog/category', blogController.Category);
router.get('/blog/category/add', blogController.CategoryAdd);
router.get('/blog', blogController.Index);
// CATEGORY ROUTE 

router.get('/category/get-all', categoryController.Categories);
router.delete('/category/delete/:id', categoryController.Delete);
router.get('/category/edit/:id', categoryController.Edit)
router.put('/category/update/:id', categoryController.Update);
router.post('/category/add', categoryController.Add)
router.get('/category/', categoryController.Index);
// router.get('/blog/', )
// dashboard
router.get("/", homeController.Index);

module.exports = router;

const express = require("express");
const router = express.Router();
const homeController = require("../controller/home.controller")();
const galleryController = require("../controller/gallery.controller")();
const blogController = require('../controller/blog.controller')();
const categoryController = require('../controller/category.controller')();
const PageConfigController = require('../controller/pageconfig.controller')();
const uploadImage = require("../config/uploadImage.config");
const ServicePackageController = require("../controller/servicePackage.controller")();
const ServiceController = require('../controller/service.controller')();
//page config
//-contact
router.get('/page-config/contact-section', PageConfigController.ContactSection);
router.put('/page-config/contact-section', PageConfigController.SaveContactSection);
//-traning
router.get('/page-config/training-section', PageConfigController.TraningSection);
router.put('/page-config/training-section', PageConfigController.SaveTraningSection);
//-about
router.get('/page-config/about-section', PageConfigController.AboutSection);
router.put('/page-config/about-section', PageConfigController.SaveAboutSetion);
//-news
router.get('/page-config/news-section', PageConfigController.NewsSection);
router.put('/page-config/news-section', PageConfigController.SaveNewsSection);
//-services
router.get('/page-config/services-section', PageConfigController.ServiceSection);
router.put('/page-config/services-section', PageConfigController.SaveServiceSetion);
//-home
router.post("/page-config", homeController.CreatePageConfig);
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
router.get('/gallery/image-getall', galleryController.GetAll);
router.get("/gallery", galleryController.Index);
//===========category
router.post('/gallery/category/create', galleryController.CreateFolder);
// blog
// POSTS controller 
router.get('/blog/get-all', blogController.BlogGetAll);
router.delete('/blog/delete-blog/:id', blogController.DeleteBlog);
router.get('/blog/edit-blog/:id', blogController.EditBlog);
router.put('/blog/update-blog/:id', blogController.UpdateBlog);
router.post('/blog/add-blog', blogController.AddBlog);
router.get('/blog/category/getall', blogController.CategoryGetAll);
router.get('/blog/category', blogController.Category);
router.get('/blog/category/add', blogController.CategoryAdd);
router.get('/blog/form-add', blogController.FormAdd);
router.get('/blog', blogController.Index);
// Service ROUTE
router.get("/service/", ServiceController.Index);
router.get("/service/list", ServiceController.GetAll);
router.get("/service/add", ServiceController.FormAdd);
router.post("/service/add", ServiceController.Add);
router.get("/service/edit/:id", ServiceController.Edit);
router.post("/service/update/:id", ServiceController.Update);
router.delete("/service/delete/:id", ServiceController.Delete);
//ServicePackage ROUTE 
router.get("/service-package/:service_id", ServicePackageController.Index);
router.get("/service-package/list/:service_id", ServicePackageController.GetByService);
router.get("/service-package/add/:service_id", ServicePackageController.FormAdd);
router.post("/service-package/add", ServicePackageController.Add);
router.get("/service-package/edit/:id", ServicePackageController.Edit);
router.post("/service-package/update/:id", ServicePackageController.Update);
router.delete("/service-package/delete/:id", ServicePackageController.Delete);
// frontend
router.get("/featured", ServiceController.GetFeatured);


// CATEGORY ROUTE 
// category/get-menu?root=${name}
router.get('/category/get-menu/filter', categoryController.getMenuFilterByRoot);
router.get('/category/get-menu', categoryController.getMenu);
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

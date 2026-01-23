const express = require("express");
const router = express.Router();
const homeController = require("../controller/home.controller")();
const galleryController = require("../controller/gallery.controller")();
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
// router.get('/blog/', )
// dashboard
router.get("/", homeController.Index);
module.exports = router;

const CNAME = "gallery.controller.js ";
const VNAME = "admin/";
const myPathConfig = require('../config/myPath.config');
const path = require('path');
const fs = require('fs');
const sharp = require('sharp');
const ImageEntity = require('../model/image.model')
const galleryController = () => {
    //tao thu muc
        const pathPrefix = 'uploads/imgs/'
        const uploadDir = path.join(myPathConfig.public, pathPrefix)
  return {
    Index:async (req, res) => {
        try {
            const images = await ImageEntity.find().lean();
      res.render(VNAME + "gallery", {images});
        } catch (error) {
            console.log(CNAME, error.message);
            res.render(VNAME, +'gallery', {images: []})
        }
    },
    UploadFile:async (req, res) => {
      try {
        const file = req.file;
        if (!file) {
          return res
            .status(400)
            .json({ success: false, mess: "ko co file upload" });
        }
        //
        if(!fs.existsSync(uploadDir)){
            fs.mkdirSync(uploadDir, {recursive: true});
        }
        //tao ten file
        const fileOriginal  = file.originalname;
        const fileName = path.parse(fileOriginal).name;
        const fUnique = `img-${fileName}-${Math.round(Math.random()*1e9)}.webp`
        
        const physicalDir = uploadDir+fUnique;
        //lu vao bo nho vat ly
        await sharp(req.file.buffer)
        // .resize(800)
        .webp({quality: 85})
        .toFile(physicalDir)
        // luu vao DB
        const image = new ImageEntity({
            name: fileName,
            path: pathPrefix+fUnique
        })
        await image.save();
        // res.json({
        //   success: true,
        //   file: file
        // });
        res.redirect('/admin/gallery')
      } catch (error) {
        console.log(CNAME, error.message);
        // res.status(500).json({
        //     success: false, mess: error.message
        // })
        res.redirect('/admin/gallery')
      }
    },
    DeleteImage: async(req, res)=>{
        try {
            // const data = req.d
            // data;
            console.log('running')
            const _pathName = req.body.img_slug;
            console.log('data ',_pathName)
            if(!_pathName) return res.status(500).json({success: false, mess: 'no data'});

            // const file = await ImageEntity.findOne({path: _pathName});
            const result =await ImageEntity.findOneAndDelete({path: _pathName});
            console.log('kq: ', result);
            console.log(result)
            res.json({success: true})

        } catch (error) {
            console.log(CNAME+ error.message);

        }
    },
    // ajax
    GetAll: async(req, res)=>{
      try {
        const imgs = await ImageEntity.find().sort({}).lean();
        console.log(imgs);
        return res.json({success: true, data: imgs}); 
      } catch (error) {
        console.log(CNAME, error.message);
        return res.status(500).json({success: false, data: []});

      }
    }
  };
};

module.exports = galleryController;

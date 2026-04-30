const CNAME = "homeController.js "
const VNAME = "admin/";
const PageConfigEntity = require('../model/pageConfig.model');
const blogModel = require("../model/blog.model");
const contactModel = require("../model/contact.model");
const serviceModel = require("../model/service.model");
const articleModel = require("../model/article.model");

const homeController = ()=>{
    return {
        Index: async (req, res)=>{
            let blog = 0;
            let contactCustomer = 0;
            let contactPartner = 0;
            let serviceCount = 0;
            let articles = 0;
            try {
                [blog, contactCustomer, contactPartner, serviceCount, articles] = await Promise.all([
                    blogModel.countDocuments({ deletedAt: null }),
                    contactModel.countDocuments({ type: "customer" }),
                    contactModel.countDocuments({ type: "partner" }),
                    serviceModel.countDocuments(),
                    articleModel.countDocuments(),
                ]);
            } catch (error) {
                console.log(CNAME, error.message);
            }
            const dashboardChart = {
                labels: ["Blog", "Liên hệ KH", "Liên hệ ĐT", "Dịch vụ", "Help center"],
                values: [blog, contactCustomer, contactPartner, serviceCount, articles],
            };
            res.render(VNAME+'dashboard', {
                queryForbidden: req.query.forbidden === "1",
                dashboardChart,
            });
        },
        PageConfig:async (req, res)=>{
            try {
                const pc = await PageConfigEntity.findOne().lean(); 
                res.render('admin/pageConfig', {pc})
            } catch (error) {
                console.log(CNAME, error.message);
                res.render('admin/pageConfig', {pc: []})
            }
        },
        CreatePageConfig: async (req, res)=>{
            try {
                console.log('running')
                const data = req.body;
                const pcDTO = data;
                const result = await PageConfigEntity.findOneAndUpdate(
                    {},
                    pcDTO,
                    {
                        upsert: true,
                        new: true
                    }
                );
                res.json({success: true, result})

            } catch (error) {
                console.log(CNAME, error.message);   
                res.status(500).json({success: false, mess: error.message})
            }
        }
    }
}

module.exports = homeController;
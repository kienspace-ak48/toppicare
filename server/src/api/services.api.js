const ServiceEntity = require("../model/service.model");
const ServicePackageEntity = require('../model/service_package.model');

const CNAME = 'services.api.js ';

const ServicesApi = ()=>{
    return {
        Index: async(req, res)=>{
            try {
                const services = await ServiceEntity.find().lean();
                console.log(services);
                res.json({success: true, data: services});
            } catch (error) {
                console.log(CNAME, error.message);
                res.json({success: false, mess: error.message})
            }
        },
        ServicePackage: async(req, res)=>{
            try {
                const _slug = req.params.slug;
                const services = await ServiceEntity.findOne({slug: _slug}).lean();
                if(!services){throw new Error("Not found");
                }
                const servicePackages = await ServicePackageEntity.find({service_id: services._id});
                services.packages= servicePackages;
                res.json({success: true, data: services})
            } catch (error) {
                console.log(CNAME, error.message);
                res.json({success: false, mess: error.message});
            }
        }
    }
} 

module.exports = ServicesApi;
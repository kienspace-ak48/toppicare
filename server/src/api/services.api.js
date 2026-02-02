const ServiceEntity = require("../model/service.model");

const CNAME = 'services.api.js ';

const ServicesApi = ()=>{
    return {
        Index: async(req, res)=>{
            const services = await ServiceEntity.find().lean();
            console.log(services);
            res.json({success: true, data: services});
        }
    }
} 

module.exports = ServicesApi;
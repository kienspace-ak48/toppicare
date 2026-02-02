const CNAME = "service.service.js ";
const ServiceEntity = require("../model/service.model");

class ServiceService {
  constructor() {
    console.log("initial " + CNAME);
  }

  async add(service) {
    try {
      const s = new ServiceEntity(service);
      await s.save();
      return true;
    } catch (error) {
      console.log(CNAME, error.message);
      return false;
    }
  }

  async getAll() {
    try {
      const services = await ServiceEntity.find().sort({order: 1}).lean();
      return services;
    } catch (error) {
      console.log(CNAME, error.message);
      return [];
    }
  }

  async getFeatured() {
    try {
      const services = await ServiceEntity.find({
        isFeatured: true,
        status: true
      }).sort({order: 1}).lean();
      return services;
    } catch (error) {
      console.log(CNAME, error.message);
      return [];
    }
  }

  async getById(id) {
    try {
      const service = await ServiceEntity.findById(id).lean();
      return service;
    } catch (error) {
      console.log(CNAME, error.message);
      return null;
    }
  }

  async getBySlug(slug) {
    try {
      const service = await ServiceEntity.findOne({
        slug,
        status: true
      }).lean();
      return service;
    } catch (error) {
      console.log(CNAME, error.message);
      return null;
    }
  }

  async update(id, data) {
    try {
      const result = await ServiceEntity.findByIdAndUpdate(
        id,
        data,
        { new: true }
      );
      return result;
    } catch (error) {
      console.log(CNAME, error.message);
      return false;
    }
  }

  async delete(id) {
    try {
      await ServiceEntity.deleteOne({_id: id});
      return true;
    } catch (error) {
      console.log(CNAME, error.message);
      return false;
    }
  }
}

module.exports = new ServiceService();

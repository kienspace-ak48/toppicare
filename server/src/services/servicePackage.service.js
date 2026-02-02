const CNAME = "servicePackage.service.js ";
const ServicePackageEntity = require("../model/service_package.model");

class ServicePackageService {
  constructor() {
    console.log("initial " + CNAME);
  }

  async add(data) {
    try {
      const p = new ServicePackageEntity(data);
      await p.save();
      return true;
    } catch (error) {
      console.log(CNAME, error.message);
      return false;
    }
  }

  async getByService(service_id) {
    try {
      const packages = await ServicePackageEntity.find({
        service_id,
        status: true
      }).sort({ order: 1 }).lean();
      return packages;
    } catch (error) {
      console.log(CNAME, error.message);
      return [];
    }
  }

  async getById(id) {
    try {
      return await ServicePackageEntity.findById(id).lean();
    } catch (error) {
      console.log(CNAME, error.message);
      return null;
    }
  }

  async update(id, data) {
    try {
      const result = await ServicePackageEntity.findByIdAndUpdate(
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
      await ServicePackageEntity.deleteOne({ _id: id });
      return true;
    } catch (error) {
      console.log(CNAME, error.message);
      return false;
    }
  }
}

module.exports = new ServicePackageService();

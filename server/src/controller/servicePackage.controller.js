const servicePackageService = require("../services/servicePackage.service");
const serviceService = require("../services/service.service");

const CNAME = "servicePackage.controller.js ";
const VNAME = "admin/service_package/";

const ServicePackageController = () => {
  return {

    // render list theo service
    Index: async (req, res) => {
      try {
        const service_id = req.params.service_id;
        
        const serviceRes = await serviceService.getById(service_id);
        console.log(serviceRes)
        const service = serviceRes?.data || serviceRes; // ✅ FIX
        const packages = await servicePackageService.getByService(service_id);
        res.render(VNAME + "index", { service, packages });
      } catch (error) {
        console.log(CNAME, error.message);
        res.render(VNAME + "index", { service: {} });
      }
    },

    // ajax get packages theo service
    GetByService: async (req, res) => {
      try {
        const service_id = req.params.service_id;
        const packages = await servicePackageService.getByService(service_id);
        res.json({ success: true, data: packages });
      } catch (error) {
        console.log(CNAME, error.message);
        res.json({ success: false, mess: error.message });
      }
    },

    // form add
    FormAdd: async (req, res) => {
      const service_id = req.params.service_id;
      const serviceRes = await serviceService.getById(service_id);
    const service = serviceRes?.data || serviceRes;
      res.render(VNAME + "add", { service });
    },

    // add
    Add: async (req, res) => {
      try {
        const data = req.body;

        const pDTO = {
          service_id: data.service_id,
          name: data.name,
          duration: data.duration,
          price: data.price,
          features: data.features || [],
          isPopular: data.is_popular == '1',
          status: data.status == '1',
          order: data.order || 0
        };

        const result = await servicePackageService.add(pDTO);
        if (!result) {
          throw new Error("Add package failed");
        }

        res.json({ success: true });
      } catch (error) {
        console.log(CNAME, error.message);
        res.status(500).json({ success: false, mess: error.message });
      }
    },

    // edit
    Edit: async (req, res) => {
      try {
        const _id = req.params.id;
        const pkg = await servicePackageService.getById(_id);
        res.render(VNAME + "edit", { pkg });
      } catch (error) {
        console.log(CNAME, error.message);
        res.render(VNAME + "edit", { pkg: {} });
      }
    },

    // update
    Update: async (req, res) => {
      try {
        const _id = req.params.id;
        const result = await servicePackageService.update(_id, req.body);

        if (!result) {
          throw new Error("Update package failed");
        }

        res.json({ success: true });
      } catch (error) {
        console.log(CNAME, error.message);
        res.json({ success: false, mess: error.message });
      }
    },

    // delete
    Delete: async (req, res) => {
      try {
        const _id = req.params.id;
        await servicePackageService.delete(_id);
        res.json({ success: true });
      } catch (error) {
        console.log(CNAME, error.message);
        res.json({ success: false, mess: error.message });
      }
    }
  };
};

module.exports = ServicePackageController;

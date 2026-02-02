const serviceService = require("../services/service.service");

const CNAME = "service.controller.js ";
const VNAME = "admin/service/";

const ServiceController = () => {
  return {

    // render index
    Index: async (req, res) => {
      try {
        res.render(VNAME + "index");
      } catch (error) {
        console.log(CNAME, error.message);
        res.render(VNAME + "index");
      }
    },

    // ajax get all
    GetAll: async (req, res) => {
      try {
        const services = await serviceService.getAll();
        res.json({ success: true, data: services });
      } catch (error) {
        console.log(CNAME, error.message);
        res.json({ success: false, mess: error.message });
      }
    },

    // form add
    FormAdd: async (req, res) => {
      res.render(VNAME + "add");
    },

    // add service
    Add: async (req, res) => {
      try {
        const data = req.body;

        const sDTO = {
          name: data.name,
          shortDesc: data.shortDesc,
          desc: data.desc,
          thumbnail: data.thumbnail,
          icon: data.icon,
          benefits: data.benefits || [],
          isFeatured: data.isFeatured == '1',
          status: data.status == '1',
          order: data.order || 0
        };

        console.log(sDTO)
        const result = await serviceService.add(sDTO);
        // const result = sDTO;
        if(!result){
          throw new Error("Add service failed");
        }

        res.json({ success: true });
      } catch (error) {
        console.log(CNAME, error.message);
        res.status(500).json({ success: false, mess: error.message });
      }
    },

    // edit form
    Edit: async (req, res) => {
      try {
        const _id = req.params.id;
        const service = await serviceService.getById(_id);
        res.render(VNAME + "edit", { service });
      } catch (error) {
        console.log(CNAME, error.message);
        res.render(VNAME + "edit", { service: {} });
      }
    },

    // update
    Update: async (req, res) => {
      try {
        const _id = req.params.id;
        const data = req.body;
                //
        const sDTO = {
          name: data.name,
          shortDesc: data.shortDesc,
          desc: data.description,
          thumbnail: data.thumbnail,
          icon: data.icon,
          benefits: data.benefits ,
          isFeatured: data.isFeatured ,
          status: data.status ,
          order: data.order 
        };
        //
        console.log(sDTO);
        const result = await serviceService.update(_id, sDTO);

        if(!result){
          throw new Error("Update service failed");
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
        await serviceService.delete(_id);
        res.json({ success: true });
      } catch (error) {
        console.log(CNAME, error.message);
        res.json({ success: false, mess: error.message });
      }
    },

    // frontend
    GetFeatured: async (req, res) => {
      try {
        const services = await serviceService.getFeatured();
        res.json({ success: true, data: services });
      } catch (error) {
        console.log(CNAME, error.message);
        res.json({ success: false, mess: error.message });
      }
    }
  };
};

module.exports = ServiceController;

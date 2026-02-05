const pageConfigModel = require("../model/pageConfig.model");
const pageconfigService = require("../services/pageconfig.service");

const CNAME = "pageconfig.controller.js ";
const VNAME = "admin/pageconfig/";

async function getPageConfigFx() {
  try {
    const task1 = await pageconfigService.getPageConfig();
    if (!task1.success) {
      throw new Error("Processing is failed");
    }
    return task1.data;
  } catch (error) {
    return {};
  }
}
const PageConfigController = () => {
  return {
    Index: (req, res) => {
      try {
      } catch (error) {
        console.log(CANME, error.message);
      }
    },
    HomeSection: async (req, res) => {
      try {
        const pc = await PageConfigEntity.findOne().lean();
        res.render("admin/pageConfig", { pc });
      } catch (error) {
        console.log(CNAME, error.message);
        res.render("admin/pageConfig", { pc: [] });
      }
    },
    SaveHomeSection: async (req, res) => {
      try {
        console.log("running");
        const data = req.body;
        const pcDTO = data;
        const result = await PageConfigEntity.findOneAndUpdate({}, pcDTO, {
          upsert: true,
          new: true,
        });
        res.json({ success: true, result });
      } catch (error) {
        console.log(CNAME, error.message);
        res.status(500).json({ success: false, mess: error.message });
      }
    },
    NewsSection: async (req, res) => {
      try {
        const pc = await pageconfigService.getNewsSection();
        res.render(VNAME + "news", { data: pc.data });
      } catch (error) {
        console.log(CANME, error.message);
        res.render(VNAME + "news", { data: [] });
      }
    },
    SaveNewsSection: async (req, res) => {
      try {
        const data = req.body;

        const newsDTO = {
          title: data.title,
          desc: data.desc,
          img_url: data.img_url,
        };
        console.log(newsDTO);
        const service = await pageconfigService.updateNewsSection(newsDTO);
        // const service = false;
        if (!service) {
          throw new Error(CNAME + "update news_section failed");
        }
        res.json({ success: true });
      } catch (error) {
        console.log(CNAME, error.message);
        return res.status(500).json({ success: false, mess: error.message });
      }
    },
    ServiceSection: async (req, res) => {
      try {
        const pc = await getPageConfigFx();
        res.render(VNAME + "services", { data: pc });
      } catch (error) {
        res.render(VNAME + "services", { data: {} });
      }
    },
    SaveServiceSetion: async (req, res) => {
      try {
        const { banner, services, booking_guide } = req.body;
        const sDTO = { banner, services, booking_guide };
        console.log(sDTO);
        const task1 = await pageconfigService.updateServiceSection(sDTO);
        if (!task1.success) {
          throw new Error("Processing is failed");
        }
        res.json({ success: true });
      } catch (error) {
        res.json({ success: false });
      }
    },
    AboutSection: async (req, res) => {
      try {
        const pc = await getPageConfigFx();
        console.log(pc);
        res.render(VNAME + "about", { data: pc });
      } catch (error) {
        console.log(CNAME, error.message);
        res.render(VNAME + "about", { data: {} });
      }
    },
    SaveAboutSetion: async (req, res) => {
      try {
        const { slider, vision, stats } = req.body;
        const aDTO = {
          slider,
          vision,
          stats,
        };
        console.log(aDTO);
        const task1 = await pageconfigService.updateAboutSection(aDTO);
        if (!task1.success) {
          throw new Error("update failed");
        }
        res.json({ success: true });
      } catch (error) {
        console.log(CNAME, error.message);
        res.status(500).json({ success: false });
      }
    },
    TraningSection: async (req, res) => {
      try {
        const pc = await getPageConfigFx();
        res.render(VNAME + "tranining", { data: pc });
      } catch (error) {
        console.log(CNAME, error.message);
        res.render(VNAME + "tranining", { data: {} });
      }
    },
    SaveTraningSection: async (req, res) => {
      try {
        const { banner, benefit } = req.body;
        const bDTO = { banner, benefit };
        console.log(bDTO);
        const task1 = await pageconfigService.updateTrainingSection(bDTO);
        if (!task1.success) {
          throw new Error("Processing faield");
        }
        res.json({ sucess: true });
      } catch (error) {
        console.log(CNAME, error.message);
        res.status(500).json({ sucess: false });
      }
    },
    ContactSection: async (req, res) => {
      try {
        const pc = await getPageConfigFx();
        res.render(VNAME + "contact", {data: pc});
      } catch (error) {
        console.log(CNAME, error.message);
        res.render(VNAME + "contact", {data: pc});
      }
    },
    SaveContactSection: async (req, res) => {
      try {
        const { banner } = req.body;
        const cDTO = { banner };
        const task1 = await pageconfigService.updateContactSection(cDTO);
        if (!task1.success) {
          throw new Error("Processing failed");
        }
        res.json({ success: true });
      } catch (error) {
        console.log(CNAME, error.message);
        res.status(500).json({ success: false });
      }
    },
  };
};

module.exports = PageConfigController;

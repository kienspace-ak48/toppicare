const pageConfigModel = require("../model/pageConfig.model");
const pageconfigService = require("../services/pageconfig.service");

const CNAME = "pageconfig.controller.js ";
const VNAME = "admin/pageconfig/";

const PageConfigController = () => {
  return {
    Index: (req, res) => {
      try {
      } catch (error) {
        console.log(CANME, error.message);
      }
    },
    NewSection: async(req, res) => {
      try {
        const pc = await pageconfigService.getNewsSection();
        res.render(VNAME + "news", {data:pc.data});
      } catch (error) {
        console.log(CANME, error.message);
        res.render(VNAME + "news", {data:[]});
      }
    },
    SaveNewSection: async (req, res) => {
      try {
        const data = req.body;

        const newsDTO = {
          title: data.title,
          desc: data.desc,
          img_url: data.img_url,
        };
        console.log(newsDTO)
        const service = await pageconfigService.updateNewsSection(newsDTO);
        // const service = false;
        if(!service){
            throw new Error(CNAME+ 'update news_section failed');
        }
        res.json({success: true})
      } catch (error) {
        console.log(CNAME, error.message);
        return res.status(500).json({success: false, mess: error.message})
      }
    },
  };
};

module.exports = PageConfigController;

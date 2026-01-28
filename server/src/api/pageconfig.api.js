const CNAME = "pageconfig.api.js ";
const PageConfigEntity = require("../model/pageConfig.model");

const PageConfigApi = () => {
  return {
    Index: async (req, res) => {
      try {
        const pc = await PageConfigEntity.findOne().lean();
        res.json({ success: true, data: pc });
      } catch (error) {
        console.log(CNAME, error.message);
      }
    },
    
  };
};

module.exports = PageConfigApi;
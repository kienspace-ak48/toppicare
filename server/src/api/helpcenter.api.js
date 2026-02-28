const articleModel = require("../model/article.model");

const CNAME = "help-center.api.js ";

const helpCenterApi = () => {
  return {
    Index: async (req, res) => {
      try {
        // const _type = "customer";
        const articles = await articleModel.find();
        return res.json({success: true, data: articles})
      } catch (error) {
        console.log(CNAME, error.message);
        return res.status(500).json({success: false, data: []});
      }
    },
    GetArticleBySlug: async(req, res)=>{
        try {
            const _slug = req.params.slug;
            const article = await articleModel.findOne({slug: _slug});
            return res.json({success: true, data: article});
        } catch (error) {
            console.log(CNAME, error.message);
            res.status(500).json({success: false, dat: {}});
        }
    }
  };
};

module.exports = helpCenterApi;

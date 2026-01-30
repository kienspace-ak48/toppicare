const CNAME = "news.api.js ";
const BlogEntity = require("../model/blog.model");
const CategoryEntity = require("../model/category.model");

const ServiceApi = () => {
  return {
    Index: async (req, res) => {
      try {
        const result = await BlogEntity.find().populate(
          "category_id",
          "name slug category_root",
        );
        // console.log(result)
        res.json({ success: true, data: result });
      } catch (error) {
        console.log(CNAME, error.message);
        res.json({ success: false, data: [] });
      }
    },
    HomePageGetThreeBlog: async (req, res) => {
      try {
        // const nn = await BlogEntity.find({}).sort({createdAt: 1}).limit(3);
        const newThreeBlog = await BlogEntity.find({ status: true })
          .populate({
            path: "category_id",
            match: { category_root: "news" },
            select: "name slug, category_root",
          })
          .sort({ createdAt: -1 })
          .limit(3);
        console.log("Data check here");
        console.log(newThreeBlog);
        res.json({ success: true, data: newThreeBlog });
      } catch (error) {
        console.log(CNAME, error.message);
        res.status(500).json({ success: false, data: [] });
      }
    },
    GelAllServiceBlog: async (req, res) => {
      try {
        const categories = await CategoryEntity.find(
          { category_root: "service" },
          "_id",
        );
        console.log('list category ', categories)
        const categoryIds = categories.map((c) => c._id);
        const blogs = await BlogEntity.find({
          category_id: { $in: categoryIds },
        });

        res.json({ success: true, data: blogs });
      } catch (error) {
        console.log(CNAME, error.message);
        res.status(500).json({ success: false, data: [] });
      }
    },
    GetBlogById: async(req, res)=>{
        try {
            const _id = req.params.id;
            console.log(_id)
            const blog =await BlogEntity.findById(_id);
            res.json({success: true, data: blog})
        } catch (error) {
            console.log(CNAME, error.message)
            res.status(500).json({success: false, data: {}})
        }
    }
  };
};

module.exports = ServiceApi;

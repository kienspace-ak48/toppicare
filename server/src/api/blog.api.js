const CNAME ="news.api.js ";
const BlogEntity = require('../model/blog.model');
const CategoryEntity = require('../model/category.model')

const BlogApi = ()=>{
    return {
        Index: async(req, res)=>{
            try {

                const result = await BlogEntity.find().populate('category_id', 'name slug category_root');
                res.json({success: true, data: result});
            } catch (error) {
                console.log(CNAME, error.message)
                res.json({success: false, data: []})
            }
        },
        HomePageGetThreeBlog: async(req, res)=>{
            try {
                const nn = await BlogEntity.find().sort({createdAt: 1}).limit(3);
                console.log(nn);
                res.json({success: true, data: nn})
            } catch (error) {
                console.log(CNAME, error.message);
                res.status(500).json({success: false, mess: error.message})

            }
        }
    }
}

module.exports = BlogApi;
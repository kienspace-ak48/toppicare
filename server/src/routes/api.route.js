const express = require('express');
const router = express.Router();

const PageConfigApi = require('../api/pageconfig.api')();
const NewsApi = require('../api/blog.api')();
const ServicesApi = require('../api/services.api')();

router.post('/blog/:slug/view', NewsApi.IncreaseBlogView);
router.get('/menu/by-category-root/root', NewsApi.GetMenuByRoot);
router.get('/blog/services/get-one/:id', NewsApi.GetBlogById);
router.get('/blog/get-one-slug/:slug', NewsApi.GetBlogBySlug);
router.get('/blog/services/get-all', NewsApi.GelAllServiceBlog);
router.get('/blog/news/get-all', NewsApi.GetAllNewsBlog);
router.get('/blog/homepage/get-three-blog', NewsApi.HomePageGetThreeBlog);
router.get("/pageconfigs", PageConfigApi.Index);
router.get('/news', NewsApi.Index);
// Services api
router.get('/services/get-all', ServicesApi.Index);
module.exports = router;
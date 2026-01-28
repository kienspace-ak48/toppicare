const express = require('express');
const router = express.Router();

const PageConfigApi = require('../api/pageconfig.api')();
const NewsApi = require('../api/blog.api')();

router.get('/blog/homepage/get-three-blog', NewsApi.HomePageGetThreeBlog);
router.get("/pageconfigs", PageConfigApi.Index);
router.get('/news', NewsApi.Index);
module.exports = router;
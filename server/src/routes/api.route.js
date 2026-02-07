const express = require('express');
const router = express.Router();

const PageConfigApi = require('../api/pageconfig.api')();
const NewsApi = require('../api/blog.api')();
const ServicesApi = require('../api/services.api')();
const LinkCTA = require('../api/linkCTA.api')();

router.post('/blog/:slug/view', NewsApi.IncreaseBlogView);
router.get('/menu/by-category-root/root', NewsApi.GetMenuByRoot);
router.get('/blog/services/get-one/:id', NewsApi.GetBlogById);
router.get('/blog/get-one-slug/:slug', NewsApi.GetBlogBySlug);
router.get('/blog/services/get-all', NewsApi.GelAllServiceBlog);
router.get('/blog/news/get-all', NewsApi.GetAllNewsBlog);
router.get('/blog/training/get-all', NewsApi.GetAllTrainingBlog);
router.get('/blog/homepage/get-three-blog', NewsApi.HomePageGetThreeBlog);
router.get("/pageconfigs", PageConfigApi.Index);
router.get('/news', NewsApi.Index);
// Services api
router.get('/services/get-all', ServicesApi.Index);
router.get('/services/all-pkg/:slug', ServicesApi.ServicePackage);
// Link Action api
router.get('/action-link/download-app', LinkCTA.DownloadApp);
//
function getYoutubeId(url) {
  const reg = /(?:v=|\/embed\/|\.be\/)([A-Za-z0-9_-]{11})/
  const match = url.match(reg)
  return match ? match[1] : null
}

router.get("/video", async (req, res) => {
  const data = {
    title: "Demo",
    youtubeUrl: `<iframe width="560" height="315" src="https://www.youtube.com/embed/3XwRJ4vEApw?si=0ht5Vocr3FXbv7C3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  }

  const videoId = getYoutubeId(data.youtubeUrl)

  res.json({
    ...data,
    videoId
  })
})

module.exports = router;
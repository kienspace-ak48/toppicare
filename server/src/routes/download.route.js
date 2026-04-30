const express = require('express');
const router = express.Router();
const pageconfigService = require('../services/pageconfig.service');

router.get('/', async (req, res)=>{
    const os = req.deviceInfo.os;
    const ChPlayLink = 'https://play.google.com/store/apps/details?id=com.viettrace.toppicare';
    const AppStoreLink = 'https://apps.apple.com/vn/app/toppicare/id6755223405?l=vi';
    // console.log(req.deviceInfo);
    switch (os) {
        case "iOS":
            res.redirect(AppStoreLink);
            break;
        case "Android": 
            res.redirect(ChPlayLink);
            break;
        default: {
            const pc = await pageconfigService.getPageConfig();
            const downloadAppImg = (pc?.success && pc.data?.customize?.download_app_img) ? pc.data.customize.download_app_img : '';
            res.render('pages/download', { layout: false, downloadAppImg });
            break;
        }
    }
})
module.exports = router;
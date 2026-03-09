const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
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
        default:
            res.render('pages/download', {layout: false});
            break;
    }
})
module.exports = router;
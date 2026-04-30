// const uaInfo = requrie('../middlewares/clientInfo');
const pageconfigService = require('../services/pageconfig.service');

const downloadCTAApi = () => {
  return {
    DownloadApp: async (req, res) => {
        const os = req.deviceInfo.os;
      if (os === "iOS") {
        return res.redirect("https://apps.apple.com/vn/app/toppicare/id6755223405?l=vi");
      }

      if (os === "Android") {
        return res.redirect(
          "https://play.google.com/store/apps/details?id=com.viettrace.toppicare&pcampaignid=web_share",
        );
      }

      // Desktop hoặc khác
      const pc = await pageconfigService.getPageConfig();
      const downloadAppImg = (pc?.success && pc.data?.customize?.download_app_img) ? pc.data.customize.download_app_img : '';
      return res.render('pages/download', { layout: false, downloadAppImg });
    },
  };
};

module.exports = downloadCTAApi;

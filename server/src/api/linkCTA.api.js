// const uaInfo = requrie('../middlewares/clientInfo');
const downloadCTAApi = () => {
  return {
    DownloadApp: (req, res) => {
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
      return res.render('pages/download', {layout: false});
      res.json({
        divice: req.deviceInfo,
      });
    },
  };
};

module.exports = downloadCTAApi;

const UAParser = require("ua-parser-js");

module.exports = function deviceInfoMiddleware(req, res, next) {
  const userAgent = req.headers["user-agent"] || "";

  const parser = new UAParser(userAgent);
  const ua = parser.getResult();

  req.deviceInfo = {
    device: ua.device.type || "desktop",
    os: ua.os.name || "unknown",
    osVersion: ua.os.version || "",
    browser: ua.browser.name || "unknown",
    browserVersion: ua.browser.version || "",
  };

  next();
}

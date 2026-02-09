const rateLimit = require("express-rate-limit");

const adminRoute = require("./admin.route");
const apiRoute = require("./api.route");
const authRoute = require("./auth.route");
const authMiddleware = require("../middlewares/auth.middleware");


function routes(app) {
  app.use("/auth", authRoute);
  app.use("/admin",authMiddleware, adminRoute);
  app.use("/api", apiRoute);
}

module.exports = routes;

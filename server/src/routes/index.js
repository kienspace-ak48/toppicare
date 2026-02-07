const rateLimit = require("express-rate-limit");

const adminRoute = require("./admin.route");
const apiRoute = require("./api.route");
const authRoute = require("./auth.route");
const authMiddleware = require("../middlewares/auth.middleware");
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
});

function routes(app) {
  app.use("/auth", authRoute);
  app.use("/admin", adminRoute);
  app.use("/api", apiRoute);
}

module.exports = routes;

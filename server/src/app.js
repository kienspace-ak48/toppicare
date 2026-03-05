const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const helmet = require("helmet");
const expressLayouts = require("express-ejs-layouts");
const dbConnection = require("./config/dbConnection");
const myPath = require("./config/myPath.config");
const routes = require("./routes/index");
const deviceInfoMiddleware = require("./middlewares/clientInfo");
const cookieParser = require("cookie-parser");
const pageConfigModel = require("./model/pageConfig.model");

//connect DB
dbConnection();

//middleware to serve static files
app.use(
  express.static(myPath.public, {
    index: false, // 🔥 CỰC QUAN TRỌNG
  }),
);
app.use(deviceInfoMiddleware);
app.set("view engine", "ejs");
app.set("views", path.join(myPath.root, "src/views"));
app.use(expressLayouts);
app.set("layout", "layouts/adminLayout");

app.use(cookieParser());

app.use(cors({ origin: "*" }));
// app.use(
//   helmet({
//     contentSecurityPolicy: {
//       directives: {
//         defaultSrc: ["'self'"],
//         scriptSrc: ["'self'", "'unsafe-inline'"],
//         styleSrc: ["'self'", "'unsafe-inline'", "https:"],
//         imgSrc: ["'self'", "data:", "blob:", "https:"],
//         connectSrc: ["'self'", "ws:", "wss:"],
//       },
//     },
//   }),
// );
// api
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
routes(app);

app.get("/test", (req, res) => {
  res.json({
    deviceInfo: req.deviceInfo,
    design: "kienvu_dev"
  });
});
async function getSeoFromDB() {
  const config = await pageConfigModel.findOne().select("customize").lean();

  if (!config || !config.customize) {
    return {
      title: "Toppicare - Chăm sóc sức khỏe",
      description: "Giải pháp chăm sóc sức khỏe toàn diện.",
      keywords: "toppicare, chăm sóc sức khỏe",
      image: "https://toppicare.vn/represent_web.webp",
    };
  }

  const c = config.customize;

  return {
    title: c.title || "Toppicare",
    description: c.desc || "",
    keywords: c.keywords || "",
    image: c.img || "https://toppicare.vn/represent_web.webp",
  };
}
function escapeHtml(text = "") {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
//end test area
//=============== 🚀 SPA fallback (React Router)==================//

let template = fs.readFileSync(
  path.join(__dirname, "../public/index.html"),
  "utf-8",
);
// html = html.replace(/__API_URL__/g, process.env.API_URL);
app.use(async (req, res, next) => {
  const seo = await getSeoFromDB(req.path);

  let html = template
    .replace(/__API_URL__/g, process.env.API_URL)
    .replace(/__TITLE__/g, escapeHtml(seo.title))
    .replace(/__DESCRIPTION__/g, escapeHtml(seo.description))
    .replace(/__KEYWORDS__/g, escapeHtml(seo.keywords))
    .replace(/__IMAGE__/g, seo.image)
    .replace(/__URL__/g, "https://toppicare.vn" + req.originalUrl);

  res.send(html);
});

module.exports = app;

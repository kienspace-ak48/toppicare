const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const expressLayouts = require("express-ejs-layouts");
const dbConnection = require("./config/dbConnection");
const UserEntity = require("./model/user.model");
const myPath = require("./config/myPath.config");
const routes = require("./routes/index");
const deviceInfoMiddleware = require("./middlewares/clientInfo");
const cookieParser = require("cookie-parser");

// serve static frontend
// app.use(express.static(path.join(__dirname, "../public")));
//middleware to serve static files
app.use(
  express.static(myPath.public, {
    index: false, // 🔥 CỰC QUAN TRỌNG
  }),
);
app.use(deviceInfoMiddleware);
app.set("view engine", "ejs");
// app.set('views',  myPath.root+'views');
app.set("views", path.join(myPath.root, "src/views"));
app.use(expressLayouts);
app.set("layout", "layouts/adminLayout");
//connect DB
dbConnection();
//
// app.use(cookieParser);

app.use(cors(({origin: '*'})));
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

// test area
app.get("/api/commitments", (req, res) => {
  const commitments = [
    {
      icon: "Award",
      title: "Kỹ Thuật Viên tay nghề cao",
      description:
        "Đội ngũ KTV được đào tạo bài bản, chuyên nghiệp với kinh nghiệp lâu năm",
    },
    {
      icon: "TrendingUp",
      title: "Liệu trình đa dạng",
      description:
        "Nhiều gói dịch vụ phong phú, phù hợp với mọi nhu cầu khách hàng",
    },
    {
      icon: "DollarSign",
      title: "Giá cả minh bạch",
      description: "Bảng giá rõ ràng, không phát sinh chi phí ẩn",
    },
    {
      icon: "Lock",
      title: "Bảo mật thông tin cá nhân",
      description: "Cam kết bảo vệ tuyệt đối thông tin cá nhân của khách hàng",
    },
    {
      icon: "Shield",
      title: "Hiệu quả vượt trội",
      description: "Mang lại kết quả chăm sóc sức khỏe tối ưu nhất",
    },
    {
      icon: "Clock",
      title: "Đúng hẹn",
      description:
        "An tâm trải nghiệm: Kỹ thuật viên đến đúng giờ, đúng lịch hẹn, giúp khách hàng thư giãn trọn vẹn ngay tại nhà",
    },
  ];
  res.json({ success: true, data: commitments });
});
app.get("/api/user", async (req, res) => {
  try {
    const u = new UserEntity({
      name: "Kien Vu",
      username: "kienvu_ak48",
      password: "123",
      email: "test@gmail.com",
      phone: "0123456789",
    });
    await u.save();
    res.json({ sucess: true, user: u });
  } catch (error) {
    console.log("error ", error);
    res.json({ success: false, mess: error.message });
  }
});
app.get("/test", (req, res) => {
  res.json({
    deviceInfo: req.deviceInfo,
  });
});

//end test area
// SPA fallback (React Router)
console.log(path.join(__dirname, "../public/index.html"))

let html = fs.readFileSync(
  path.join(__dirname, "../public/index.html"),
  "utf-8",
);
html = html.replace(/__API_URL__/g, process.env.API_URL);
app.use((req, res) => {
  console.log("bien server ", process.env.API_URL);
  res.send(html);
  // res.sendFile(path.join(__dirname, "../public/index.html"));
});


module.exports = app;

const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const dbConnection = require("./config/dbConnection");
const UserEntity = require("./model/user.model");

// serve static frontend
app.use(express.static(path.join(__dirname, "../public")));
dbConnection();
//
app.use(cors("*"));
// api
app.get("/api/commitments", (req, res) => {
  const commitments = [
    {
      icon: 'Award',
      title: "Kỹ Thuật Viên tay nghề cao",
      description:
        "Đội ngũ KTV được đào tạo bài bản, chuyên nghiệp với kinh nghiệp lâu năm",
    },
    {
      icon: 'TrendingUp',
      title: "Liệu trình đa dạng",
      description:
        "Nhiều gói dịch vụ phong phú, phù hợp với mọi nhu cầu khách hàng",
    },
    {
      icon: 'DollarSign',
      title: "Giá cả minh bạch",
      description: "Bảng giá rõ ràng, không phát sinh chi phí ẩn",
    },
    {
      icon: 'Lock',
      title: "Bảo mật thông tin cá nhân",
      description: "Cam kết bảo vệ tuyệt đối thông tin cá nhân của khách hàng",
    },
    {
      icon: 'Shield',
      title: "Hiệu quả vượt trội",
      description: "Mang lại kết quả chăm sóc sức khỏe tối ưu nhất",
    },
    {
      icon: 'Clock',
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
//
// SPA fallback (React Router)
app.get((req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
// app.get('/', (req,res)=>{
//     res.json({success: true, data: 'hello'})
// });

module.exports = app;

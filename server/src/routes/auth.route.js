const express = require("express");
const ms = require("ms");
const router = express.Router();
const jwt = require("jsonwebtoken");
const rateLimit= require('express-rate-limit');
const bcrypt = require("bcrypt");
const isProd = process.env.NODE_ENV === "production";
const userEntity = require("../model/user.model");
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
});
async function comparePassword(password, hash) {
  const match = await bcrypt.compare(password, hash);
  console.log("ham compare tra ra gi? ");
  console.log(typeof match);
  return match;
}
//form login
router.get("/admin/login", (req, res) => {
  res.render("pages/login", { layout: false });
});
//login
router.post("/admin/login",loginLimiter , async (req, res) => {
  // const {email, password}= req.query
  const { email, password } = req.body;
  console.log(email, password);

  const account = await userEntity.findOne({ email: email });
  if (!account) {
    // return res.status(401).json({success: false, mess: 'Sai tai khoan'});
    console.log("ko thay user");
    return res.render("pages/login", {
      layout: false,
      success: false,
      mess: "username or password is incorrect!",
    });
  }
  const match = await comparePassword(password, account.password);

  if (!match) {
    // return res.status(401).json({success: false, mess: 'Sai mat khau'});
    return res.render("pages/login", {
      layout: false,
      success: false,
      mess: "username or password is incorrect!!",
    });
  }
  const payload = {
        id: account._id,
        username: account.username,
        email: account.email,
        role: account.role
    }
  const token = jwt.sign(
    payload,
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRE },
  );
  res.cookie("token", token, {
    httpOnly: true,
    secure: isProd,
    sameSite: isProd ? "none" : "lax",
    maxAge: ms(process.env.JWT_EXPIRE),
  });
  res.redirect("/admin");
  // res.json({success: true, data: 'login success', token})
});
//logout
router.post("/admin/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/");
});
// register
router.get("/admin/register", async (req, res) => {
  try {
    const { email, password } = { email: "admin@gmail.com", password: "123@" };
    const exitAccount = await userEntity.findOne({ email });
    if (exitAccount) {
      return res
        .status(400)
        .json({ success: false, data: "da ton tai account nay" });
    }
    //hash password
    const hashPassword = await bcrypt.hash(password, 10);
    const uDTO = new userEntity({
      email: email,
      password: hashPassword,
    });
    await uDTO.save();
    res.json({ success: true, data: "creating user is success" });
    // {email, hashPassword};
  } catch (error) {
    console.log(CNAME, error.message);
    res
      .status(500)
      .json({ success: false, mess: "Creating account is failed" });
  }
});
module.exports = router;

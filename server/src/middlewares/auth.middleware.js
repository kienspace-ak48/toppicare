const jwt = require("jsonwebtoken");
const userModel = require("../model/user.model");

const CNAME = "auth.middleware.js ";
const ADMIN_PANEL_ROLES = ["super_admin", "admin"];

async function auth(req, res, next) {
  // const count = await contactService.countNewNotPartner();
  // res.locals.count = count;
  // res.locals.user = {
  //   email: "admin@gmail.com",
  //   username: "kien_vu",
  //   name: "KienVu",
  // };
  // return next();
  const token =
    req.cookies.token ||
    (req.headers.authorization && req.headers.authorization.split(" ")[1]);
  // console.log('nho comment doan nay di khi deploy');
  // console.log('token ',token)
  // next();

  if (!token) {
    return res.redirect(302, "/auth/admin/login");
    // return res.status(401).json({success: false, data: 'chua dang nhap'});
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const getInfoLogin = await userModel
      .findById(decoded.id)
      .select("_id name username email role status avatar")
      .lean();

    if (!getInfoLogin) {
      res.clearCookie("token");
      return res.redirect(302, "/auth/admin/login");
    }
    if (!getInfoLogin.status) {
      res.clearCookie("token");
      return res.redirect(302, "/auth/admin/login?reason=disabled");
    }
    if (!ADMIN_PANEL_ROLES.includes(getInfoLogin.role)) {
      res.clearCookie("token");
      return res.redirect(302, "/auth/admin/login?reason=forbidden");
    }

    req.user = getInfoLogin;
    res.locals.user = getInfoLogin;
    res.locals.isSuperAdmin = getInfoLogin.role === "super_admin";
    res.locals.ADMIN_LOGOUT_URL = "/auth/admin/logout";

    next();
  } catch (error) {
    console.log(CNAME, error.message);
    // return res.status(401).json({success: false, data: 'Token loi'});
    return res.redirect(302, "/auth/admin/login?reason=expired");
  }
}

module.exports = auth;

/**
 * Chỉ super_admin được quản lý tài khoản staff (admin / super_admin).
 */
module.exports = function requireSuperAdmin(req, res, next) {
  if (req.user && req.user.role === "super_admin") {
    return next();
  }
  return res.redirect("/admin?forbidden=1");
};

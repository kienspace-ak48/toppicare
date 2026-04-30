const bcrypt = require("bcrypt");
const userModel = require("../model/user.model");

const STAFF_ROLES = ["super_admin", "admin"];

function normalizeEmail(email) {
  return String(email || "")
    .trim()
    .toLowerCase();
}

/** Form: hidden status=0 + checkbox status=1 — uncheck chỉ gửi 0 */
function parseFormStatus(body) {
  const v = body.status;
  if (v === undefined || v === "") return true;
  if (Array.isArray(v)) return v.includes("1");
  return v === "1" || v === true || v === "on";
}

function normalizeAvatar(v) {
  return String(v || "")
    .trim()
    .replace(/^\/+/, "");
}

async function countActiveSuperAdmins(excludeId) {
  const q = { role: "super_admin", status: true };
  if (excludeId) q._id = { $ne: excludeId };
  return userModel.countDocuments(q);
}

exports.index = async (req, res) => {
  try {
    const accounts = await userModel
      .find({ role: { $in: STAFF_ROLES } })
      .select("name email username role status avatar createdAt")
      .sort({ createdAt: -1 })
      .lean();
    res.render("admin/system/accounts/index", {
      accounts,
      queryError: req.query.error || null,
    });
  } catch (err) {
    console.error("systemAccount.index", err);
    res.redirect("/admin/system/accounts?error=Lỗi tải danh sách");
  }
};

exports.addForm = (req, res) => {
  res.render("admin/system/accounts/add", {
    error: null,
    form: { name: "", email: "", username: "", role: "admin", status: true, avatar: "" },
  });
};

exports.create = async (req, res) => {
  const body = req.body || {};
  const email = normalizeEmail(body.email);
  const password = body.password || "";
  const name = String(body.name || "").trim();
  const username = String(body.username || "").trim();
  const role = body.role;
  const status = parseFormStatus(body);
  const avatar = normalizeAvatar(body.avatar);

  if (!email || !password) {
    return res.render("admin/system/accounts/add", {
      error: "Email và mật khẩu là bắt buộc.",
      form: { ...body, email },
    });
  }
  if (!STAFF_ROLES.includes(role)) {
    return res.render("admin/system/accounts/add", {
      error: "Role không hợp lệ.",
      form: { ...body, email },
    });
  }

  try {
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.render("admin/system/accounts/add", {
        error: "Email đã được sử dụng.",
        form: { ...body, email },
      });
    }
    const hash = await bcrypt.hash(password, 10);
    await userModel.create({
      email,
      password: hash,
      name,
      username: username || email.split("@")[0],
      role,
      status,
      avatar: avatar || "",
    });
    res.redirect("/admin/system/accounts");
  } catch (err) {
    console.error("systemAccount.create", err);
    return res.render("admin/system/accounts/add", {
      error: "Không tạo được tài khoản.",
      form: { ...body, email },
    });
  }
};

exports.editForm = async (req, res) => {
  try {
    const acc = await userModel
      .findById(req.params.id)
      .select("name email username role status avatar")
      .lean();
    if (!acc || !STAFF_ROLES.includes(acc.role)) {
      return res.redirect("/admin/system/accounts");
    }
    let flashError = null;
    if (req.query.flash === "update_failed") flashError = "Cập nhật thất bại.";
    res.render("admin/system/accounts/edit", { account: acc, error: flashError });
  } catch (err) {
    console.error("systemAccount.editForm", err);
    res.redirect("/admin/system/accounts");
  }
};

exports.update = async (req, res) => {
  const id = req.params.id;
  const body = req.body || {};

  try {
    const user = await userModel.findById(id);
    if (!user || !STAFF_ROLES.includes(user.role)) {
      return res.redirect("/admin/system/accounts");
    }

    const email = normalizeEmail(body.email);
    const password = body.password || "";
    const name = String(body.name || "").trim();
    const username = String(body.username || "").trim();
    const role = body.role;
    const status = parseFormStatus(body);
    const avatar = normalizeAvatar(body.avatar);

    if (!email) {
      return res.render("admin/system/accounts/edit", {
        account: { ...user.toObject(), ...body, email: user.email },
        error: "Email là bắt buộc.",
      });
    }
    if (!STAFF_ROLES.includes(role)) {
      return res.render("admin/system/accounts/edit", {
        account: { ...user.toObject(), ...body },
        error: "Role không hợp lệ.",
      });
    }

    if (user.role === "super_admin" && role !== "super_admin") {
      const remaining = await countActiveSuperAdmins(user._id);
      if (remaining === 0) {
        return res.render("admin/system/accounts/edit", {
          account: { ...user.toObject(), ...body },
          error: "Phải còn ít nhất một Super Admin hoạt động.",
        });
      }
    }

    const dup = await userModel.findOne({ email, _id: { $ne: user._id } }).select("_id").lean();
    if (dup) {
      return res.render("admin/system/accounts/edit", {
        account: { ...user.toObject(), ...body },
        error: "Email đã được dùng bởi tài khoản khác.",
      });
    }

    if (password.trim()) {
      user.password = await bcrypt.hash(password, 10);
    }
    user.email = email;
    user.name = name;
    user.username = username || email.split("@")[0];
    user.role = role;
    user.status = status;
    user.avatar = avatar || "";
    await user.save();

    res.redirect("/admin/system/accounts");
  } catch (err) {
    console.error("systemAccount.update", err);
    return res.redirect(`/admin/system/accounts/${id}/edit?flash=update_failed`);
  }
};

exports.destroy = async (req, res) => {
  const id = req.params.id;
  if (String(req.user._id) === String(id)) {
    return res.redirect("/admin/system/accounts?error=Không thể xóa chính bạn.");
  }
  try {
    const user = await userModel.findById(id);
    if (!user || !STAFF_ROLES.includes(user.role)) {
      return res.redirect("/admin/system/accounts");
    }
    if (user.role === "super_admin") {
      const total = await userModel.countDocuments({ role: "super_admin" });
      if (total <= 1) {
        return res.redirect("/admin/system/accounts?error=Không thể xóa Super Admin cuối cùng.");
      }
    }
    await userModel.deleteOne({ _id: id });
    res.redirect("/admin/system/accounts");
  } catch (err) {
    console.error("systemAccount.destroy", err);
    res.redirect("/admin/system/accounts?error=Xóa thất bại.");
  }
};

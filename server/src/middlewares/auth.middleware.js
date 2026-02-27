const jwt= require("jsonwebtoken");
const contactService = require("../services/contact.service");

const CNAME = 'auth.middleware.js ';


async function auth(req, res, next){
    // const count = await contactService.countNewNotPartner();
    // res.locals.count = count;
    return next();
    const token = req.cookies.token ||(req.headers.authorization && req.headers.authorization.split(' ')[1]);
    // console.log('nho comment doan nay di khi deploy');
    // console.log('token ',token)
    // next();

    if(!token){
        return res.redirect('/auth/admin/login')
        // return res.status(401).json({success: false, data: 'chua dang nhap'});
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
         // 👇 cho EJS dùng global
        res.locals.user = decoded;
        next();
    } catch (error) {
        console.log(CNAME, error.message);
        // return res.status(401).json({success: false, data: 'Token loi'});
        return res.redirect('/auth/admin/login', {layout: false, mess: 'token is expired'})

    }
}

module.exports = auth;
const express = require('express');
const userEntity = require('../model/user.model');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

async function comparePassword(password, hash){
    const match = await bcrypt.compare(password, hash);
    console.log('ham compare tra ra gi? ')
    console.log(typeof match)
    return match;
}
router.post('/admin/login', async(req, res)=>{
    const {email, password} = req.body;

    const account = await userEntity.findOne({email});
    if(!account){
        return res.status(401).json({success: false, mess: 'Sai tai khoan'});
    }
    const match =await comparePassword(password, account.password)

    if(!match){
        return res.status(401).json({success: false, mess: 'Sai mat khau'});
    }

    const token = jwt.sign(
        {
            id: account._id,
            username: account.username
        },
        process.env.JWT_SECRET,
        {expiresIn: process.env.JWT_EXPIRE}
    );
    res.cookie('token', token,{
        httpOnly: true,
        secure: true,
        sameSite: 'strcit',
        maxAge: 7*24*60*60*1000
    });
    res.json({success: true, data: 'login success'})
})
router.post("/admin/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out" });
});
// register
router.post('/admin/register', async(req, res)=>{
    try {
        const {email, password} = {email: 'admin@gmail.comn', password: '123@'}
        const exitAccount= await userEntity.findOne({email});
        if(exitAccount){
            return res.status(400).json({success: false, data: 'da ton tai account nay'});
        }
        //hash password
        const hashPassword = await bcrypt.hash(password, 10);
        const uDTO =new userEntity({
            email: email,
            password: hashPassword
        });
        await uDTO.save();
        res.json({success: true, data: 'creating user is success'})
        // {email, hashPassword};
    } catch (error) {
        console.log(CNAME, error.message);
        res.status(500).json({success: false, mess: 'Creating account is failed'})
    }
})
module.exports = router;
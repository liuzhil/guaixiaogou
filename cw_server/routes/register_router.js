const express=require("express");
const router=express.Router();
const pool=require("../pool");





// 用户名验证
router.post("/userNameRegister",(req,res)=>{
    var obj=req.body;
    var $uname=obj.uname;
    var sql="select uname from tgw_user where uname like ?";
    pool.query(sql,[$uname],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            var result=res.send({code:-1,msg:"用户名已被注册，请重新输入"})
            return
        }else{
            var result=res.send({code:1,msg:""})
            return
        }
    })
})



//手机号码验证
router.post("/userPhoneRegister",(req,res)=>{
    var obj=req.body;
    var $phone=obj.phone;
    var sql="select phone from tgw_user where phone like ?";
    pool.query(sql,[$phone],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            var result=res.send({code:-1,msg:"该手机号已被注册，请重新输入"})
            return
        }else{
            var result=res.send({code:1,msg:""})
            return
        }
    })
})

//用户注册
router.post("/userRegister",(req,res)=>{
    var obj=req.body;
    var $uname=obj.uname;
    var $upwd=obj.upwd;
    var $phone=obj.phone;
    var sql="insert into tgw_user values(null,?,?,?)";
    pool.query(sql,[$uname,$upwd,$phone],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            var result=res.send({code:1,msg:"注册成功"})
        }
    })
})








module.exports=router;
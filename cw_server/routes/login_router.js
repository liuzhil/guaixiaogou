const express=require("express");
const router=express.Router();
const pool=require("../pool");


// 用户登录验证
router.post('/userLogin',(req,res)=>{
    //获取浏览器请求的数据
    var obj=req.body;
    //对用户名和密码进行验证
    var $uname=obj.uname;
    var $upwd=obj.upwd;
    var sql="select * from tgw_user where uname=? and upwd=?";
    pool.query(sql,[$uname,$upwd],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            req.session.uid=result[0].uid;
            // console.log(req.session.uid)
            res.send({code:1,msg:"登录成功",data:result})
        }else{
            res.send({code:-1,msg:"账号或密码错误，请重新登录"})
        }
    })
});

//注册跳转登录时拿取用户名，密码
router.get("/loginGet",(req,res)=>{
    var uname=req.query.uname;
    sql="select uname,upwd from tgw_user where uname=?"
    pool.query(sql,[uname],(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})

//跳转首页时 查询是否登录
router.get("/indexUser",(req,res)=>{
    var uid=req.session.uid;
    // console.log(uid)
    sql="select uname from tgw_user where uid=?"
    pool.query(sql,[uid],(err,result)=>{
        if(err) throw err;
        res.send(result)
        // console.log(result)
    })
})

//退出登录
router.get("/userQuit",(req,res)=>{
    req.session.uid=null;
    res.send({code:1,msg:"退出成功"});
})







module.exports=router;
const express=require("express");
const router=express.Router();
const pool=require("../pool");

//添加商品到购物车
router.get("/add",(req,res)=>{
    var uid=req.session.uid;
    var did=req.query.did;
    var pname=req.query.pname;
    var count=req.query.count;
    var img_url=req.query.img_url;
    var price=req.query.price;
    if(req.session.uid!=null){
        var sql="insert into tgw_shopList (uid,did,pname,count,img_url,price) values (?,?,?,?,?,?)";
        pool.query(sql,[uid,did,pname,count,img_url,price],(err,result)=>{
            if(err) throw err;
            res.send(result);
        })
    }else{
        var sql="insert into tgw_temporary_shop (did,pname,count,img_url,price) values(?,?,?,?,?)";
        pool.query(sql,[did,pname,count,img_url,price],(err,result)=>{
            if(err) throw err;
            res.send(result);
        })
    }
})

//通过uid查询购物车中商品数量
router.get("/get",(req,res)=>{
    var uid=req.session.uid;
    console.log(uid)
    if(uid!=null){
        var sql="select count(id) as c from tgw_shopList where uid=?";
        pool.query(sql,[uid],(err,result)=>{
            if(err) throw err;
            res.send(result[0])
            // console.log(1155)
        })
    }else{
        var sql="select count(id) as c from tgw_temporary_shop ";
        pool.query(sql,(err,result)=>{
            if(err) throw err;
            res.send(result[0])
            // console.log(result[0])
        })
    }
})

//通过uid查询购物车中商品详情
router.get("/getShopList",(req,res)=>{
    var uid=req.session.uid;
    console.log(uid)
    if(uid!=null){
        var sql="select * from tgw_shopList where uid=?";
        pool.query(sql,[uid],(err,result)=>{
            if(err) throw err;
            res.send(result)
            // console.log(1155)
        })
    }else{
        var sql="select * from tgw_temporary_shop ";
        pool.query(sql,(err,result)=>{
            if(err) throw err;
            res.send(result)
            // console.log(result[0])
        })
    }
})
//修改购物车商品数据
router.get("/upda",(req,res)=>{
    var count=req.query.count;
    var id=req.query.id;
    var uid=req.session.uid;
    if(uid!=null){
        var sql="update tgw_shopList set count=? where id=?";
        pool.query(sql,[count,id],(err,result)=>{
            if(err) throw err;
            res.send(result)
        })
    }else{
        var sql="update tgw_temporary_shop set count=? where id=?";
        pool.query(sql,[count,id],(err,result)=>{
            if(err) throw err;
            res.send(result)
        })
    }
    
})

//删除对应购物车中的列
router.get("/del",(req,res)=>{
    var id=req.query.id;
    var uid=req.session.uid;
    if(uid!=null){
        sql="delete from tgw_shopList where id=?"
        pool.query(sql,[id],(err,result)=>{
            if(err) throw err;
            console.log(result)
            if(result.affectedRows>0){
                res.send({code:1,msg:"删除成功"})
            }else{
                res.send({code:-1,msg:"删除失败"})
            }
            
        })
    }else{
        var sql="delete from tgw_temporary_shop  where id=?";
        pool.query(sql,[id],(err,result)=>{
            if(err) throw err;
            if(result.affectedRows>0){
                res.send({code:1,msg:"删除成功"})
            }else{
                res.send({code:-1,msg:"删除失败"})
            }
            
        })
    }
})

module.exports=router;
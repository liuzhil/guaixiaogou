const express=require("express");
const router=express.Router();
const pool=require("../pool");

//主页轮播图请求
router.get("/indexCar",(req,res)=>{
    var obj=res.query;
    var sql="select * from tgw_car"
    pool.query(sql,[],(err,result)=>{
        if(err) {throw err}
        else{res.send(result)}
    })
})

//主页热推萌宠请求
router.get("/indexHot",(req,res)=>{
    var obj=res.query;
    var sql="select * from tgw_hot_list"
    pool.query(sql,[],(err,result)=>{
        if(err) {throw err}
        else {res.send(result)}
    })
})

//主页萌犬一览
router.get("/indexDog",(req,res)=>{
    var obj=req.query;
    var pno=obj.pno;
    var pageSize=obj.pageSize;
    var pageSize=parseInt(pageSize);
    var offset=parseInt(pno-1)*pageSize;
    // console.log(pageSize)
    var send={code:1};
    var progress = 0;
    //查询总页数
    var sql="select count(did) as c from tgw_dog_list"
    pool.query(sql,[],(err,result)=>{
        if(err) {throw err}
        var pageCount = Math.ceil(result[0].c/pageSize);
        send.pageCount = pageCount;
        progress += 50;
       if(progress == 100){
        res.send(send);
       }
    })

    var sql="select * from tgw_dog_list limit ?,? "
    pool.query(sql,[offset,pageSize],(err,result)=>{
        if(err) throw err;
        progress+=50;
        send.data=result;
        if(progress == 100){
            res.send(send);
           }
    })
})

//主页萌猫一览
router.get("/indexCat",(req,res)=>{
    var obj=req.query;
    var pno=obj.pno;
    var pageSize=obj.pageSize;
    var pageSize=parseInt(pageSize);
    var offset=parseInt(pno-1)*pageSize;
    // console.log(pageSize)
    var send={code:1};
    var progress = 0;
    //查询总页数
    var sql="select count(cid) as c from tgw_cat_list"
    pool.query(sql,[],(err,result)=>{
        if(err) {throw err}
        var pageCount = Math.ceil(result[0].c/pageSize);
        send.pageCount = pageCount;
        progress += 50;
       if(progress == 100){
        res.send(send);
       }
    })

    var sql="select * from tgw_cat_list limit ?,? "
    pool.query(sql,[offset,pageSize],(err,result)=>{
        if(err) throw err;
        progress+=50;
        send.data=result;
        if(progress == 100){
            res.send(send);
           }
    })
})

// router.get("/indexCat",(req,res)=>{
//     var obj=req.query;
//     var sql="select * from tgw_cat_list"
//     pool.query(sql,[],(err,result)=>{
//         if(err) {throw err}
//         else{res.send({code:1,data:result})}
//     })
// })




module.exports=router;
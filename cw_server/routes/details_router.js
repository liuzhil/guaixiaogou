const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.get("/detailsHot",(req,res)=>{
    //查询数据总数
    var sql = "SELECT count(did) as c FROM tgw_details_hotdog";
    var obj=req.query;
    var send={code:1};
    var pageSize=parseInt(obj.pageSize);
    var offset=((parseInt(obj.pno)-1)*pageSize);
    var progress = 0; //sql执行进度
    // obj = {code:1};
    pool.query(sql,[],(err,result)=>{
       if(err)throw err;
       //console.log(result[0].c);
       var pageCount = Math.ceil(result[0].c/pageSize);
       //获得总页数传回客户端备用
       send.pageCount = pageCount;
       //两条查询语句谁后执行，谁负责将查到的数据一并传回客户端
       progress += 50;
       if(progress == 100){
        res.send(send);
       }
  });
  //查询该页数据
    var sql="select * from tgw_details_hotdog limit ?,?";
    pool.query(sql,[offset,pageSize],(err,result)=>{
        if(err) throw err;
        //send为自定义数组，接收查询到的数据
        send.data=result;
        //两条查询语句谁后执行，谁负责将查到的数据一并传回客户端
        progress+=50;
        if(progress == 100){
            res.send(send);
           }
    });
})
//查询对应页数的“同类宠物推荐”栏的数据
router.get("/detailsSame",(req,res)=>{
    //查询数据总数
    var sql = "SELECT count(sid) as c FROM tgw_same_list";
    var obj=req.query;
    var send={code:1};
    var pageSize=parseInt(obj.pageSize);
    var offset=((parseInt(obj.pno)-1)*pageSize);
    var progress = 0; //sql执行进度
    // obj = {code:1};
    pool.query(sql,[],(err,result)=>{
       if(err)throw err;
       //console.log(result[0].c);
       var pageCount = Math.ceil(result[0].c/pageSize);
       //获得总页数传回客户端备用
       send.pageCount = pageCount;
       //两条查询语句谁后执行，谁负责将查到的数据一并传回客户端
       progress += 50;
       if(progress == 100){
        res.send(send);
       }
  });
  //查询该页数据
    var sql="select * from tgw_same_list limit ?,?";
    pool.query(sql,[offset,pageSize],(err,result)=>{
        if(err) throw err;
        //send为自定义数组，接收查询到的数据
        send.data=result;
        //两条查询语句谁后执行，谁负责将查到的数据一并传回客户端
        progress+=50;
        if(progress == 100){
            res.send(send);
           }
    });
})
//查询顶部图片详情部分
router.get("/detailsheader",(req,res)=>{
    var obj=req.query;
    var did=obj.did;
    // console.log(did) //1
    var cid=obj.cid;//ud
    // console.log(cid);
    if(cid!=undefined){
    var sql="select * from tgw_details_imgcat where cid=?";
    pool.query(sql,[cid],(err,result)=>{
        if(err)throw err;
        res.send({code:1,data:result})
    })
  }else{
    var sql="select * from tgw_details_img where did=?";
    pool.query(sql,[did],(err,result)=>{
        if(err)throw err;
        res.send({code:1,data:result})
    })
  }
})

//查询底部图片数据
router.get("/detailsfooter",(req,res)=>{
    var obj=req.query;
    var did=obj.did;
    var sql="select * from tgw_details_footerimg where did=?"
    pool.query(sql,[did],(err,result)=>{
        if(err) throw err;
        res.send({code:1,data:result})
    })
})

//查询文字部分数据
router.get("/detailstext",(req,res)=>{
    var obj=req.query;
    var did=obj.did;
    var cid=obj.cid;
    if(did!=undefined){
        var sql="select * from tgw_dog_list where did=?";
        pool.query(sql,[did],(err,result)=>{
            if(err)throw err;
            res.send({code:1,data:result})
        })
      }else{
        var sql="select * from tgw_cat_list where cid=?";
        pool.query(sql,[cid],(err,result)=>{
            if(err)throw err;
            res.send({code:1,data:result})
        })
      }
})
//查询详情页中宠物各项程度占比
router.get("/detailsdegree",(req,res)=>{
    var obj=req.query;
    var did=obj.did;
    var sql="select clingy,hair,beauty,sports,saliva,heatproof,call1,friendly,trainable,sleep,cold,adapt from tgw_dogdetails where did=?"
    pool.query(sql,[did],(err,result)=>{
        if(err) throw err;
        res.send({code:1,data:result})
    })
})

//查询详情页中宠物基本信息
router.get("/detailsinfo",(req,res)=>{
    var obj=req.query;
    var did=obj.did;
    var sql="select name1,height,weight1,lifetime1,function1,area,dogtype from tgw_detailsinfo as t,tgw_dog_list as d where d.did=t.did and t.did=?";
    pool.query(sql,[did],(err,result)=>{
        if(err) throw err;
        res.send({code:1,data:result})
    })
})



module.exports=router;
const express=require("express");
const router=express.Router();
const pool=require("../pool");


router.get("/",(req,res)=>{
    var kwords=req.query.kwords;
    var pno=req.query.pno;
    if(pno===undefined){pno=0}
   var  kwords=kwords.split(" ");
   var arr=kwords.map(function(){
        return " title like ? "
    })
    kwords.forEach(function(val,i,arr){
        kwords[i]=`%${val}%`
    })
    var titles=arr.join(" and ");

    var sql="select did,img_url,title,price,address,nickname,dogtype,sm1,sm2,sm3,sm4 from tgw_dog_list where "+titles;
    // var arr1=[];
    pool.query(sql,kwords,(err,result)=>{
        if(err) throw err;
        // console.log(result)
        var count=result.length;
        var pageCount=Math.ceil(count/6);
        var products=result.slice(pno*6,pno*6+6)
        product={pno,count,pageCount,products}
        // console.log(result)
        res.send(product)
        
    //     for(var i=0;i<result.length;i++){
    //         var did=result[i].did;
    //         arr1[i]=did;
    //         // console.log(did)
    //         // var products=result.slice(pno*6,pno*6+6)
            
    //     }
    //     console.log(arr1);
    //     console.log(arr1[1])
    //     // res.send(product);
    // })
    // var sql1="select sm from tgw_details_img where did=?";
    // pool.query(sql1,[arr1[1]],(err,res)=>{
    //     console.log(res);
    //     console.log("arr1="+arr1[1])
    //     if(err) throw err;
    // //    console.log("结果"+res)
    // //    console.log("打印products"+products[0])
    // //    products[i]=res;
  
    // //    console.log("打印products[i]"+products[i])
      
    // //    console.log("i等于"+arr[i])
    })
    
})






module.exports=router;
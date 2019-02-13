
//主页底部轮播图
function task(){
var showImg=document.querySelector("#smallCarousel>img.show");
showImg.className="";
if(showImg.nextElementSibling!=null){
    showImg.nextElementSibling.className="show";
}else{
    showImg.parentNode.children[0].className="show";
  }
}
var n=setInterval(task,3000);
var div=document.getElementById("smallCarousel");
// console.log(div);
 div.onmouseover=function(){
    clearInterval(n);
  }
 div.onmouseout=function(){
   n=setInterval(task,3000)
 }

 //底部宠物栏替换
var aniDiv=document.getElementById("animals-things")
// console.log(aniDiv);
var as=aniDiv.querySelectorAll("span>a");
// console.log(as);
var divs=as[0].parentNode.parentNode.parentElement.children;
// console.log(divs);
// console.log(divs[2]);
for(var a of as){
    a.onclick=function(){
        var theA=this;
        if(theA==as[0]){
            divs[1].className="second-second";
            divs[2].className="hide";
        }else{
            divs[2].className="second-second";
            divs[1].className="hide";
        }        
    }
}



//宠物栏延时切换
var a=$("div.second-first>span>a")
// console.log(a);
a.click(function(){
    var $a=$(this);
    var i=$a.parent().prevAll().length;
    $(".center-second-second>div:first-child>div").css("left",i*105+47);
})



 $(function(){
     //主页轮播请求
    $.ajax({
        url:"http://localhost:3000/index/indexCar",
        type:"get",
        dataType:"json"
      }).then(res=>{
          var pic=res;
          console.log(pic)
    new Vue({
        el:"#demo1",
        data:{pic}  
    });
 })

//热推萌宠数据请求
 $.ajax({
    url:"http://localhost:3000/index/indexHot",
    type:"get",
    dataTpey:"json"
}).then(res=>{
    console.log(res)
   var m= new Vue({
        el:"#animals",
        data:{
            list:[],
           },
       created() {
           this.list=res;
       },
    });
})

//萌犬一览数据请求
// $.ajax({
//     url:"http://localhost:3000/index/indexDog",
//     type:"get",
//     dataType:"json"
//    }).then(res=>{
//        console.log(res.data)
//        new Vue({
//            el:"#buy-animals-dogs",
//            data:{
//                list:[]
//            },
//            created(){
//                this.list=res.data;
//            }
//        })
//    })
$(function(){
    new Vue({
        el:"#buy-animals-dogs",
        data:{
            list:[],
            pageSize:12,
            pno:1,
            pageCount:1,
            did:"",
            arrDog:[]
        },
        created(){
            this.fun(this.pno)
        },
        methods: {
            jampdetails(did){
                this.did=did;
                console.log(did)
                window.location.href="details.html?did="+did
            },
            fun(pno){
                var pageSize=this.pageSize;
                url="http://localhost:3000/index/indexDog?pno="+pno+"&pageSize="+pageSize;
                axios.get(url).then(res=>{
                    console.log(res.data.data)
                    this.pageCount=res.data.pageCount;
                    console.log(res.data.pageCount)
                    this.list=res.data.data;
                    for(var i=1;i<=res.data.pageCount;i++){
                        this.arrDog.push(i)
                    }
                    console.log(this.arrDog)
                })
            },
            arrLi(pno){
                this.arrDog=[];
                var pageSize=this.pageSize;
                url="http://localhost:3000/index/indexDog?pno="+pno+"&pageSize="+pageSize;
                axios.get(url).then(res=>{
                    console.log(res.data.data)
                    this.pageCount=res.data.pageCount;
                    console.log(res.data.pageCount)
                    this.list=res.data.data;
                    for(var i=1;i<=res.data.pageCount;i++){
                        this.arrDog.push(i)
                    }
                    console.log(this.arrDog)
                })
            }
        }
    })
    
})

   //萌猫一览数据请求
//    $.ajax({
//        url:"http://localhost:3000/index/indexCat",
//        type:"get",
//        dataType:"json"
//    }).then(res=>{
//        console.log(res.data)
       new Vue({
           el:"#buy-animals-cats",
           data:{
               list:[],
               pageSize:12,
               pno:1,
               pageCount:1,
               cid:""
           },
           created(){
             this.fun(this.pno)
           },
           methods: {
            jampdetailscat(cid){
                this.cid=cid;
                console.log(cid)
                window.location.href="details.html?cid="+cid
            },
            fun(pno){
                var pageSize=this.pageSize;
                url="http://localhost:3000/index/indexCat?pno="+pno+"&pageSize="+pageSize;
                axios.get(url).then(res=>{
                    console.log(res.data.data)
                    this.pageCount=res.data.pageCount;
                    this.list=res.data.data;
                    console.log(res.data.data[0].age)
                  })
              }
           }
       })
   })

    

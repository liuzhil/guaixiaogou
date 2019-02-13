
$(function(){
new Vue({
    el:"#leftThird",
    data:{
        list:[],
        pno:1,
        pageSize:4,
        pageCount:0
      },
      created(){
          this.fun(this.pno);
      },
      methods:{
         fun(pno){
             var pageSize=this.pageSize;
             var url="http://127.0.0.1:3000/details/detailsSame?pno="+pno+"&pageSize="+pageSize;
            axios.get(url).then(res=>{
            console.log(res.data.data)
            this.pageCount=res.data.pageCount;
            var list=res.data.data;
            this.list=list;
            //    console.log($("#leftThird"))
         })
      },
         next(){
             if(this.pno<this.pageCount){
             this.pno++;
             this.fun(this.pno)
            }
         },
         prev(){
             if(this.pno>1){
             this.pno--;
             this.fun(this.pno)
            }
         }
      },
   })
})


$(function(){
//获取“热门宠物”栏数据

    new Vue({
        el:"#product-right-second",
        data:{
            list:[],
            pageSize:6,
            pno:1,
            pageCount:1
        },
        created(){
            this.fun(this.pno)
        },
        mounted() {
            
        },
        methods:{
            fun(pno){
                var pageSize=this.pageSize;
                url="http://127.0.0.1:3000/details/detailsHot?pno="+pno+"&pageSize="+pageSize;
                axios.get(url).then(res=>{
                    console.log(res.data.data)
                    var rows = this.list.concat(res.data.data);
                    this.list = rows;
                    this.pageCount=res.data.pageCount;
                })  
            },
            enter(){
                $(".right-second-two>li").mouseenter(function(){
                      var $li=$(this)
                       $li.children(":last-child").slideDown(100)
                       $li.children(":first-child").children(":first-child").children(":first-child").addClass("second-two-span")
                       $li.css("height","150px")
                      console.log($li)
                  })
            },
            leave(){
                $(".right-second-two>li").mouseleave(function(){
                    var $li=$(this)
                    $li.children(":last-child").hide()
                    $li.children(":first-child").children(":first-child").children(":first-child").removeClass("second-two-span")
                    $li.css("height","50px")
                    console.log($li)
                    }).children(":last-child").css("display","none")
            },
            more(){
                this.pno++;
                if(this.pno==this.pageCount){
                    $("#button-more").css("display","none")
                }
                this.fun(this.pno)
            }
        }
    })
})
  
//根据uid值获取详情页数据
$(function(){
    new Vue({
        el:"#dog-details",
        data:{
            list:[],
            did:0,
            md:"",
            textlist:{},
            footerlist:[],
            top:"",
            left:"",
            lgImgStyle:{"background-image":"","background-position":"0px 0px"},
            lgdiv:true,
            smdiv:true,
            position:{top:"0px",left:"0px"},
            phone:false,
            wx:false,
            count:0,

        },
        created(){
            this.fun()
        },
        methods:{
            // 添加商品到购物车
            addProduct(){
                var did=this.did;
                var price=this.textlist.price;
                var img_url=this.md;
                var count=1;
                var pname=this.textlist.dogtype;
                var url=`http://127.0.0.1:3000/shop/add?did=${did}&price=${price}&img_url=${img_url}&count=${count}&pname=${pname}`;
                axios.get(url).then(res=>{
                    console.log(res)//返回添加成功
                })
                    var url="http://127.0.0.1:3000/shop/get";
                    axios.get(url).then(res=>{
                        console.log(res)
                        this.count=res.data.c;
                        console.log(res.data.c)
                        sessionStorage[count]=res.data.c;
                    })
            },
            fun(){
                var did=window.location.search.split("=")[1];
                var id=window.location.search.split("=")[0].split("?")[1];
                // console.log(did);
                console.log(id)
                this.did=did;
                //请求详情页放大镜部分大中小图片数据
                var url=`http://127.0.0.1:3000/details/detailsheader?${id=='cid'?'cid':'did'}=${did}`;
                axios.get(url).then(res=>{
                    console.log(res.data.data)
                    this.list=res.data.data; 
                    this.md=res.data.data[0].lg;
                    this.lgImgStyle["background-image"]=`url("${res.data.data[0].lg}")`
                   
                    //请求详情文本部分数据
                var  url=`http://127.0.0.1:3000/details/detailstext?${id=='cid'?'cid':'did'}=${did}`;
                axios.get(url).then(res=>{
                    console.log(res.data.data[0])
                    this.textlist=res.data.data[0];
                 })

                 //请求详情页底部图片数据
                 var url="http://127.0.0.1:3000/details/detailsfooter?did="+did;
                 axios.get(url).then(res=>{
                     console.log(res.data.data)
                     this.footerlist=res.data.data;
                 })
               })
            },
            enter(md,lg){
               this.md=md;
               this.lgImgStyle["background-image"]=`url("${lg}")`;
            },
            over(){
                this.lgdiv=false;
                this.smdiv=false;
            },
            out(){
                this.lgdiv=true;
                this.smdiv=true;
            },
            move(e){
                console.log(e.offsetX,e.offsetY)
                var left=e.offsetX-100;
                var top=e.offsetY-100;
                if(left<0){
                    left=0;
                }else if(left>200){
                    left=200;
                }
                if(top<0){
                    top=0;
                }else if(top>200){
                    top=200;
                }
                this.position.left=left+"px";
                this.position.top=top+"px";
                this.lgImgStyle["background-position"]=`-${2*left}px -${2*top}px`;
            },
           phone1(){
               this.phone=!this.phone;
           },
           wx1(){
               this.wx=!this.wx;
           },
           thePhone(){
               this.phone=!this.phone;
           },
           theWx(){
               this.wx=!this.wx;
           }
        }
    })
})

//底部图片请求
$(function(){
    new Vue({
        el:"#d1",
        data:{
            did:0,
            footerlist:[],
            top:"",
            left:""
        },
        created(){
            this.fun()
        },
        methods:{
            fun(){
                var did=window.location.search.split("=")[1];
                console.log(did);
                this.did=did;

                 //请求详情页底部图片数据
                 var url="http://127.0.0.1:3000/details/detailsfooter?did="+did;
                 axios.get(url).then(res=>{
                     console.log(res.data.data)
                     this.footerlist=res.data.data;
                 })
               
            }
        }
    })
})

//详情页宠物各项程度占比部分
$(function(){
    new Vue({
        el:"#details-msg",
        data:{
            did:"",
            listAll:[
                ["粘人程度"],["掉毛程度"],["美颜频度"],["运动量度"],["口水程度"],["耐热程度"],["喜叫程度"],["友善程度"],["可训程度"],["耐热程度"],["耐寒程度"],["城市适应"]
        ],
            listA:[],//粘人程度-耐热程度
            listB:[],//喜叫程度-城市适应
            listC:[],//基本信息
            listD:["品种","产地","功能","寿命","体重","身高","别名"]
        },
        created(){
            this.getDid();
            this.getDegree();
        },
        methods:{
            //获取did
            getDid(){
                var did=window.location.search.split("=")[1];
                console.log(did);
                this.did=did;
            },
            getDegree(){
                //请求详情页上详细特征部分数据
                var url="http://127.0.0.1:3000/details/detailsdegree?did="+this.did
                axios.get(url).then(res=>{
                    console.log(res.data.data[0]);
                    var a=res.data.data[0];
                    console.log(a)
                    var c=[];
                    for(var key in a){
                        c.unshift(a[key])
                    }
                    console.log(c)
                    for(var i=0;i<this.listAll.length;i++){
                        this.listAll[i].unshift(c[i])
                    }
                    console.log(this.listAll)
                    this.listA=this.listAll.slice(0,6)
                    this.listB=this.listAll.slice(6)
                    console.log(this.listA)
                    console.log(this.listB)

                    //请求详情页面上基本信息部分数据
                    var url="http://127.0.0.1:3000/details/detailsinfo?did="+this.did;
                    axios.get(url).then(res=>{
                        console.log(res.data.data[0]);
                        var d=res.data.data[0];
                         listC=[];
                        for(var key in d){
                            listC.unshift(d[key]);
                        }
                        this.listC=listC;
                        console.log(this.listC);
                    })
                })
            }, 
        }
    })
})

//详情页搜索框模糊查询
$(function(){
    new Vue({
        el:".header-search",
        data:{

        },
        created(){

        },
        methods:{
            
        }
    })
})


   


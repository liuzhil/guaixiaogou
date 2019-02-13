$(function(){

    $.ajax({
        url:"http://127.0.0.1:5500/public/header.html",
        type:"get",
        success:function(res){
            $("<link rel='stylesheet' href='css/header.css'>").appendTo("head")
            $(res).replaceAll("#header");

            $(".address-third>ul").on("click","li",function(){
                var $li=$(this); 
                var i=$li.index();
                var $div=$(".address-fourthAll").children();
                $li.addClass("addClass-li")
                $li.siblings().removeClass("addClass-li")
                $($div[i]).show();
                $($div[i]).siblings().hide();
            }).children(":first").addClass("addClass-li")   
            //地区显示隐藏
            $("[data-togger=addHover]").parent().mouseenter(function(){
                $(this).children(":nth-child(3)").show().css({"z-index":1000,"background":"#fff"});
                $(this).children(":nth-child(2)").removeClass("sanjiao").addClass("daosanjiao");
                $(this).css("background","pink")
            }).mouseleave(function(){
                $(this).children(":nth-child(3)").hide();
                $(this).children(":nth-child(2)").removeClass("daosanjiao").addClass("sanjiao");
                $(this).css("background","")
            }).children(":nth-child(3)").hide();
            //加盟宠物店隐藏
            var $addDiv=$("#addStore").mouseenter(function(){
                $div=$(this);
                $div.children("div.float-right-animals").show(500).css({"z-index":1000,"background":"#fff"});
                $div.children(":nth-child(2)").removeClass("tubiao").addClass("tubiao1")
            }).mouseleave(function(){
                $div=$(this);
                $div.children("div.float-right-animals").hide(500);
                $div.children(":nth-child(2)").removeClass("tubiao1").addClass("tubiao")
            }).children(":nth-child(3)").hide().children().children().hover(function(){
                $li=$(this);
                console.log($li)
                $li.toggleClass("hover-li");
            })
            //获取搜索框中关键字
            var $input=$("#search").prev();
            $("#search").click(function(){
                if($input.val().trim().length>0){
                    location.href="/public/product.html?kwords="+$input.val();
                }
                
            });
            $input.keyup(function(e){
                if(e.keyCode==13){
                    $("#search").click();
                }
            })
            if(location.search.indexOf("kwords")!=-1){
                $input.val(
                    decodeURI(location.search.split("=")[1])
                    );
            }
        }
       
    })
    $.ajax({
        url:"http://127.0.0.1:3000/login/indexUser",
        type:"get",
        xhrFields: {
            //允许带上凭据
            withCredentials: true
        }
    }).then(res=>{
        console.log(res[0].uname);
        $(".wrap-end-first").children("span").html(res[0].uname);
        $(".wrap-end-first").css("display","block");
        $(".wrap-end-first").next().css("display","none");
        $(".wrap-end-first").next().next().css("display","none");
        

    //退出登录
    $(".quit").click(function(e){
        e.preventDefault();
        $.ajax({
            url:"http://127.0.0.1:3000/login/userQuit",
            type:"get",
            xhrFields: {
                //允许带上凭据
                withCredentials: true
            }
        }).then(res=>{
            $(".wrap-end-first").css("display","none");
            $(".quit-success").html(res.msg).css("display","block");
            $(".wrap-end-first").next().css("display","block");
            $(".wrap-end-first").next().next().css("display","block");
            setTimeout(function(){
                $(".quit-success").hide()
            },2000)
            })
        })
    })
})
 

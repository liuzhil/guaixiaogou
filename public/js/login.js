//验证用户名
(function(){
    console.log($(".input1").children(":first-child"))
    $(".input1").children(":first-child").blur(function(){
        var $input=$(this);
        var $reg=/^\w{6,12}$/;
        if(!$reg.test($input.val())){
            $input.next().html("请输入6-12位数字或字母")
        }else{
            $input.next().html("")
        } 
      })
      
      $(".input1").children().eq(2).blur(function(){
        var $input=$(this);
        // console.log($input)
        var $reg=/^\w{8,16}$/;
        if(!$reg.test($input.val())){
            $input.next().html("请输入8-16位数字或字母")
          }else{
            $input.next().html("")
          }
    })

    $(".button").click(function(e){
        e.preventDefault();
        var $login=$(this);
        var $checkbox=$(".auto-login>div:first-child").children()[0];
        var uname=$(".input1").children().eq(0).val();
        // console.log($("input[type='checkbox']").is(':checked'))
        var upwd=$(".input1").children().eq(2).val();
        var $div1=$(".input1-div").html();
        var $div2=$(".input2-div").html();
       
        if($("input[type='checkbox']").is(':checked')&&(($div1=="")&&($div2==""))){
           $.ajax({
               url:"http://127.0.0.1:3000/login/userLogin",
               type:"post",
               data:{uname,upwd},
               xhrFields: {
                //允许带上凭据
                withCredentials: true
            },
               dataType:"json"
           }).then(function(result){
               console.log(result)
                   if(result.code==1){
                       $("#register-fast").next().html(result.msg).addClass("login-info-success").removeClass("login-info-fail");
                       setTimeout(function(){
                           window.location.href="index.html"//三秒跳转到首页
                       },3000)
                   }else{
                       $("#register-fast").next().html(result.msg).addClass("login-info-fail").removeClass("login-info-success")
                       var $upwd=$(".input1").children().eq(2);
                       $upwd.val("");//输入错误时，让密码为空
                       setTimeout(function(){
                           $("#register-fast").next().slideUp()//5秒后隐藏 提示信息
                       },5000)
                   }
           })
        }
    })
    })()
   
   //注册带参跳转登录
  $(function(){
      var uname=window.location.search.split("?")[1];
      console.log(uname)
      if(uname){
          $.ajax({
              url:"http://127.0.0.1:3000/login/loginGet?uname="+uname,
              type:"get"
          }).then(res=>{
              $(".input1").children().eq(0).val(res[0].uname)
              $(".input1").children().eq(2).val(res[0].upwd)
          })
      }
  })  


    //登录验证
    
// })()


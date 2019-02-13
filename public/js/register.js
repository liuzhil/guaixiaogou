//注册页注册验证
//用户名验证
$("form>div:first-child>input").blur(function(){
    var $input=$(this);
    var $reg=/^\w{6,12}$/
    var $span=$input.next();
    if(!$reg.test($input.val())){
        $span.addClass("reg-span")
        $span.html("<img src='image/err.png'>请输入格式正确的用户名") 
    }else{
        var uname=$(".userName>input").val();
        $.ajax({
            url:"http://127.0.0.1:3000/register/userNameRegister",
            type:"post",
            data:{uname},
            dataType:"json"
        }).then(function(result){
            console.log(result.msg)
            if(result.code==-1){
            $span.addClass("reg-span")
            $span.html(`<img src='image/err.png'>${result.msg}`)
            }else{
                $span.removeClass("reg-span")
                $span.html(`<img src='image/ok.png'>${result.msg}`)
            }
        })
    }
});
//用户密码验证
$("form>div:nth-child(2)>input").blur(function(){
    var $input=$(this);
    var $reg=/^\w{8,16}$/;
    var $span=$input.next();
    if(!$reg.test($input.val())){
        $span.addClass("reg-span");
        $span.html("<img src='image/err.png'>请输入格式正确的密码"); 
    }else{
        $span.removeClass("reg-span");
        $span.html("<img src='image/ok.png'>");
    }
})
//确认密码验证
$("form>div:nth-child(3)>input").blur(function(){
    var $input=$(this);
    var $inputPrev=$input.parent().prev().children("input");
    console.log($inputPrev)
    var $span=$input.next();
    if($input.val()==$inputPrev.val()&&$input.val()!=""){
        $span.removeClass("reg-span");
        $span.html("<img src='image/ok.png'>"); 
    }else{
        $span.addClass("reg-span");
        $span.html("<img src='image/err.png'>请重新核对密码"); 
    }
})
//手机号验证
$("form>div:nth-child(4)>input").blur(function(){
    var $input=$(this);
    var $span=$input.next();
    var $reg=/^1[3-8]\d{9}$/;
    if(!$reg.test($input.val())){
       $span.addClass("reg-span");
       $span.html("<img src='image/err.png'>请输入有效手机号码");
    }else{
        var phone=$(".userPhone>input").val();
        $.ajax({
            url:"http://127.0.0.1:3000/register/userPhoneRegister",
            type:"post",
            data:{phone},
            dataType:"json"
        }).then(function(result){
            console.log(result.msg)
            if(result.code==-1){
            $span.addClass("reg-span")
            $span.html(`<img src='image/err.png'>${result.msg}`)
            }else{
                $span.removeClass("reg-span")
                $span.html(`<img src='image/ok.png'>${result.msg}`)
            }
        })
    }
})
//验证码验证
  
$("form>div:nth-child(5)>input").blur(function(){
    var $input=$(this);
    var $span=$input.next().next();
    var $a=$input.next();
    console.log($a.html());
        if($input.val().toUpperCase()==$a.html().toUpperCase()){
            $span.removeClass("reg-span")
            $span.html("<img src='image/ok.png'>")
            console.log(2);
        }else{
            if(!$input.val()==""){
            $span.addClass("reg-span")
            $span.html("<img src='image/err.png'>请输入正确的验证码")
           }
        }
}).click(function(){
    var $input=$(this);
    var $span=$input.next().next();
    var $a=$input.next();
    if($a.html()=="获取验证码"){
        $span.addClass("reg-span")
        $span.html("<img src='image/err.png'>请先获取验证码")
        console.log(1);
    }
})
//获取验证码
//string.formCharCode()
    var arr=[];
    // var $a=$(this);
    for(var i=0;i<=9;i++){
        arr.push(i);   
    }
    for(var i=65; i<=90;i++){
        arr.push(String.fromCharCode(i));
    }
    for(var i=97;i<=122;i++){
        arr.push(String.fromCharCode(i));
    }
$("form>div:nth-child(5)>a").click(function(){
    var $code="";
    var $a=$(this);
    for(i=0;i<=3;i++){
        var index=Math.floor(Math.random()*arr.length)
        $code+=arr[index];
    }
    console.log($code)
    $a.html($code);
}).html("获取验证码");

//同意服务协议


//注册按钮
$("[data-togger=register]").click(function(e){
    e.preventDefault();
    $register=$(this);
    $checkbox=$register.parent().prev().children();
    console.log($checkbox.prop("checked"))
    $span=$checkbox.parent().prevAll().children("span:last-child")
    console.log($span)
    $p=$register.next();
    var uname=$(".userName>input").val();
    var upwd=$(".userPwd>input").val();
    var phone=$(".userPhone>input").val();

    //发送ajax请求
    if($checkbox.prop("checked")&&$span.html()=='<img src="image/ok.png">'){
        var $div=$register.next().next();
        $.ajax({
            url:"http://127.0.0.1:3000/register/userRegister",
            type:"post",
            data:{uname,upwd,phone},
            dataType:"json"
        }).then(function(result){
            var uname=$(".userName>input").val()
            $("#agree").children().removeAttr("checked")
            $div.addClass("register-success").hide(3000)
            $div.html(result.msg)
            window.location.href="login.html?"+uname;
        }) 
    }else{
        console.log($("#agree").prevAll().children("input"))
        $p.html("请核对注册信息");
        $p.addClass("register-fail")
    }
    
})


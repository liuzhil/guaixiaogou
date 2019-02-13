$(function(){
    $.ajax({
        url:"http://127.0.0.1:5500/public/shopbar.html",
        type:"get",
        success:function(res){
            $("<link rel='stylesheet' href='css/shopbar.css'>").appendTo("head")
            $(res).replaceAll("#shopBar");

            axios.defaults.withCredentials=true;
            new Vue({
                el:".shop-fixed",
                data:{
                    count:sessionStorage[1]
                },
                created(){
                    // this.getCount(); 
                },
                methods: {
                    // getCount(){
                    //     console.log(sessionStorage[1])
                    // },
                    goshopping(){
                        location.href="shopping.html"
                    }
                },
                // watch: {
                //     count:function(val){
                //         this.count=sessionStorage[1];
                //         console.log(sessionStorage);
                //         console.log(this.count);
                //     }
                // },
            })
        }
 
    })
})

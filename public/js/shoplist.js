$(function(){
    // Vue.component(,{
    //     data
    // })
    axios.defaults.withCredentials=true;
    new Vue({
        el:"#shopCar",
        data(){
            return{
                list:[],
                count:[],
                total:0,
                price:[],
                id:[],
                sid:"i",
                checkId:[],
                checkAll:false
            }
        },
        created() {
            this.getShopList();
        },
        methods: {
            
            check(){
                this.total=0
                if(this.checkId.length>0){
                    for(var i=0;i<this.checkId.length;i++){
                        var a=this.checkId[i]
                        var b=this.id.indexOf(a)
                        console.log(b)
                        this.total+=this.price[b]*this.count[b]
                    }
                }
                
            },
            checkA(){
                //全选框
                this.checkAll=!this.checkAll;
                if(this.checkAll){
                    for(var i=0;i<this.list.length;i++){
                        this.checkId.push(this.list[i].id)
                    }
                }
                if(this.list.length==this.checkId.length){this.gettotal();}
                
            },
            fun(){
                this.count.push(1);
            },
            getShopList(){
                var url="http://127.0.0.1:3000/shop/getShopList"
                axios.get(url).then(res=>{
                    this.list=res.data;
                    console.log(res.data)
                    for(var i=0;i<res.data.length;i++){
                            this.count.push(res.data[i].count);   
                            this.price.push(res.data[i].price);
                            this.id.push(res.data[i].id);
                    }
                    this.total=0;
                    if(this.checkId.length>0){
                    for(var i=0;i<this.checkId.length;i++){
                        var a=this.checkId[i]
                        var b=this.id.indexOf(a)
                        console.log(b)
                        this.total+=this.price[b]*this.count[b]
                    }
                }
                //     console.log(this.price)
                //   console.log(this.count)  
                console.log(this.id)
                })
            },
            gettotal(){
                this.total=0;
                // this.check();
                if(this.checkId.length>0){
                    for(var i=0;i<this.checkId.length;i++){
                        var a=this.checkId[i]
                        var b=this.id.indexOf(a)
                        console.log(b)
                        this.total+=this.price[b]*this.count[b]
                    }
                }
            },
            getId(is){
                var count=this.count[is];
                var id=this.id[is];
                var url="http://127.0.0.1:3000/shop/upda?count="+count+"&id="+id;
                axios.get(url).then(res=>{
                    console.log(res)
                })
            },
            add(e,i){
                // console.log(e.path[0])
                // console.log(i)
                // console.log(e.path[0].dataset.i)
                if(this.count[i]<999)
                this.count[i]++;
                this.fun();
                this.gettotal();
                this.getId(i);
                console.log(this.count)
            },
            sub(e,i){
                console.log(i)
                console.log(e)
                if(this.count[i]>1)
                this.count[i]--;
                this.fun();
                this.gettotal();
                this.getId(i)
                // this.gettotal();
                console.log(this.count)
            },
            
            del(e,i){
                console.log(e)
                console.log(i)
                this.sid=i;
                console.log(this.id)
                console.log(this.id[i])
                // this.sid=this.id[i];
                // if(this.id.length>0){this.id.splice(i)}
                
                // this. getShopList()
                // 存储从id数组中删除的id元素
                //发送请求将对应id的商品从数据库中删除
                var url="http://127.0.0.1:3000/shop/del?id="+this.id[i];
                console.log(this.id)
                axios.get(url).then(res=>{
                    console.log(res)
                })
                // location=location
                location.reload()
                // history.go(0) 
            }
        },
    })
})
$(function(){
    new Vue({
        el:"#product",
        data:{
            pno:0,
            kwords:"",
            pageSize:6,
            pageCount:0,
            count:0,
            products:[],
            arr:[],
            arrImg:[],
            img:[],
            Liclass:{active:false},
            prevDisabled:false,
            nextDisabled:false,
            
        },
        created() {
            this.getKw();
        },
        methods: {
            getKw(){
                this.kwords=decodeURI(location.search.split("=")[1]);
                var url="http://127.0.0.1:3000/products?kwords="+this.kwords+"&pno="+this.pno;
                axios.get(url).then(res=>{
                    console.log(res.data)
                    this.count=res.data.count;
                    this.pageCount=res.data.pageCount;
                    this.products=res.data.products;
                    this.pno=res.data.pno;
                    console.log(this.pno)
                    this.prevDisabled=this.pno==0;
                    this.nextDisabled=this.pno==this.pageCount-1;
                    for(var i=0;i<this.products.length;i++){
                        this.arrImg[i]=[this.products[i].sm1,this.products[i].sm2,this.products[i].sm3,this.products[i].sm4];
                        this.img[i]=this.products[i].sm1;
                    }
                })
            }, 
            jumpDetails(did){
                window.location.href="details.html?did="+did;
            },
            jump(pno){
                this.pno=pno;
               this.getKw();
            },
            prev(){
                this.pno--;
                this.getKw();
            },
            next(){
                this.pno++;
                this.getKw();
            }
        },
        computed: {
            page:function(){
                for(var i=1;i<=this.pageCount;i++){
                    this.arr.push(i)
                }
                console.log(this.arr)
                return this.arr;
            }
        },
    })

})
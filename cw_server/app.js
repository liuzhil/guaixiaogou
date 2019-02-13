const express=require("express");
const session=require("express-session")
const bodyParser=require("body-parser");
const index=require("./routes/index_router");
const shop=require("./routes/shop_router")
const details=require("./routes/details_router");
const products=require("./routes/product_router");
const login=require("./routes/login_router");
const register=require("./routes/register_router");
const cors=require("cors");
var app=express();
app.listen(3000);

app.use(session({
  secret:"128位随机字符串",
  resave:false,
  saveUninitialized:true,
  cookie:{
    maxAge:1000*60*5
  }
}))
app.use(cors({
    origin:["http://127.0.0.1:3000","http://127.0.0.1:5500"],//允许列表
    credentials:true   //是否验证
  }))
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static("public"))


app.use("/index",index);
app.use("/details",details);
app.use("/products",products);
app.use("/login",login);
app.use("/register",register);
app.use("/shop",shop);












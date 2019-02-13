use tgw;
create table tgw_dog_list(
    did int primary key AUTO_INCREMENT,
    img_url varchar(255),
    title varchar(64),
    price decimal(10,2),
    address varchar(255),
    views int,
    saleCount int,
    age varchar(20),
    vaccine int,
    linkman varchar(20),
    nickname varchar(50),
    dogtype varchar(20),
    sm1 varchar(100),
    sm2 varchar(100),
    sm3 varchar(100),
    sm4 varchar(100)
);

insert into tgw_dog_list values
(null,"image/brand_dog/buydog/1.png","哈士奇幼犬出售、纯种威尔士哈士奇繁殖保健康纯种",1500,"北京市朝阳区",56141,2,"3月龄以下",3,"郑先生","东方名犬俱乐部","西伯利亚雪橇犬","image/brand_dog/lg/1.png","image/brand_dog/lg/2.png","image/brand_dog/lg/3.png","image/brand_dog/lg/4.png"),
(null,"image/brand_dog/buydog/2.png","阿拉斯加幼犬出售、纯种威尔士阿拉斯加繁殖保健康纯种",1400,"重庆市",45152,1,"3月龄以下",2,"刘先生","西方名犬培育基地","阿拉斯加雪橇犬","image/brand_dog/lg/2.png","image/brand_dog/lg/5.png","image/brand_dog/lg/6.png","image/brand_dog/lg/7.png"),
(null,"image/brand_dog/buydog/3.png","松狮幼犬出售、纯种威尔士松狮繁殖保健康纯种",1300,"四川成都",5616,2,"2月龄以下",1,"张小姐","松狮成都培训基地","威尔士松狮","image/brand_dog/lg/3.png","image/brand_dog/lg/8.png","image/brand_dog/lg/9.png","image/brand_dog/lg/10.png"),
(null,"image/brand_dog/buydog/4.png","唐犬幼犬出售、纯种威尔士唐犬繁殖保健康纯种",2500,"上海市",1651,3,"1月龄以下",3,"李先生","上海市狗狗繁殖中心","唐犬","image/brand_dog/lg/4.png","image/brand_dog/lg/11.png","image/brand_dog/lg/12.png","image/brand_dog/lg/13.png"),
(null,"image/brand_dog/buydog/5.png","田园犬幼犬出售、纯种威尔士田园犬繁殖保健康纯种",1100,"深圳宝安区",5584,1,"1岁零2月",3,"宋先生","田园犬大型繁殖基地","乡间田园犬","image/brand_dog/lg/5.png","image/brand_dog/lg/1-1.png","image/brand_dog/lg/78.png","image/brand_dog/lg/79.png"),
(null,"image/brand_dog/buydog/6.png","柯基犬幼犬出售、纯种威尔士柯基犬繁殖保健康纯种",1500,"深圳南山区",4651,3,"1岁零1月",3,"唐小姐","深圳犬类培育厂","柯基犬","image/brand_dog/lg/6.png","image/brand_dog/lg/80.png","image/brand_dog/lg/81.png","image/brand_dog/lg/82.png"),
(null,"image/brand_dog/buydog/7.png","拉布拉多犬幼犬出售、纯种威尔士拉布拉多犬繁殖保健康纯种",1800,"北京市海淀区",4841,1,"4月龄以下",3,"兰小姐","拉布拉多培育培训公司","拉布拉多犬","image/brand_dog/lg/7.png","image/brand_dog/lg/83.png","image/brand_dog/lg/91.png","image/brand_dog/lg/92.png"),
(null,"image/brand_dog/buydog/8.png","英国斗牛犬幼犬出售、纯种威尔士英国斗牛犬繁殖保健康纯种",2000,"长沙市天心区",4455,1,"2月龄以下",2,"袁小姐","袁姐训狗俱乐部","英国斗牛犬","image/brand_dog/lg/8.png","image/brand_dog/lg/93.png","image/brand_dog/lg/94.png","image/brand_dog/lg/95.png"),
(null,"image/brand_dog/buydog/9.png","茶杯犬幼犬出售、纯种威尔士茶杯犬繁殖保健康纯种",3000,"湖北武汉",8745,1,"1月龄以下",1,"周小姐","武汉狗狗繁殖基地","茶杯犬","image/brand_dog/lg/9.png","image/brand_dog/lg/96.png","image/brand_dog/lg/97.png","image/brand_dog/lg/98.png"),
(null,"image/brand_dog/buydog/10.png","哈士奇犬幼犬出售、纯种雪橇犬哈士奇繁殖保健康纯种",4000,"广西桂林",5445,3,"2月龄以下",2,"邓先生","邓先生养狗厂","哈士奇","image/brand_dog/lg/10.png","image/brand_dog/lg/99.png","image/brand_dog/lg/100.png","image/brand_dog/lg/101.png"),
(null,"image/brand_dog/buydog/11.png","花色英国斗牛犬幼犬出售、纯种双血统英国斗牛犬繁殖保健康纯种",5000,"广西百色",54512,3,"6月龄",3,"王先生","纯种斗牛犬基地","英国斗牛犬","image/brand_dog/lg/11.png","image/brand_dog/lg/102.png","image/brand_dog/lg/103.png","image/brand_dog/lg/104.png"),
(null,"image/brand_dog/buydog/12.png","泰迪犬幼犬出售、纯种威尔士泰迪犬繁殖保健康纯种",10000,"广西南宁",4513,4,"9月龄以下",2,"张先生","纯种泰迪犬繁殖基地","泰迪犬","image/brand_dog/lg/12.png","image/brand_dog/lg/105.png","image/brand_dog/lg/106.png","image/brand_dog/lg/107.png"),




(null,"image/brand_dog/buydog/12.png","泰迪幼犬出售、纯种威尔士泰迪繁殖保健康纯种",1600,"北京市",1141,2,"3月龄以下",3,"六先生","东方名犬俱乐部","泰迪犬","image/brand_dog/lg/12.png","image/brand_dog/lg/5.png","image/brand_dog/lg/3.png","image/brand_dog/lg/1.png"),
(null,"image/brand_dog/buydog/11.png","英国斗牛犬幼犬出售、纯种威尔士英国斗牛犬繁殖保健康纯种",1600,"重庆市",45152,1,"3月龄以下",2,"刘先生","西方名犬培育基地","英国斗牛犬","image/brand_dog/lg/11.png","image/brand_dog/lg/11.png","image/brand_dog/lg/6.png","image/brand_dog/lg/5.png"),
(null,"image/brand_dog/buydog/10.png","哈士奇幼犬出售、纯种威尔士哈士奇繁殖保健康纯种",2300,"成都",15616,2,"2月龄以下",1,"张小姐","哈士奇成都培训基地","威尔士哈士奇","image/brand_dog/lg/10.png","image/brand_dog/lg/8.png","image/brand_dog/lg/9.png","image/brand_dog/lg/2.png"),
(null,"image/brand_dog/buydog/9.png","田园犬幼犬出售、纯种田园犬繁殖保健康纯种",500,"上海市",11651,3,"1月龄以下",3,"李先生","上海市狗狗繁殖中心","乡间田园犬","image/brand_dog/lg/9.png","image/brand_dog/lg/11.png","image/brand_dog/lg/93.png","image/brand_dog/lg/95.png"),
(null,"image/brand_dog/buydog/8.png","英国斗牛犬出售、纯种威尔士英国斗牛犬繁殖保健康纯种",11100,"深圳南山区",5784,1,"1岁零2月",3,"五先生","斗牛犬大型繁殖基地","英国斗牛犬","image/brand_dog/lg/8.png","image/brand_dog/lg/1-1.png","image/brand_dog/lg/78.png","image/brand_dog/lg/79.png"),
(null,"image/brand_dog/buydog/7.png","拉布拉多幼犬出售、纯种威尔士拉布拉多繁殖保健康纯种",1700,"深圳龙华",4651,3,"1岁零1月",3,"唐小姐","深圳犬类培育厂","拉布拉多犬","image/brand_dog/lg/7.png","image/brand_dog/lg/81.png","image/brand_dog/lg/83.png","image/brand_dog/lg/82.png"),
(null,"image/brand_dog/buydog/6.png","长毛幼犬出售、纯种威尔士长毛犬繁殖保健康纯种",1100,"北京市海淀区",14241,1,"4月龄以下",3,"兰小姐","长毛培育培训公司","长毛犬","image/brand_dog/lg/6.png","image/brand_dog/lg/1.png","image/brand_dog/lg/100.png","image/brand_dog/lg/92.png"),
(null,"image/brand_dog/buydog/5.png","茶杯犬幼犬出售、纯种威尔士英国茶杯犬繁殖保健康纯种",2000,"长沙市天心区",4455,1,"2月龄以下",2,"袁小姐","袁姐训狗俱乐部","茶杯犬","image/brand_dog/lg/5.png","image/brand_dog/lg/90.png","image/brand_dog/lg/101.png","image/brand_dog/lg/95.png"),
(null,"image/brand_dog/buydog/4.png","唐犬幼犬出售、纯种威尔士唐犬繁殖保健康纯种",1000,"湖北武汉",8745,1,"1月龄以下",1,"谢小姐","武汉狗狗繁殖基地","唐犬","image/brand_dog/lg/4.png","image/brand_dog/lg/96.png","image/brand_dog/lg/97.png","image/brand_dog/lg/98.png"),
(null,"image/brand_dog/buydog/3.png","松狮犬幼犬出售、纯种松狮犬繁殖保健康纯种",5000,"广西柳州",15445,3,"2月龄以下",2,"汪先生","汪先生养狗厂","松狮","image/brand_dog/lg/3.png","image/brand_dog/lg/99.png","image/brand_dog/lg/100.png","image/brand_dog/lg/101.png"),
(null,"image/brand_dog/buydog/2.png","阿拉斯加幼犬出售、纯种阿拉斯加犬繁殖保健康纯种",5000,"广西百色",4512,3,"6月龄",3,"王先生","纯种阿拉斯加犬基地","阿拉斯加雪橇犬","image/brand_dog/lg/2.png","image/brand_dog/lg/102.png","image/brand_dog/lg/103.png","image/brand_dog/lg/104.png"),
(null,"image/brand_dog/buydog/1.png","哈士奇幼犬出售、纯种威尔士哈士奇犬繁殖保健康纯种",10000,"广西南宁",45213,4,"9月龄以下",2,"冯先生","纯种哈士奇犬繁殖基地","洗玻璃了雪橇犬","image/brand_dog/lg/12.png","image/brand_dog/lg/105.png","image/brand_dog/lg/106.png","image/brand_dog/lg/107.png"),

(null,"image/brand_dog/buydog/3.png","松狮幼犬出售、纯种威尔士松狮繁殖保健康纯种",2500,"北京市朝阳区",56141,2,"3月龄以下",3,"郑先生","东方名犬俱乐部","松狮犬","image/brand_dog/lg/1.png","image/brand_dog/lg/2.png","image/brand_dog/lg/3.png","image/brand_dog/lg/4.png"),
(null,"image/brand_dog/buydog/12.png","泰迪幼犬出售、纯种威尔士泰迪繁殖保健康纯种",2400,"重庆市",45152,1,"3月龄以下",2,"刘先生","西方名犬培育基地","泰迪犬","image/brand_dog/lg/2.png","image/brand_dog/lg/5.png","image/brand_dog/lg/6.png","image/brand_dog/lg/7.png"),
(null,"image/brand_dog/buydog/1.png","哈士奇幼犬出售、纯种威尔士哈士奇繁殖保健康纯种",1300,"四川成都",5616,2,"2月龄以下",1,"张小姐","哈士奇成都培训基地","西伯里拉雪橇犬","image/brand_dog/lg/3.png","image/brand_dog/lg/8.png","image/brand_dog/lg/9.png","image/brand_dog/lg/10.png"),
(null,"image/brand_dog/buydog/4.png","唐犬幼犬出售、纯种威尔士唐犬繁殖保健康纯种",2500,"上海市",1651,3,"1月龄以下",3,"李先生","上海市狗狗繁殖中心","唐犬","image/brand_dog/lg/4.png","image/brand_dog/lg/11.png","image/brand_dog/lg/12.png","image/brand_dog/lg/13.png"),
(null,"image/brand_dog/buydog/2.png","阿拉斯加幼犬出售、纯种威尔士阿拉斯加犬繁殖保健康纯种",1100,"深圳宝安区",5584,1,"1岁零2月",3,"宋先生","田园犬大型繁殖基地","阿拉斯加犬","image/brand_dog/lg/5.png","image/brand_dog/lg/1-1.png","image/brand_dog/lg/78.png","image/brand_dog/lg/79.png"),
(null,"image/brand_dog/buydog/6.png","柯基犬幼犬出售、纯种威尔士柯基犬繁殖保健康纯种",1500,"深圳南山区",4651,3,"1岁零1月",3,"唐小姐","深圳犬类培育厂","柯基犬","image/brand_dog/lg/6.png","image/brand_dog/lg/80.png","image/brand_dog/lg/81.png","image/brand_dog/lg/82.png"),
(null,"image/brand_dog/buydog/8.png","英国斗牛犬犬幼犬出售、纯种威尔士英国斗牛犬犬繁殖保健康纯种",1800,"北京市海淀区",4841,1,"4月龄以下",3,"兰小姐","拉布拉多培育培训公司","英国斗牛犬","image/brand_dog/lg/7.png","image/brand_dog/lg/83.png","image/brand_dog/lg/91.png","image/brand_dog/lg/92.png"),
(null,"image/brand_dog/buydog/7.png","拉布拉多幼犬出售、纯种威尔士拉布拉多犬繁殖保健康纯种",2000,"长沙市天心区",4455,1,"2月龄以下",2,"袁小姐","袁姐训狗俱乐部","拉布拉多犬","image/brand_dog/lg/8.png","image/brand_dog/lg/93.png","image/brand_dog/lg/94.png","image/brand_dog/lg/95.png"),
(null,"image/brand_dog/buydog/9.png","茶杯犬幼犬出售、纯种威尔士茶杯犬繁殖保健康纯种",3000,"湖北武汉",8745,1,"1月龄以下",1,"周小姐","武汉狗狗繁殖基地","茶杯犬","image/brand_dog/lg/9.png","image/brand_dog/lg/96.png","image/brand_dog/lg/97.png","image/brand_dog/lg/98.png"),
(null,"image/brand_dog/buydog/12.png","泰迪犬幼犬出售、纯种泰迪犬繁殖保健康纯种",4000,"广西柳州",5445,3,"2月龄以下",2,"邓先生","邓先生养狗厂","泰迪犬","image/brand_dog/lg/12.png","image/brand_dog/lg/99.png","image/brand_dog/lg/100.png","image/brand_dog/lg/101.png"),
(null,"image/brand_dog/buydog/10.png","哈士奇犬幼犬出售、纯种哈士奇犬繁殖保健康纯种",5000,"广西百色",54512,3,"6月龄",3,"王先生","纯种斗牛犬基地","哈士奇犬","image/brand_dog/lg/11.png","image/brand_dog/lg/102.png","image/brand_dog/lg/103.png","image/brand_dog/lg/104.png"),
(null,"image/brand_dog/buydog/11.png","花色英国斗牛犬幼犬出售、纯种威尔士英国斗牛犬繁殖保健康纯种",10000,"广西南宁",4513,4,"9月龄以下",2,"张先生","纯种斗牛犬繁殖基地","英国斗牛犬","image/brand_dog/lg/11.png","image/brand_dog/lg/105.png","image/brand_dog/lg/106.png","image/brand_dog/lg/107.png")

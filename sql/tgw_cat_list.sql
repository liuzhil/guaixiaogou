use tgw;
create table tgw_cat_list(
    cid int primary key auto_increment,
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

insert into tgw_cat_list values
(null,"image/brand_cat/buycat/1.png","英短猫幼猫出售、纯种威尔士英短繁殖保健康纯种",1500,"北京市朝阳区",51163,1,"3月龄以下",3,"张先生","东方名猫俱乐部","英国短毛猫","image/brand_cat/lg/1.png","image/brand_cat/lg/2.png,","image/brand_cat/lg/3.png","image/brand_cat/lg/4.png"),
(null,"image/brand_cat/buycat/2.png","蓝猫幼猫出售、纯种威尔士蓝猫保健康纯种",2500,"北京市朝阳区",5133,1,"3月龄以下",2,"李先生","西方名猫基地","美国短毛猫","image/brand_cat/lg/2.png","image/brand_cat/lg/4.png,","image/brand_cat/lg/6.png","image/brand_cat/lg/14.png"),
(null,"image/brand_cat/buycat/3.png","波斯猫幼猫、波斯猫血统纯正繁殖保健康纯种",1500,"长沙市天心区",6453,2,"6月龄以下",3,"李先生","南方名猫基地","波斯猫","image/brand_cat/lg/3.png","image/brand_cat/lg/6.png,","image/brand_cat/lg/16.png","image/brand_cat/lg/24.png"),
(null,"image/brand_cat/buycat/4.png","波斯猫出售、波斯猫便宜出售健康纯种",3500,"上海市",54632,1,"3月龄以下",3,"李小姐","北方名猫繁殖基地","波斯猫","image/brand_cat/lg/2.png","image/brand_cat/lg/4.png,","image/brand_cat/lg/6.png","image/brand_cat/lg/14.png"),
(null,"image/brand_cat/buycat/5.png","英国短尾猫出售、正宗英国短尾猫，预购从速，先到先得",5500,"重庆",23425,2,"5月龄以下",1,"五先生","毛先生猫馆","英国短尾猫","image/brand_cat/lg/5.png","image/brand_cat/lg/4.png,","image/brand_cat/lg/21.png","image/brand_cat/lg/12.png"),
(null,"image/brand_cat/buycat/6.png","金渐层猫出售、价格下调，欲购从速",6500,"深圳市宝安区",1453,1,"2月龄以下",2,"梵先生","西方金渐层基地","英国短毛猫","image/brand_cat/lg/6.png","image/brand_cat/lg/14.png,","image/brand_cat/lg/16.png","image/brand_cat/lg/17.png"),
(null,"image/brand_cat/buycat/7.png","大批小蓝猫（懒猫）正在靠近，本市可送猫上门",3500,"广西南宁",2342,1,"9月龄以下",2,"符先生","小懒猫基地","蓝猫","image/brand_cat/lg/7.png","image/brand_cat/lg/2.png,","image/brand_cat/lg/1.png","image/brand_cat/lg/8.png"),
(null,"image/brand_cat/buycat/8.png","银渐层小猫出售、活泼猫种，萌你一脸",3000,"湖北武汉",1133,3,"一岁半",1,"毛小姐","识猫小店","银渐层","image/brand_cat/lg/8.png","image/brand_cat/lg/5.png,","image/brand_cat/lg/6.png","image/brand_cat/lg/22.png"),
(null,"image/brand_cat/buycat/9.png","波斯纯白猫出售，只此一家，预购从速",10000,"广州",7133,3,"一岁以下",3,"郝先生","郝猫旅社","波斯猫","image/brand_cat/lg/9.png","image/brand_cat/lg/23.png,","image/brand_cat/lg/26.png","image/brand_cat/lg/24.png"),
(null,"image/brand_cat/buycat/10.png","波斯花色猫出售，颜色自选，可视频选猫",2000,"广西百色市",32133,1,"2岁",2,"白先生","波斯猫专供馆","波斯猫","image/brand_cat/lg/10.png","image/brand_cat/lg/12.png,","image/brand_cat/lg/11.png","image/brand_cat/lg/13.png"),
(null,"image/brand_cat/buycat/11.png","金渐层出售，数量有限，可视频选猫",7000,"四川成都",15133,2,"4月龄以下",1,"吴先生","金渐层基地","金渐层","image/brand_cat/lg/11.png","image/brand_cat/lg/15.png,","image/brand_cat/lg/17.png","image/brand_cat/lg/18.png"),
(null,"image/brand_cat/buycat/12.png","波斯双色猫，仅此一只，先到先得",15000,"北京市朝阳区",1533,1,"5月龄以下",3,"李先生","波斯双色猫基地","波斯猫","image/brand_cat/lg/12.png","image/brand_cat/lg/19.png,","image/brand_cat/lg/20.png","image/brand_cat/lg/14.png"),

(null,"image/brand_cat/buycat/1.png","英短猫幼猫出售、纯种威尔士英短繁殖保健康纯种",1500,"北京市朝阳区",51163,1,"3月龄以下",3,"张先生","东方名猫俱乐部","英国短毛猫","image/brand_cat/lg/1.png","image/brand_cat/lg/2.png,","image/brand_cat/lg/3.png","image/brand_cat/lg/4.png"),
(null,"image/brand_cat/buycat/2.png","蓝猫幼猫出售、纯种威尔士蓝猫保健康纯种",2500,"北京市朝阳区",5133,1,"3月龄以下",2,"李先生","西方名猫基地","美国短毛猫","image/brand_cat/lg/2.png","image/brand_cat/lg/4.png,","image/brand_cat/lg/6.png","image/brand_cat/lg/14.png"),
(null,"image/brand_cat/buycat/3.png","波斯猫幼猫、波斯猫血统纯正繁殖保健康纯种",1500,"长沙市天心区",6453,2,"6月龄以下",3,"李先生","南方名猫基地","波斯猫","image/brand_cat/lg/3.png","image/brand_cat/lg/6.png,","image/brand_cat/lg/16.png","image/brand_cat/lg/24.png"),
(null,"image/brand_cat/buycat/4.png","波斯猫出售、波斯猫便宜出售健康纯种",3500,"上海市",54632,1,"3月龄以下",3,"李小姐","北方名猫繁殖基地","波斯猫","image/brand_cat/lg/2.png","image/brand_cat/lg/4.png,","image/brand_cat/lg/6.png","image/brand_cat/lg/14.png"),
(null,"image/brand_cat/buycat/5.png","英国短尾猫出售、正宗英国短尾猫，预购从速，先到先得",5500,"重庆",23425,2,"5月龄以下",1,"五先生","毛先生猫馆","英国短尾猫","image/brand_cat/lg/5.png","image/brand_cat/lg/4.png,","image/brand_cat/lg/21.png","image/brand_cat/lg/12.png"),
(null,"image/brand_cat/buycat/6.png","金渐层猫出售、价格下调，欲购从速",6500,"深圳市宝安区",1453,1,"2月龄以下",2,"梵先生","西方金渐层基地","英国短毛猫","image/brand_cat/lg/6.png","image/brand_cat/lg/14.png,","image/brand_cat/lg/16.png","image/brand_cat/lg/17.png"),
(null,"image/brand_cat/buycat/7.png","大批小蓝猫（懒猫）正在靠近，本市可送猫上门",3500,"广西南宁",2342,1,"9月龄以下",2,"符先生","小懒猫基地","蓝猫","image/brand_cat/lg/7.png","image/brand_cat/lg/2.png,","image/brand_cat/lg/1.png","image/brand_cat/lg/8.png"),
(null,"image/brand_cat/buycat/8.png","银渐层小猫出售、活泼猫种，萌你一脸",3000,"湖北武汉",1133,3,"一岁半",1,"毛小姐","识猫小店","银渐层","image/brand_cat/lg/8.png","image/brand_cat/lg/5.png,","image/brand_cat/lg/6.png","image/brand_cat/lg/22.png"),
(null,"image/brand_cat/buycat/9.png","波斯纯白猫出售，只此一家，预购从速",10000,"广州",7133,3,"一岁以下",3,"郝先生","郝猫旅社","波斯猫","image/brand_cat/lg/9.png","image/brand_cat/lg/23.png,","image/brand_cat/lg/26.png","image/brand_cat/lg/24.png"),
(null,"image/brand_cat/buycat/10.png","波斯花色猫出售，颜色自选，可视频选猫",2000,"广西百色市",32133,1,"2岁",2,"白先生","波斯猫专供馆","波斯猫","image/brand_cat/lg/10.png","image/brand_cat/lg/12.png,","image/brand_cat/lg/11.png","image/brand_cat/lg/13.png"),
(null,"image/brand_cat/buycat/11.png","金渐层出售，数量有限，可视频选猫",7000,"四川成都",15133,2,"4月龄以下",1,"吴先生","金渐层基地","金渐层","image/brand_cat/lg/11.png","image/brand_cat/lg/15.png,","image/brand_cat/lg/17.png","image/brand_cat/lg/18.png"),
(null,"image/brand_cat/buycat/12.png","波斯双色猫，仅此一只，先到先得",15000,"北京市朝阳区",1533,1,"5月龄以下",3,"李先生","波斯双色猫基地","波斯猫","image/brand_cat/lg/12.png","image/brand_cat/lg/19.png,","image/brand_cat/lg/20.png","image/brand_cat/lg/14.png"),

(null,"image/brand_cat/buycat/1.png","英短猫幼猫出售、纯种威尔士英短繁殖保健康纯种",1500,"北京市朝阳区",51163,1,"3月龄以下",3,"张先生","东方名猫俱乐部","英国短毛猫","image/brand_cat/lg/1.png","image/brand_cat/lg/2.png,","image/brand_cat/lg/3.png","image/brand_cat/lg/4.png"),
(null,"image/brand_cat/buycat/2.png","蓝猫幼猫出售、纯种威尔士蓝猫保健康纯种",2500,"北京市朝阳区",5133,1,"3月龄以下",2,"李先生","西方名猫基地","美国短毛猫","image/brand_cat/lg/2.png","image/brand_cat/lg/4.png,","image/brand_cat/lg/6.png","image/brand_cat/lg/14.png"),
(null,"image/brand_cat/buycat/3.png","波斯猫幼猫、波斯猫血统纯正繁殖保健康纯种",1500,"长沙市天心区",6453,2,"6月龄以下",3,"李先生","南方名猫基地","波斯猫","image/brand_cat/lg/3.png","image/brand_cat/lg/6.png,","image/brand_cat/lg/16.png","image/brand_cat/lg/24.png"),
(null,"image/brand_cat/buycat/4.png","波斯猫出售、波斯猫便宜出售健康纯种",3500,"上海市",54632,1,"3月龄以下",3,"李小姐","北方名猫繁殖基地","波斯猫","image/brand_cat/lg/2.png","image/brand_cat/lg/4.png,","image/brand_cat/lg/6.png","image/brand_cat/lg/14.png"),
(null,"image/brand_cat/buycat/5.png","英国短尾猫出售、正宗英国短尾猫，预购从速，先到先得",5500,"重庆",23425,2,"5月龄以下",1,"五先生","毛先生猫馆","英国短尾猫","image/brand_cat/lg/5.png","image/brand_cat/lg/4.png,","image/brand_cat/lg/21.png","image/brand_cat/lg/12.png"),
(null,"image/brand_cat/buycat/6.png","金渐层猫出售、价格下调，欲购从速",6500,"深圳市宝安区",1453,1,"2月龄以下",2,"梵先生","西方金渐层基地","英国短毛猫","image/brand_cat/lg/6.png","image/brand_cat/lg/14.png,","image/brand_cat/lg/16.png","image/brand_cat/lg/17.png"),
(null,"image/brand_cat/buycat/7.png","大批小蓝猫（懒猫）正在靠近，本市可送猫上门",3500,"广西南宁",2342,1,"9月龄以下",2,"符先生","小懒猫基地","蓝猫","image/brand_cat/lg/7.png","image/brand_cat/lg/2.png,","image/brand_cat/lg/1.png","image/brand_cat/lg/8.png"),
(null,"image/brand_cat/buycat/8.png","银渐层小猫出售、活泼猫种，萌你一脸",3000,"湖北武汉",1133,3,"一岁半",1,"毛小姐","识猫小店","银渐层","image/brand_cat/lg/8.png","image/brand_cat/lg/5.png,","image/brand_cat/lg/6.png","image/brand_cat/lg/22.png"),
(null,"image/brand_cat/buycat/9.png","波斯纯白猫出售，只此一家，预购从速",10000,"广州",7133,3,"一岁以下",3,"郝先生","郝猫旅社","波斯猫","image/brand_cat/lg/9.png","image/brand_cat/lg/23.png,","image/brand_cat/lg/26.png","image/brand_cat/lg/24.png"),
(null,"image/brand_cat/buycat/10.png","波斯花色猫出售，颜色自选，可视频选猫",2000,"广西百色市",32133,1,"2岁",2,"白先生","波斯猫专供馆","波斯猫","image/brand_cat/lg/10.png","image/brand_cat/lg/12.png,","image/brand_cat/lg/11.png","image/brand_cat/lg/13.png"),
(null,"image/brand_cat/buycat/11.png","金渐层出售，数量有限，可视频选猫",7000,"四川成都",15133,2,"4月龄以下",1,"吴先生","金渐层基地","金渐层","image/brand_cat/lg/11.png","image/brand_cat/lg/15.png,","image/brand_cat/lg/17.png","image/brand_cat/lg/18.png"),
(null,"image/brand_cat/buycat/12.png","波斯双色猫，仅此一只，先到先得",15000,"北京市朝阳区",1533,1,"5月龄以下",3,"李先生","波斯双色猫基地","波斯猫","image/brand_cat/lg/12.png","image/brand_cat/lg/19.png,","image/brand_cat/lg/20.png","image/brand_cat/lg/14.png")





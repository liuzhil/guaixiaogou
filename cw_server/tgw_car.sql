use tgw;
--创建首页轮播图与小图部分表
create table tgw_car (
    cid int primary key,
    picLg varchar(255),
    picSm varchar(255),
    title varchar(10),
    content varchar(100)
);
--创建数据
insert into tgw_car values
(1,"../image/images/banner1.png","../image/images/home-dog-1.png","狗狗体检","狗狗疾病早知道"),
(2,"../image/images/banner2.png","../image/images/home-dog-2.png","性格测试","洞察狗狗真性格"),  
(3,"../image/images/banner3.png","../image/images/home-dog-3.png","狗龄换算","狗龄人龄快换算"), 
(4,"../image/images/banner5.png","../image/images/home-dog-4.png","智商测试","狗狗智商你来测")
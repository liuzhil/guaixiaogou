use tgw;
create table tgw_shopList(
    id int primary key auto_increment,
    uid int,
    price decimal(10,2),
    did int,
    img_url varchar(50),
    pname varchar(20),
    count int
);
insert into tgw_shopList values
(null,1,1500,1,"image/brand_dog/buydog/1.png","西伯里拉雪橇犬",1)
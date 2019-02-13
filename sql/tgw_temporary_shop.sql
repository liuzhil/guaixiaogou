use tgw;
create table tgw_temporary_shop(
    id int primary key auto_increment,
    price decimal(10,2),
    count int,
    pname varchar(20),
    did int,
    img_url varchar(100)
);
insert into tgw_temporary_shop values
( null,1500,1,"阿拉斯加雪橇犬",2,"image/brand_dog/buydog/2.png")
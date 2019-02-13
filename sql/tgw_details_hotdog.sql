use tgw;
create table tgw_details_hotdog(
    did int primary key auto_increment,
    dname varchar(32),
    count int,
    img_url varchar(255),
    typeName varchar(32),
    address varchar(32)
) ;
insert into tgw_details_hotdog values
(null,"阿富汗猎犬",1521,"image/brand_dog/1.jpg","贵族犬","美国"),
(null,"阿拉斯加雪橇犬",4541,"image/brand_dog/2.jpg","阿拉斯加","英格兰"),
(null,"圣伯纳犬",1521,"image/brand_dog/3.jpg","猎兔犬","德国"),
(null,"比熊犬",8541,"image/brand_dog/4.jpg","比熊","英国"),
(null,"边境牧羊犬",2454,"image/brand_dog/5.jpg","边牧","罗威"),
(null,"雪纳瑞犬",756,"image/brand_dog/6.jpg","小髯犬","匈牙利"),
(null,"贵宾犬",15861,"image/brand_dog/7.jpg","贵宾","西班牙"),
(null,"德国牧羊犬犬",7761,"image/brand_dog/8.jpg","德牧","西伯利亚"),
(null,"维兹拉犬",5432,"image/brand_dog/9.jpg","猎犬","澳大利亚"),
(null,"金毛巡回猎犬",15621,"image/brand_dog/91.jpg","金毛","美国"),
(null,"萨摩耶犬",564,"image/brand_dog/93.jpg","微笑天使","中国"),
(null,"柯基犬",2461,"image/brand_dog/95.jpg","小短腿","中国")
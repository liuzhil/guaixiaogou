use tgw;
create table tgw_detailsinfocat(
    id int primary key auto_increment,
    name1 varchar(30),
    height varchar(50),
    weight1 varchar (50),
    lifetime1 varchar(50),
    function1 varchar(50),
    area varchar(100),
    did int
);
insert into tgw_detailsinfo value
(null,"英短","20-30cm","4-6kg","10-12岁","家庭猫","西伯利亚",1),
(null,"美短","20-30cm","4-5kg","10-13岁","家庭猫","美洲",2),
(null,"波斯猫","20-30cm","3-5kg","11-13岁","家庭猫","中国",3),
(null,"波斯猫","25-30cm","6-7kg","10-15岁","家庭猫","中国",4),
(null,"英短","22-30cm","4-7kg","10-15岁","家庭猫","中国",5),
(null,"金渐层","15-25cm","5-6kg","12-15岁","家庭猫","英国",6),
(null,"蓝猫","20-25cm","5-7kg","12-15岁","观赏猫","美国",7),
(null,"银渐层","17-22cm","4-6kg","7-9岁","家庭猫","英国",8),
(null,"波斯猫","22-25cm","3-5kg","5-8岁","观赏猫","美国",9),
(null,"波斯猫","22-30cm","5-7kg","10-12岁","观赏猫","西伯利亚",10),
(null,"暹罗猫","25-30cm","4-8kg","10-15岁","家庭猫","英国",11),
(null,"加菲猫","25-30cm","5-7kg","10-12岁","家庭猫","非洲",12)
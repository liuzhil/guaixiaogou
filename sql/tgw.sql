set names utf8;
drop database if exists tgw;
create database tgw charset=utf8;
use tgw;
-- 创建用户信息
CREATE TABLE tgw_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  phone VARCHAR(11)
);
-- 插入一条用户信息测试
INSERT INTO tgw_user VALUES
(null,"xiaozhi","lzllzllzl","15574873357") 
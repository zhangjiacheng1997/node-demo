#!/usr/bin/node
//nodejs API
  //全局模块  不用引用
  //普通模块  需要引用
//第三方模块（需要安装到本地）package.json文件记载项目使用的模块

//npm init编辑package.json
//npm install date-now -S可以将第三方模块信息添加到package.json的dependencies
//-D添加到开发依赖的对象里
//npm install命令可以下载dependencies的模块

var date = require('date-now');
console.log(date());
console.log(new Date());

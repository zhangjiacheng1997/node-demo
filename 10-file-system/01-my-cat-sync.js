#!/usr/bin/node
//异步

//语法
//算法
//章法
//设计时
//运行时
//编码时

const fs = require('fs');

//readFileSync同步读取文件内容，返回一个buffer对象
var file = process.argv[2] || __filename;
try{
  console.log(fs.readFileSync(file).toString('utf8'))
}catch(err){
   console.error('sorry',err.message,err.name);
  process.exit(100);
}

//检测全局
//process.on('uncaughtException',(err)=>{
//  console.log('sorry');
//  process.exit(100);
//})

//错误类型
//  语法错误--低级
//  逻辑错误--
//  运行错误
//Error对象
//  message 异常信息
//  代码
//  错误栈
//策略
//  给全局添加异常处理



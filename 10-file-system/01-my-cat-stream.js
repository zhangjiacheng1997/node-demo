#!/usr/bin/node

const fs = require('fs');
var file = process.argv[2] || __filename;

var src = fs.createReadStream(file);//可读流

src.on('error',(err)=>{
  console.log(err.message);
  process.exit(1);
});

src.on('open',function(){
  src.pipe(process.stdout);//不能使用箭头函数，因为箭头函数this指向global，普通函数中的this指向src这个可读流
});

//open 事件当可读流文件被打开时触发

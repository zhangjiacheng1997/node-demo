#!/usr/bin/node

const fs = require('fs'),
      file = process.argv[2] || __filename;

//异步读取文件内容

fs.readFile(file,(err,buf)=>{//buf 是文件内容默认为buffer
  if(err){
    console.log(err.message);
    process.exit(1);
  }else{
    console.log(buf.toString('utf8'));
  }
});
console.log('2');

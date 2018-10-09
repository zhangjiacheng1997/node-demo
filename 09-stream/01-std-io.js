#!/usr/bin/node

//输入输出流
 
const stdin = process.stdin;

stdin.resume();
stdin.setEncoding('utf8');

stdin.on('data',(data)=>{
  process.stdout.write(data.toUpperCase())
});
global.setTimeout(()=>{
  
},3000)

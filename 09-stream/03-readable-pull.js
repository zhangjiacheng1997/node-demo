#!/usr/bin/node

const Readable = require('stream').Readable;

var src = new Readable();

var c = 97;

src._read = function(){
  src.push(String.fromCharCode(c++));
  if(c > 'z'.charCodeAt(0)) src.push(null)
}
//相当于while循环
src.pipe(process.stdout);//触发_read函数


#!/usr/bin/node
var str = process.argv[2];
var buf = new Buffer(str,'base64');//参数字符串类型是base64
console.log(buf.toString('utf8'));//目标字符串类型是utf8
var buf2 = new Buffer('曹鹏','utf8')
console.log(buf2);

#!/usr/bin/node

const name = process.argv[2],
      pwd = process.argv[3];
var str = name + ':' + pwd;
var buf = new Buffer(str,'utf8');//第二个参数表示传入字符串的类型
console.log(buf.toString('base64'))//toString的参数表示目标字符串类型


#!/usr/bin/node

const name = process.argv[2],
      pwd = process.argv[3];
var str = name + ':' + pwd;
var buf = Buffer(str,'utf8');
console.log(buf.toString('base64'))



#!/usr/bin/node
var str = process.argv[2];
var buf = new Buffer(str,'base64')
console.log(buf.toString('utf8'))


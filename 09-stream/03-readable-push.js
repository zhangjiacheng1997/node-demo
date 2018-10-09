#!/usr/bin/node

//可读流
//可写流
//双工流
//转换流

const Readable = require('stream').Readable;

var src = new Readable();

src.push('hello');
src.push(null);//在使用push时，必须加push（null）来结束

src.pipe(process.stdin);

//状态可通过pipe和事件来改变使其流动
//推送流在拉取之前存放数据

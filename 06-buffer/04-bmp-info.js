#!/usr/bin/node

const fs = require('fs');
const filename = process.argv[2];
if(!filename){
  console.error('请输入参数');
  process.exit();
}
var buf = fs.readFileSync(filename);

console.log('width:',buf.readInt32LE(0x12));
console.log('height:',buf.readInt32LE(0x16));
console.log('color-depth:',buf.readUInt32LE(0x1c));
console.log(buf.toString('ascii',0,2))



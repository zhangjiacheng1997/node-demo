#!/usr/bin/node
const fs = require('fs');
const width = 16,
      height = 16;

var size = width*height*4;//图片所占字节数
var totalSize = size + 54;//文件总占字节数

var buf = new Buffer(totalSize);//创建一个buffer，大小为totalSize
buf.fill(0);//填充0

//head
buf.write('BM');
buf.writeUInt32LE(totalSize,0x02);
buf.writeUInt32LE(54,0x0a);
buf.writeUInt32LE(40,0x0e);
buf.writeUInt32LE(1,0x1a);
buf.writeUInt32LE(32,0x1c);
buf.writeUInt32LE(size,0x22);
buf.writeInt32LE(width,0x12);
buf.writeInt32LE(height,0x16);

//data
for(var i = 54;i<totalSize;i+=4){
  buf.writeUInt32LE(0xffff0000,i);
}
fs.writeFile('./out.bmp',buf,(err) =>{
  if(err != null){
    console.error(err);
    process.exit(1);
  }
})


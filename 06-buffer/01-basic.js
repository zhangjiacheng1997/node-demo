#!/usr/bin/node

var buf1 = new Buffer(256);
buf1[0] = 23;

console.log('buffer length',buf1.length);
console.log('buf1',buf1)

for(var i=0;i<256;i++){
  buf1[i] = i;
}
var buf2 = buf1.slice(250,256);
console.log(buf2)
buf2.fill(0)
console.log(buf2)

var arr = ['a',0xBA,0x00,255,10,111,22];
var buf3 = new Buffer(arr);

var buf4 = Buffer('hello');

buf3.copy(buf4)


//ascii
//utf8
//utf16
//
//base64
//latin1
//hex








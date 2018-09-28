#!/usr/bin/node

var buf1 = new Buffer(256);//新建一个长度256的buffer
buf1[0] = 23;
console.log('buffer length',buf1.length);
console.log('buf1',buf1)

for(var i=0;i<256;i++){//遍历赋值
  buf1[i] = i;
}

var buf2 = buf1.slice(250,256);//切片赋值
console.log(buf2);
buf2.fill(0);//填充赋值，覆盖之前的值
console.log(buf2);

var arr = ['a',0xBA,0x00,255,10,111,22];
var buf3 = new Buffer(arr);//利用数组给buffer赋值
console.log(buf3);

var buf4 = Buffer('hello','utf8');//利用字符串赋值
console.log(buf4);

buf3.copy(buf4,0,0,buf4.length);//拷贝赋值
console.log(buf3);

//ascii
//utf8
//utf16
//
//base64
//latin1
//hex








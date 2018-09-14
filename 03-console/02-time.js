#!/usr/bin/node
var fun = function (){
  var s = 0;
  for(var i = 0;i<10000;i++){
    s+=i;
  }
  console.log(s);
};
console.time('函数耗时：');
fun();
console.timeEnd('函数耗时：');
//不相同


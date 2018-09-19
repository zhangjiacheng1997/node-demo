#!/usr/bin/node

var log = function(){
  console.log('定时周期执行');
}

var timeid = setInterval(log,500);

setTimeout(()=>{
  timeid.unref()
},1000);//此代码块进入执行栈但并不能在一秒后执行

var number = process.argv[2];
var i = 0;
var log2 = function(){
  console.log('定数周期执行');
  i++;
  if(i==number){
    timeid2.unref();
  }
}
var timeid2 = setInterval(log2,500);



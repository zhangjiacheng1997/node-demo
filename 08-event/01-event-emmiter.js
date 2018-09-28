#!/usr/bin/node

const EventEmitter = require('events').EventEmitter;
var e = new EventEmitter();

e.on('hello',()=>{
  console.log('hello***');
});//为e绑定hello事件
e.on('bey',()=>{
  console.log('bey***');
  process.exit();
})//为e绑定bey事件

setInterval(()=>{
  e.emit('hello');
},1000);//设置定时器，每一秒触发一次hello事件
setTimeout(()=>{
  e.emit('bey');
},3000);//设置定时器，三秒后执行bey事件




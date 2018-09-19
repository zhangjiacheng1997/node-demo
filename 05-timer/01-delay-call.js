#!/usr/bin/node

function Bomb(){
  this.message = 'Bomb';
}

var time = setTimeout(Bomb,1000);
//setTimeout();setInterval();setTimeout();方法每次都会返回一个计时器的对象
clearTimeout(time);



#!/usr/bin/node

const EventEmitter = require('events').EventEmitter;
function Dog (name,energy){
  this._name = name;
  this._energy = energy;
  var that = this;//对象的方法的this不指向本对象

  EventEmitter.call(this);

  var timer = setInterval(()=>{//定时触发bark事件
    if(that._energy>0){
      that.emit('bark');
      that._energy--;
    }else{
      global.clearInterval(timer);
    }
  },1000);

  this.name = () =>this._name;
  this.energy = () =>this._energy;
}

Dog.prototype = EventEmitter.prototype;

module.exports = Dog;


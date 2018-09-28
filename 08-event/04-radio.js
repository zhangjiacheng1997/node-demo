#!/usr/bin/node

var EventEmitter = require('events').EventEmitter;

function Radio (station){
  EventEmitter.call(this);

  var self = this;
  setTimeout(()=>{
    self.emit('open',station);
  },0);

  setTimeout(()=>{
    self.emit('stop',station)
  },5000)
}
Radio.prototype = EventEmitter.prototype;
module.exports = Radio;


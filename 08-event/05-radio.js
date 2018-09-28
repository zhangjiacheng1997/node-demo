#!/usr/bin/node

function Radio (station){
  var listen = {};

  var self = this;
  setTimeout(()=>{
    self.emit('open',station);
  },0);

  setTimeout(()=>{
    self.emit('stop',station)
  },5000);

  function on('event',fun){
    if(listen[event] === 'undefined'){
      listen[event] = [];
    }
    listen[event].push(fun);
  }
  
  function emit('event',arg){
    if(typeof(listen[event])==='undefined'){
      process.exit(1);
    }
    fun.call(this,arg);
  }

}

module.exports = Radio;


#!/usr/bin/node

const Radio = require('./03-radio.js');

var station = {
  name:'hebei guangbo',
  freq:'open'
}

var radio = new Radio(station);
radio.on('open',(station)=>{
  console.log(station.name);
});
radio.on('stop',(station)=>{
  console.log(station.freq)
});


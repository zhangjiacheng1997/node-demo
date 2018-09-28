#!/usr/bin/node

const dog = require('./02-dog.js');

var taidi = new dog('taidi',5);
console.log(taidi._name)
taidi.on('bark',onbark);
function onbark(){
  console.log(this._name,this._energy)
}


#!/usr/bin/node

const Readable = require('stream').Readable,
      util = require('util');

var c = 97;

var MyReadable = function(){
  Readable.call(this);
};

MyReadable.prototype._read = function(){
  this.push(String.fromCharCode(c++));
  if(c>'z'.charCodeAt(0)) this.push(null);
}

util.inherits(MyReadable,Readable);

var src = new MyReadable();
//src.push('2');
//src.push(null)
src.pipe(process.stdout)
//管道一旦接通就会一直push，直到push（null）
//
//
//


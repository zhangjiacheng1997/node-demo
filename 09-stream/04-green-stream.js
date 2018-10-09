#!/usr/bin/node

const Writable = require('stream').Writable;

function GreenSteam(){
  Writable.call(this);
}

GreenSteam.prototype = Writable.prototype;

GreenSteam.prototype._write = (chunk, encoding, callback) => {
  process.stdout.write('\033[1;32m' + chunk + '\033[1;37m');
  callback();
};

process.stdin.pipe(new GreenSteam())


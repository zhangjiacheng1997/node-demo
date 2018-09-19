#!/usr/bin/node

const fs = require('fs');
const filename = process.argv[2];
var buf = fs.readFileSync(filename);

console.log(buf.readUInt32LE(18));
console.log(buf.);
console.log();



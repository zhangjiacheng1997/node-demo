#!/usr/bin/node

const fs = require('fs');

var file = process.argv[2];

console.log(fs.statSync(file));//此函数返回一个对象





#!/usr/bin/node
console.log(__filename);
console.log(__dirname);
console.log(__dirname+'/view/view.html')
//最佳方案
const path = require('path');
fileName = path.join(__dirname,'view','view.html');
console.log(fileName);




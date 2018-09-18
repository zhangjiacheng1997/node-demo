#!/usr/bin/node
console.log(__filename);//文件所在路径及文件名
console.log(__dirname);//文件所在路径
console.log(__dirname+'/view/view.html')
//最佳方案
const path = require('path');
fileName = path.join(__dirname,'view','view.html');
console.log(fileName);




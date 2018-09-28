#!/usr/bin/node

//var pi = require('./02-export-var.js');
//console.log(pi);
//console.dir(module);

//var cir = require('./02-export-function.js');
//console.log(cir(2).diameter());

var cir = require('./02-export-object.js');
console.log(cir.diameter(2))


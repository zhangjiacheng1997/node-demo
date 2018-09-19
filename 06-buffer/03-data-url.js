#!/usr/bin/node
const http = require('http'),
      fs = require('fs'),
      path = require('path');
file = process.argv[2];

var mime = 'image/jpg';

var data = fs.readFileSync(file).toString('base64');
var uriData = 'data:' + mime + ';base64,' + data;
var html = '<!DOCTYPE html><img src="' +uriData +'"></html>'

http.createServer((req,res)=>{
  res.end(html)
}).listen(8080);



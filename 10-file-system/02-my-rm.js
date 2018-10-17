#!/usr/bin/node

const fs = require('fs'),
      src = process[2];

if(fs.existsSync(src)){
  if(fs.statSync(src).isFile()) fs.unlinkSync(src);
}else{
  console.error('sorry');
  process.exit(1);
}


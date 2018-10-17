#!/usr/bin/node

var fs = require('fs');

var lnk = process.argv[2];

console.log(fs.readlinkSync(lnk));



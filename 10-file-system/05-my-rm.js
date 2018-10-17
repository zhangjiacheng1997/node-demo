#!/usr/bin/node

var fs = require('fs');

var file = process.argv[2];

fs.unlinkSync(file);



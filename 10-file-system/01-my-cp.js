#!/usr/bin/node

const fs = require('fs');

var file = process.argv[2],
    dst = process.argv[3];

fs.writeFileSync(dst, fs.readFileSync(file))


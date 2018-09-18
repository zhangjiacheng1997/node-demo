#!/usr/bin/node
const msg = ['name:','email:','qq:','mobile:'];

console.log(msg[0]);
process.stdin.on('data',(data)=>{
  //console.log(data.slice(0,data.length-1).toString('utf-8'))
  console.log(data)
});



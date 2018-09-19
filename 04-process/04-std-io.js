#!/usr/bin/node
const msg = ['name:','email:','qq:','mobile:']
var me = {}
var i = 0
console.log(msg[0]);
process.stdin.on('data',(data)=>{
      me[msg[i]] = data.slice(0,data.length-1).toString('utf8');
      if(i!= 3){
        console.log(msg[++i]);
      }
      else{
      console.log(me);
        process.exit();
    }
});



#!/usr/bin/node
process.stdin.resume();
process.on('SIGINT',()=>{
  console.log('you have pressed C');
  process.exit();
})
process.on('SIGTSTP',()=>{
  console.log('lalala')
})


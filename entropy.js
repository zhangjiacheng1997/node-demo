#!/usr/bin/node
//var math = require('math');

console.log('|-----------信源熵计算-----------|\n\n');
var s = 0;
var H = 0;


function pro(){
  var argv1 = [];
  var i = 0;
  console.log('按Ctrl+c结束输入')
    console.log('请输入信源概率分布p%d:',i+1);
    process.stdin.on('data',(data)=>{
      argv1[i] = data.toString('utf8');
      i++;
      fun(argv1);
      console.log('请输入信源概率分布p%d:',i+1);

    });
    process.on('SIGINT',()=>{
      fun2(argv1);
      process.exit();
    })

}

if(!process.argv[2]){
  pro();
}
else{
  
  var argv2 = process.argv.slice(1);
  argv2 = argv2.slice(1);
  fun2(argv2);
}


function fun(argv){
for(var i = 0;i<argv.length;i++){

  if(argv[i]>1){
    console.log('概率值不能超过1');
    process.exit(1);
  }

  s+=Number(argv[i]);
  if(s>1){
    console.log('概率和超过了1');
    process.exit(1);
  }

  if(argv[i]<0){
    console.log('请输入大于0的数');
    process.exit(1);
  }

  var buf = new Buffer(argv[i],'utf8');
    for(a = 0;a<buf.length;a++){
      if(buf[a]>57){
        console.log('请输入数字');
        process.exit(1);
      }
    }
}
}


function fun2(arr){
  var H = 0;
  for(var i = 0;i<arr.length;i++){
    var num = Number(arr[i]);
  
    H -= num*Math.log(num,2);
  }
  console.log('信源熵是：%d',H)
}

#!/usr/bin/node
//一个程序结束后的状态，0表示正常退出
//echo $?查看退出码
//父进程通过查看子进程退出码判断其是否完成
var code = process.argv[2];
if(process.argv.length<3){
  console.error('请给出命令行参数');
  process.exit(1);
}
if(Boolean(code-1)==false||typeof(code)==='undefind'){
    console.error('命令行参数应该是整数型');
    process.exit(1);
}
process.exit(code)




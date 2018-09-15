#!/usr/bin/node
console.log(process.argv);
//process.argv属性返回一个数组
//数组第一个元素是进程的execPath
//数组第二个元素是该文件的路径
//process.argv[2]表示命令行的参数
if(process.argv[2]==='undefind'||process.argv[2]==='--help'||process.argv[2]==='--h'){
  console.log('程序的使用说明');
}
else{
  console.log('有参数')
}
console.log('%s = %d',process.argv[2],eval(process.argv[2]));

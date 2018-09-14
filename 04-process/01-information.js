#!/usr/bin/node
console.log('操作系统CPU架构：%s',process.arch);
console.log('操作系统平台：%s',process.platform);
console.log('process.id:%s',process.pid);
console.log('process.execpath:%s',process.execPath);
//process.exit();终止进程
process.stdin.resume();
//process.stdin属性返回一个连接到stdin的流
console.log('node版本信息：',process.version);
console.log('当前用户id信息：',process.getuid());
console.log('当前组id信息：',process.getgid());
console.log('当前脚本所在路径信息：',process.cwd());
console.log('当前内存使用情况：',process.memoryUsage().rss);
//process.memoryUsage()方法返回一个内存使用情况的对象
console.log('环境变量：',process.env)


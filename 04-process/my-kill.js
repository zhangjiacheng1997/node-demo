#!/usr/bin/node
const pid = process.argv[2],
sig = process.argv[3];
process.kill(pid,sig);
//kill第一个参数是要终止进程的id，第二个参数是要触发此进程的什么事件
//ps aux--查看当前正在进行的进程信息

#!/usr/bin/node
var usr = {
  name:'张家程',
  age:21,
  qq:286801343
};
console.log('name:%s',usr.name);
console.log('age:%d',usr.age);
console.log('json:%j',usr);
var qq = usr.qq;
console.log(qq);
console.error('error:something wrong!');
//console.log--将信息打印到stdout，标准输出流
//console.log--将信息打印到stderr，标准错误流


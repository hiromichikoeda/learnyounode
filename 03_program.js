// var fs = require('fs');
//
// var buf = fs.readFileSync(process.argv[2]);
// var str = buf.toString();
// var splitArray = str.split(/\n/);
// console.log(splitArray.length - 1);


//模範解答
var fs = require('fs');
console.log(fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1);

// 模範回答
// var fs = require('fs')
//
// var contents = fs.readFileSync(process.argv[2])
// var lines = contents.toString().split('\n').length - 1
// console.log(lines)

// 注：'readFileSync' の二つ目の引数に 'utf8' を渡すと、
// '.toString' を使わずに文字列を受け取ることが出来ます！
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
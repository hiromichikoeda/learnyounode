let fs = require('fs');
let fileName = process.argv[2]
fs.readFile(fileName, 'utf8', function (err, data) {
	let lines = data.split('\n').length - 1;
	console.log(lines);

});

// 模範解答
// var fs = require('fs')
// var file = process.argv[2]
//
// fs.readFile(file, function (err, contents) {
//   if (err) {
//     return console.log(err)
//   }
//   // fs.readFile(file, 'utf8', callback) 使ってもいいです
//   var lines = contents.toString().split('\n').length - 1
//   console.log(lines)
// })


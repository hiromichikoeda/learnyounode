let fs = require('fs');
let path = require('path');

// let resultCount = 0;
fs.readdir(process.argv[2],function (err, list){
	for(let i = 0; i < list.length; i++) {
		if(path.extname(list[i]) === '.' + process.argv[3]){//pathモジュールのextnameで拡張子を取得できる
			// resultCount++;
			console.log(list[i]);
			// console.log(resultCount);
		}
	}
	// if(resultCount === 0){
	// 	console.log('お探しの拡張子は見つかりませんでした');
	// }
});
//node program.js ./sample/ txt を実行

// 模範回答04_program.js
// let fs = require('fs')
// let path = require('path')
//
// let folder = process.argv[2]
// let ext = '.' + process.argv[3]
//
// fs.readdir(folder, function (err, files) {
//   if (err) return console.error(err)
//   files.forEach(function (file) {
//     if (path.extname(file) === ext) {
//       console.log(file)
//     }
//   })
// })

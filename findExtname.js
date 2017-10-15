let fs = require('fs');
let path = require('path');


//Nodeでモジュール化するならこの「module.exports」を使う
// module.exports = {
// 	findExt: function () {
// 		console.log('xxx');
// 	},
// 	subFunction: function () {
// 		console.log('aaaa');
// 	},
// 	add: function (n1, n2) {
// 		return (n1 + n2);
// 	}
//
// }

module.exports = function (dir, ext, callback) {
	fs.readdir(dir,function (err, list){
		let files = [];
		if(err) return callback(err);
		// for(let i = 0; i < list.length; i++) {
		for(let i in list) {
			if(path.extname(list[i]) === '.' + ext){
				files.push(list[i]);
			}
		}
		//ここで得られた結果を引数として渡す。
		callback(null,files);
	});
}



//模範解答
// solution_filter.js_ :
//
//
//     var fs = require('fs')
//     var path = require('path')
//
//     module.exports = function (dir, filterStr, callback) {
//       fs.readdir(dir, function (err, list) {
//         if (err) {
//           return callback(err)
//         }
//
//         list = list.filter(function (file) {
//           return path.extname(file) === '.' + filterStr
//         })
//
//         callback(null, list)
//       })
//     }
//

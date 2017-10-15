//作税したモジュールの読み込み。ファイル名は拡張子でも無しでもOKだがローカルモジュールの場合は先頭にパス'./'が必要
let findExtname = require('./findExtna
let dir = process.argv[2];
let ext = process.argv[3];


// console.log(findExtname.findExt(dirName,extName,function (err, data,callback));
findExtname(dir, ext, function (err, list) {
	if(err) throw err;
	list.forEach(function (file){
		console.log(file);
	});
});

//模範解答
// solution.js_ :
//
//
//     var filterFn = require('./solution_filter.js')
//     var dir = process.argv[2]
//     var filterStr = process.argv[3]
//
//     filterFn(dir, filterStr, function (err, list) {
//       if (err) {
//         return console.error('There was an error:', err)
//       }
//
//       list.forEach(function (file) {
//         console.log(file)
//       })
//     })

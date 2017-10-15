var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
// console.log(str);

var splitArray = str.split(/\n/);
// console.log(splitArray);

splitArray.forEach(function (file) {
	checkLines(file);
});



function checkLines(file) {
	var contents = fs.readFileSync(file);
	var lines = contents.toString().split('\n').length - 1;
	console.log(lines);
}
// node program.js ./sample/001.txt
//上記実行、後は正規表現で画面ID等取得

// var http = require('http');
// var bl = require('bl');//blパッケージはBufferListの略でバッファをリストで加工できる様にしたパッケージでバッファを利用しやすくしています。
//
// var url = process.argv[2];
//
// http.get(url,function (res) {
// 	res.pipe(bl(function (err,data) {
// 		if(err) re≈turn console.error(err);
// 		console.log(data.length);
// 		console.log(data.toString());
// 	}));
// });

//模範解答
var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err) {
      return console.error(err)
    }
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }))
})












// let http = require('http');
//
// let url = process.argv[2];
//
// http.get(url, function (res) {
// 	let out = "";
// 	res.setEncoding('utf8');
// 	res.on('data', function (chunk) {
// 		out += chunk;
// 	}).on('end', function () {
// 		console.log(out.loength);
// 		console.log(out);
// 	});
// 	res.on('error', function (err) {
// 		console.error("Error" + err.message);
// 	});
// });
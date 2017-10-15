let http = require('http');

let url = process.argv[2];

http.get(url,function (res) {
	res.setEncoding('utf8');
	res.on('data',function(chunk) {
		console.log(chunk);
	}).on('error',function(err){
		console.error("Error" + err.message);
	});
});

//模範解答
// var http = require('http')
//
// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// }).on('error', console.error)

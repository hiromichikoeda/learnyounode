let http = require("http");
let fs = require("fs");
let portNum = Number(process.argv[2]);
let filePath = process.argv[3];

let server = http.createServer(function(req, res) {

  res.writeHead(200, { 'content-type': 'text/plain' });
  let file = fs.createReadStream(filePath, {encoding: 'utf8'});
  file.pipe(res);

});

server.listen(portNum);
console.log('app listening on port: ', portNum);

//模範解答
// var http = require('http')
// var fs = require('fs')
//
// var server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'content-type': 'text/plain' })
//
//   fs.createReadStream(process.argv[3]).pipe(res)
// })
//
// server.listen(Number(process.argv[2]))

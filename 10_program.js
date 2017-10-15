//タイムサーバー
let net = require('net');

let portNum = Number(process.argv[2]);

let getNDate = function () {
	let d = new Date();
	let month = ("0" + (d.getMonth() + 1)).slice(-2);
	let date = ("0" + d.getDate()).slice(-2);
	let hour = ("0" + d.getHours()).slice(-2);
	let minutes = ("0" + d.getMinutes()).slice(-2);
	// .slice() 引数のインデックスには負の整数を指定することもできます。負の値の場合は文字列の最後の文字から位置を数えます。
	//今回だと先頭に0を追加し後ろ2桁を表示させてる
	return (d.getFullYear() + '-'
		+ month + '-'
		+ date + ' '
		+ hour + ':'
		+ minutes);
}

let server = net.createServer(function (soket) {
	soket.end(getNDate() + '\n');
})
console.log("starting server at port" + portNum);

server.listen(portNum);


// 模範解答
var net = require('net')

 function zeroFill (i) {
   return (i < 10 ? '0' : '') + i
 }

 function now () {
   var d = new Date()
   return d.getFullYear() + '-' +
     zeroFill(d.getMonth() + 1) + '-' +
     zeroFill(d.getDate()) + ' ' +
     zeroFill(d.getHours()) + ':' +
     zeroFill(d.getMinutes())
 }

 var server = net.createServer(function (socket) {
   socket.end(now() + '\n')
 })

 server.listen(Number(process.argv[2]))


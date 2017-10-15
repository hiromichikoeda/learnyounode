let http = require('http');
let fs = require('fs');
let settings = require('./settings.js');

http.createServer(function (req,res) {
	fs.readFile(__dirname + '/public_html/hello.html', 'utf-8',function (err, data) {//__dirnameでディレクトリ名取得
		if(err){
			res.writeHead(404, {'Content-Type': 'text/plain'});
			res.write('not found!');
			return res.end();
		}
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end();
	});
	// switch (req.url) {
	// 	case '/about':
	// 		msg = "about this page";
	// 		break;
	// 	case '/profile':
	// 		msg = "about me";
	// 		break;
	// 	default:
	// 		msg = 'wrong page';
	// 		break;
	// }
}).listen(settings.port);
console.log('Server running at http://localhost:' + settings.port);
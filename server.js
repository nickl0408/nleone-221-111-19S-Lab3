var http = require('http');
var fs = require('fs');
var url = require('url');

function onRequest(request, response){
var q = url.parse(request.url,true);
var filename = "." + q.pathname;
fs.readFile(filename, function(err, data) {

	if (request.url.match ('pikachu.jpeg')){

		var img = fs.readFilesSync('pikachu.jpeg');
		response.writeHead(200, {'Content-Type' : 'image/jpg' });
		return response.end(img, 'binary');
};
	
response.writeHead(200, {
'Content-Type': 'text/html',
'Access-Control-Allow-Origin' : '*'
});
  fs.readFile('index.html',null, function(error,data){
		if (error) {
			response.writeHead(404);
			response.Write('File not found');
		}else{
			response.write(data);
		}
		response.end();
	});
}
http.createServer(onRequest).listen(1337)



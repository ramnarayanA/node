var http= require('http');
var url=require('url');
var path=require('path');
var fs=require('fs');

var mimeTypes={
	'html':'text/html',
	'jpeg':'image/jpeg',
	'jpg':'image/jpg',
	'png':'image/png',
	'javascript':'text/javascript',
	'css':'text.css'
};
http.createServer(function(req,res){
var uri=url.parse(req.url).pathname;
var filename=path.join(process.cwd(),unescape(uri));
console.log('loading '+uri);
var stats;
try{
stats=fs.lstatSync(filename);
}
catch(e){
	console.log(e);
res.writeHead(404,{'Content-type':'text/plain'});
res.write('404 Not Found');
res.end();
return;
}
//
if(stats.isFile()){
var mimeType=mimeTypes[path.extname(filename).split('.').reverse()[0]];
res.writeHead(200,{'Content-type':mimeType});
var filestream=fs.createReadStream(filename);
filestream.pipe(res);
}else if(stats.isDirectory){
	res.writeHead(302,{'Location':'index.html'})
}else{
	res.writeHead(500,{'Content-Type':'text/plain'});
	res.write('500 internal server error');
	res.end();
}
}).listen(8085)
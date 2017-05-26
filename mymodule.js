var http=require('http');
var fs=require('fs');
var str=''
fs.readFile('text.txt',function(err,data){
if(err)console.log(err);
else{
	str=data.toString();
}
console.log('test')
});
http.createServer(function(req,res){
	console.log('test2')
	 res.writeHead(200, {'Content-Type': 'text/json'});
  res.write(str);
  res.end();
}).listen(8085);

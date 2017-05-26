var http=require('http')
var str = '';
var options={
	host:process.argv[2],
	port:8085

}
callback = function(response) {

  response.on('data', function (chunk) {
    str += chunk;
  });

  response.on('end', function () {
    console.log(str);
    // your code here if you want to use the results !
  });
}

http.get(options,callback).end();
console.log("Program Ended");
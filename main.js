console.log("Hello, World!")
//start server
// var http=require("http");
// http.createServer(function (request, response) {
   // // Send the HTTP header 
   // // HTTP Status: 200 : OK
   // // Content Type: text/plain
   // response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // // Send the response body as "Hello World"
   // response.end('Hello World\n');
// }).listen(8085);

// // Console will print the message
// console.log('Server running at http://127.0.0.1:8085/');
//file system

// console.log("Program Ended");
//event
var events = require('events');
var eventEmitter = new events.EventEmitter();
// Create an event handler as follows
var connectHandler = function connected() {
   console.log('connection succesful.');
  
   // Fire the data_received event 
   eventEmitter.emit('data_received');
}
eventEmitter.on('test',function(){
console.log("Ennamma aichu ungullakku");
})
// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);

// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function(){
   console.log('data received succesfully.');
});
// Fire the connection event 
 eventEmitter.emit('test');
console.log("Program Ended.");
 var fs=require("fs");
 // var data = fs.readfilesync('text.txt');
 // console.log(data.tostring());
 // console.log("program ended");
// // //non-blocking
fs.readFile('text.txt', function (err, data) {
if (err) return console.error(err);
 console.log(data.toString());
 });
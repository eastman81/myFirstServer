var http = require('http');

// Server 1
// nice server
var PORT1 = 7000

function handleRequest1(request, response) {
	// why does it seem likt it is console.logging it twice?
	console.log("It works, super-duper!");
	response.end("You are amazing!");
}

var server1 = http.createServer(handleRequest1);

server1.listen(PORT1, function() {
	console.log("Your wonderful server #1 is listening!")
});

// Server 2
// mean server
var PORT2 = 7500

function handleRequest2(request, response) {
	response.end("you are a horible human being...")
}

var server2 = http.createServer(handleRequest2);

server2.listen(PORT2, function() {
	console.log("i'm listening you bastard...")
});
var http = require('http');
var url = require('url');
// Server 1
// nice server
var PORT1 = 7000

function handleRequest1(request, response) {
	// why does it seem likt it is console.logging it twice?
	// it is because it is getting a request for favicon, dang
	console.log("It works, super-duper!");
	
	//gives you the ability to look at url returned, and the parse will list it out pretty 
	// important for verb grabbing
	console.log(url.parse(request.url));

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
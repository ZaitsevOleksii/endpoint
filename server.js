var http = require("http");


function start(route, handle){http.createServer((request, response) => {
	
	var pathname = request.url;
	console.log("Request for " + pathname +" received.");
	route(handle, pathname, response, request);
    
	
}).listen(8888);
console.log("Server has started.");
}

exports.start = start;

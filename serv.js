const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
	
	response.setHeader("Content-Type", "text/html; charset=utf-8;");
	
	if(request.url === "/endpoint1"){
		if (!fs.existsSync('endpoint1'))
			fs.mkdirSync('endpoint1');
		fs.open ('endpoint1/file.txt', 'a', (err, fd) => {
		if (err) throw err;
			fs.appendFile (fd, 'Звідки в тебе ті чари?', 'utf8', (err) => {
					fs.close (fd, (err) => {
						if (err) throw err;
					});
					if (err) throw err;
				});
		});
		response.write('endpoint1/file.txt');
	}
	else if(request.url == "/endpoint2"){
		
        response.write(fs.readFileSync("hello.txt", "utf8", 
			function(err, fd){
                
                if(err) throw err; 
                
			})
		);
	}
	
	else{
		response.write("<h2>Not found</h2>");
		response.statusCode = 404;
	}    
	response.end();
	
}).listen(3000);
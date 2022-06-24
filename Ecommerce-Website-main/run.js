var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function(req, res){

    if(req.url === "/"){
        fs.readFile("index.html", "UTF-8", function(err, html){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(html);
        });
		
	}else if(req.url.match("\.html$")){
        var htmPath = path.join(__dirname,  req.url);
        var fileStream = fs.createReadStream(htmPath, "UTF-8");
        res.writeHead(200, {"Content-Type": "text/html"});
        fileStream.pipe(res);
    
	}else if(req.url.match("\.css$")){
        var cssPath = path.join(__dirname,  req.url);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, {"Content-Type": "text/css"});
        fileStream.pipe(res);

    }else if(req.url.match("\.png$")){
        var imagePath = path.join(__dirname, req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, {"Content-Type": "image/png"});
        fileStream.pipe(res);
    }
    else if(req.url.match("\.js$")){
        var imagePath = path.join(__dirname, req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, {"Content-Type": "text/js"});
        fileStream.pipe(res);
    }
    else if(req.url.match("\.min.js$")){
        var imagePath = path.join(__dirname, req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, {"Content-Type": "text/js"});
        fileStream.pipe(res);
    }
    else if(req.url.match("\.ttf$")){
        var imagePath = path.join(__dirname, req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, {"Content-Type": "text/image"});
        fileStream.pipe(res);
    }
	else if(req.url.match("\.jpg$")){
        var imagePath = path.join(__dirname, req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, {"Content-Type": "image/jpg"});
        fileStream.pipe(res);
    }
	else if(req.url.match("\.gif$")){
        var imagePath = path.join(__dirname, req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, {"Content-Type": "image/gif"});
        fileStream.pipe(res);
    }
	else if(req.url.match("\.jfif$")){
        var imagePath = path.join(__dirname, req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, {"Content-Type": "image/jfif"});
        fileStream.pipe(res);
    }

	else{
        res.writeHead(404, {"Content-Type": "text/html"});
        res.end("File Uploaded");
    }
	


}).listen(3000);
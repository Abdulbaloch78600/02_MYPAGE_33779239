var http = require("http"); 
const port = 8000; 

http.createServer(function(req, res) { 
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<!doctype html>
<html>
<head>
    <title>MYPage</title>
</head>
<body>
    <h1>Welcome to MYPage!</h1>
</body>
</html>`);
}).listen(port, function() { 
    console.log(`Node server is running on port ${port}...`); 
});

// Mypage web app
// MyPage web app
const http = require("http");
const port = 8000;

http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`<!DOCTYPE html>
<html>
<head>
  <title>MyPage</title>
</head>
<body>
  <h1>Welcome to MyPage!</h1>
  <p>This is a simple Node.js server.</p>
</body>
</html>`);
}).listen(port, function () {
  console.log(`Node server is running on port ${port}...`);
});

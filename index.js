// MyPage web app
const http = require("http");
const port = 8000;

http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`<!DOCTYPE html>
<html>
<head>
  <title>MyPage</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f5f5f5;
      text-align: center;
      margin: 0;
      padding: 50px;
    }
    h1 {
      color: #0078d7;
    }
    p {
      color: #333;
      font-size: 18px;
    }
    footer {
      margin-top: 40px;
      color: gray;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <h1>Welcome to MyPage!</h1>
  <p>This is a simple Node.js server.</p>
  <p>Today the date is: <strong>${new Date().toDateString()}</strong></p>
  <footer>
    MyPage Web App | Created by Abdul Qudoos
  </footer>
</body>
</html>`);
}).listen(port, function () {
  console.log(`Node server is running on port ${port}...`);
});

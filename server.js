const http = require('http');
const fs = require('fs');
const path = require('path');
const root = path.resolve(process.argv[2] || '.'); //服务器的server.js当前的目录
console.log('root dir: ' + root);
const port = 9090;

http
  .createServer(function (req, res) {
    if (req.url === '/') {
      fs.readFile(path.join(root, '/dist/index.html'), function (err, data) {
        res.end(data);
      });
    } else {
      fs.readFile(path.join(root, `/dist${req.url}`), function (err, data) {
        res.end(data);
      });
    }
  })
  .listen(port);
console.log('启动端口: ' + port);

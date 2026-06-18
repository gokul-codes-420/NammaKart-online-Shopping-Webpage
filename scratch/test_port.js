const http = require('http');
const server = http.createServer((req, res) => {
  res.end('Hello World');
});
server.listen(3000, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:3000/');
  process.exit(0);
});
server.on('error', (err) => {
  console.error(err);
  process.exit(1);
});

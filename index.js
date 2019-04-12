const http = require('http');

const port = process.env.PORT || 4000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<b onclick="document.querySelector(`b`).innerHTML = `wanker!`;"  style="font-size: 50">Press on us man!!</b>\n');
});
server.listen(port, () => {
  console.log(`Server running on ${port}`);
});
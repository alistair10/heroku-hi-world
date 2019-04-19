const http = require('http'), mysql2 = require('mysql2');

const port = process.env.PORT || 4000;

const conn_obj = {
	host: 'us-cdbr-iron-east-02.cleardb.net',
	user: 'bf1c235e8d2c83',
	database: 'heroku_e2062b8aeac6001',
	password: '0cf703e4',
};

const conn = mysql2.createConnection(conn_obj);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('hi');
});  

server.listen(port, () => {
  console.log(`Server running on ${port}`);
});
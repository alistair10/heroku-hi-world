const http = require('http'), mysql2 = require('mysql2');

const port = process.env.PORT || 4000;

function run_query(connection, query) {
	return new Promise((res,rej)=> {
		connection.execute(query, (err,result)=> {
			if(err) {
				rej(err);
			} else {
				res(err);
			}
		})
	});
}

const conn_obj = {
	host: 'us-cdbr-iron-east-02.cleardb.net',
	user: 'bf1c235e8d2c83',
	database: 'heroku_e2062b8aeac6001',
	password: '0cf703e4',
};

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const conn = mysql2.createConnection(conn_obj);
  run_query(conn, "SELECT * FROM test")
  	.then(msg => res.end(`msg: ${msg[0].id}`))
  	.catch(err => res.end(`err: ${err}`));
});

server.listen(port, () => {
  console.log(`Server running on ${port}`);
});
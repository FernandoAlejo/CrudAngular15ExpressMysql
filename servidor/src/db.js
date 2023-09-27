const mysql2 = require('mysql2');

const config = {
  host: 'localhost',
  database: 'Recordatorios',
  user: 'root',
  password: 'root',
  socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
};

const connection = mysql2.createConnection(config);

connection.connect((err) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
});

module.exports = connection;

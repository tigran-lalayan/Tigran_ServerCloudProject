const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Connect to MySQL database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'todo_list'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

// Set up body-parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set up route to get all to-do items
app.get('/api/todos', (req, res) => {
  const sql = 'SELECT * FROM todos';
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

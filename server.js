const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'company'
    },
    console.log('Connected to the company database.')
);

// // command to display all departments
// db.query(`SELECT * FROM departments`, (err, rows) => {
//     console.log(rows);
// });

// // Delete a department
// db.query(`DELETE FROM departments WHERE id = ?`, 1, (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(result);
// });

// // Create a department
// const sql = `INSERT INTO departments (id, name) 
//               VALUES (?,?)`;
// const params = [1, 'HR'];

db.query(sql, params, (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// function to listen at the PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
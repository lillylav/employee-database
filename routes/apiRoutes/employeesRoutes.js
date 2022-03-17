const router = require("express").Router();
const mysql = require('mysql2');
const inputCheck = require('../../utils/inputCheck');

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

// Get all employees
router.get('/employees', (req, res) => {
    const sql = `SELECT employees.id, employees.first_name, employees.last_name, roles.job_title, departments.name AS departments, roles.salary,
                CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employees
                LEFT JOIN roles on employees.role_id = roles.id
                LEFT JOIN departments on roles.department_id = departments.id
                LEFT JOIN employees manager on manager.id = employees.manager_id`;

    // check for errors or display JSON
    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: rows
      });
    });
});

// Delete an employee
router.delete('/employees/:id', (req, res) => {
    const sql = `DELETE FROM employees WHERE id = ?`;
    const params = [req.params.id];
  
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: res.message });
      } else if (!result.affectedRows) {
        res.json({
          message: 'Employee not found'
        });
      } else {
        res.json({
          message: 'deleted',
          changes: result.affectedRows,
          id: req.params.id
        });
      }
    });
});

// Create an employee
router.post('/employees', ({ body }, res) => {
    const errors = inputCheck(body, 'first_name', 'last_name', 'manager_id', 'role_id');
    if (errors) {
      res.status(400).json({ error: errors });
      return;
    }

    const sql = `INSERT INTO employees (first_name, last_name, manager_id, role_id)
        VALUES (?, ?, ?, ?)`;
        const params = [body.first_name, body.last_name, body.manager_id, body.role_id];

        db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: body
        });
    });
});

// Update a employee's role
router.put('/employees/:id', (req, res) => {
    const sql = `UPDATE employees SET role_id = ? 
                 WHERE id = ?`;
    const params = [req.body.role_id, req.params.id];
    
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        // check if a record was found
      } else if (!result.affectedRows) {
        res.json({
          message: 'Employee not found'
        });
      } else {
        res.json({
          message: 'success',
          data: req.body,
          changes: result.affectedRows
        });
      }
    });
});

module.exports = router;
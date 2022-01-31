const fs = require('fs');
const path = require('path');
const express = require('express');
const mysql = require('mysql2');



const PORT = process.env.PORT || 3001

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// Connect to SQl database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        // Your MySQL password
        password: 'root',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

//     // GET a single candidate
// db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
//     if (err) {
//         console.log(err);
//     }
//     // console.log(row);
// });

// Delete a candidate
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });

// // Create a candidate
// const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
// VALUES (?,?,?,?)`;
// const params = [1, 'Ronald', 'Firbank', 1];

// db.query(sql, params, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });

// Default response for any other request (Not Found) Always place at end of list for app.use as it will overide 
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
 console.log(`API server on port ${PORT}!`);
});

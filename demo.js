const express = require('express');
const mysql = require('mysql');
const app = express();

const db = mysql.createConnection({ host: 'localhost', user: 'root', password: '' });

app.get('/user', (req, res) => {
    // Vulnerabilidad de Inyección SQL para detección de SAST / CodeQL
    const userId = req.query.id;
    const query = "SELECT * FROM users WHERE id = '" + userId + "'";
    
    db.query(query, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

app.listen(3000);

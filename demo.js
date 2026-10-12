// CÓDIGO VULNERABLE (SQL Injection)
app.get('/api/login', (req, res) => {
    const userInput = req.query.user;
    
    // Vulnerabilidad: Concatenación directa de entradas de usuario
    const query = "SELECT * FROM users WHERE username = '" + userInput + "'";
    
    db.query(query, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
});

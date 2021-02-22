const express = require('express')
const app = express()
const port = process.env.PORT
// const mysql = require('mysql');
// const con = mysql.createConnection({
//     host: "mysql-db",
//     user: "root",
//     password: "complexpassword",
//     database: 'Customers'

// });

// con.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected!");
// });



app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get("/docker", (req, res) => {
    res.send("bye from docker");
});


app.get("/live", (req, res) => {
    res.send("yes working...");
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});
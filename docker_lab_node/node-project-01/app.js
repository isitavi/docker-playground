const express = require('express')
const app = express()
const mysql = require('mysql');
const port = process.env.PORT || 3000
const test = process.env.test;

let attempts = 0;
const seconds = 1000;

function connect() {
    attempts++;

    console.log('password', process.env.DATABASE_PASSWORD);
    console.log('host', process.env.DATABASE_HOST);
    console.log(`attempting to connect to DB time: ${attempts}`);

    const con = mysql.createConnection({
        host: process.env.DATABASE_HOST,
        user: "root",
        password: process.env.DATABASE_PASSWORD,
        database: 'Products'
    });

    con.connect(function (err) {
        if (err) {
            console.log("Error", err);
            setTimeout(connect, 30 * seconds);
        } else {
            console.log('CONNECTED!');
        }

    });

    con.on('error', function (err) {
        if (err) {
            console.log('shit happened :)');
            connect()
        }
    });

}
connect();

app.get('/', (req, res) => res.send(`Hello product service, changed ${test}`))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
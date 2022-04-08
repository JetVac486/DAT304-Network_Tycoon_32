const express = require("express");
const mysql = require("mysql");

const app = express();

app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost", 
    password: "root",
    database: "userdb", 
});

app.post("/register", (req, res) => {
    const username = req.body.Username
    const password = req.body.Password

    db.query(
        "INSERT INTO Users(Username, Email, Password) VALUES('?,?,?')",
        [username, password],
        (err, result) => {
            console.log(err);
        }
    );
});



app.listen(3001, () => {
    console.log("Running server");
});
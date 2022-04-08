const   express = require('express');
        cors    = require('cors');
        mysql   = require('mysql2');

// const API_PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "localhost", 
    password: "root",
    database: "userdb", 
});

app.post("/register", (req, res, next) => {
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password

    db.query(
        "INSERT INTO Users(Username, Email, Passwords) VALUES(?,?,?)",
        [username, email, password],
        (err, result) => {
            console.log(err);
        }
    );
})

app.post("/login", (req, res, next) => {
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password

    db.query(
        "SELECT * FROM Users WHERE Username=? AND Email=? AND Passwords=?",
        [username, email, password],
        (err, result) => {
            if(err) {
                res.send({err: err})
                console.log(err)
            }

            if(result.length > 0){
                res.send(result)
                console.log(result)
            }
            else{
                res.send({message: "Wrong userinfo combination"})
            }
        }
    );
})

    // https://www.youtube.com/watch?v=dXjcvIPSBr4 

app.listen(3001, () => {
    console.log("Running server");
});

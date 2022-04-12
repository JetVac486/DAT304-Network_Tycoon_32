const   express = require('express');
        cors    = require('cors');
        mysql   = require('mysql2');
        bcrypt  = require('bcryptjs');

// const API_PORT = process.env.PORT || 5000;

const app = express();
const saltRounds = 9

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "localhost", 
    password: "root",
    database: "userdb", 
});

app.post("/register", (req, res) => {
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password

    bcrypt.hash(password, saltRounds, (err, hash) => {
        if(err) {
            console.log(err)
        }
        db.query(
            "INSERT INTO Users(Username, Email, Passwords) VALUES(?,?,?)",
            [username, email, hash],
            (err, result) => {
                console.log(err);
                console.log(hash)
            }
        );
    })
})

app.post("/login", (req, res) => {
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password

    db.query(
        "SELECT * FROM Users WHERE Username=? AND Email=?",
        [username, email],
        (err, result) => {
            if(err) {
                res.send({err: err})
                console.log(err)
            }

            if(result.length > 0){
                bcrypt.compare(password, result[0].Passwords, (err, response) => {
                    if (response) {
                        res.send(result)
                        console.log(result)
                    }
                    else {
                        res.send({message: "Wrong userinfo combination!"})
                        console.log(password)
                    }
                })
            }
            else{
                res.send({message: "User doesn't exist"})
            }
        }
    );
})

    // https://www.youtube.com/watch?v=dXjcvIPSBr4 

app.listen(3001, () => {
    console.log("Running server");
});

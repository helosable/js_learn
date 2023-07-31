import express from "express";
import mysql from "mysql";
import cors from "cors";
import bodyParser from "body-parser";
import fs from "fs";

const config = JSON.parse(fs.readFileSync("./config.json"));

const db = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database,
});

const table = config.table;

db.connect();

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

db.query(`CREATE TABLE IF NOT EXISTS  ${table} ( id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
book_name TEXT NOT NULL,
    book_desc TEXT NOT NULL) `, (err, data)=>{
        if(err){console.log(err)}
    });

app.get("/", (req, res) => {
  db.query(`SELECT * FROM ${table}`, (err, data) => {
    res.json(data);
  });
});

app.post("/add", (req, res) => {
  const query = `insert into ${table}(book_name, book_desc) values(?)`;
  const values = [req.body.name, req.body.desc];
  db.query(query, [values], (err, data) => {
    if (err) {
      console.log(err);
    }
  });
});

app.post("/delete", (req, res) => {
  db.query(`delete from ${table} where id=${req.body.id}`, (err, data) => {
    if (err) {
      console.log(1);
    }
  });
});

app.listen(3001, () => {
  console.log("working");
});

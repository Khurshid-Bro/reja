console.log("Web serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();

// const fs = require("fs");

// let user;
// fs.readFile("database/user.json", "utf8", (err, data) => {
//     if(err) {
//         console.log("ERROR:", err);
//     } else {
//         user = JSON.parse(data)
//     }
// });

//MongoDB connect
// MongoDB chaqirish
const db = require("./server").db();


// 1
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2 Session

// 3 Views code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing code
app.post("/create-item",(req, res) => {
    // TODO: code with db here
});

// app.get("/master", (req, res) => {
//     res.render("master", {user: user});
// });

app.get("/", function (req, res) {
    res.render("reja", );
});

module.exports = app;

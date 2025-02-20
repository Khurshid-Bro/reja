console.log("Web serverni boshlash");

// npm install express --save => express yuklash
// npm i express => qisqartmasi
const express = require("express");
const app = express();
const http = require("http");

// 1
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2 Session

// 3 Views code
// npm i ejs => ejs yuklash. ejs - html frontend dev ni yasash uchun kerak
// BSSR - backendda htmlni qurish
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing code
// app.post("/create-item",(req, res) => {
//     console.log(req,body);
//     res.json({test:"succes"});
// });
// app.get("/", function(req, res) {
//     res.render("harid");
// });
app.post("/create-item",(req,res) => {
    console.log(req);
    res.json({test:"succes"});
});
app.get("/", function (req, res) {
    res.render("harid");
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`The server is running successfully on port: ${PORT}`);
});
//git init - gitni yuklash


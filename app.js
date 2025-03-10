console.log("Web Serverni boshlash");
const express = require("express");
const app = express();

//MongoDB chaqirish

const db = require("./server").db();
// const db = client.db();
const mongodb = require("mongodb");

// 1 kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2 Session code - AUTHENTICATION (Login, Signup)

// 3 Views code - (B)SSR - Backend ishida HTML qurib yuborish. SPI - Backend and Frontent alohida ishlaydi.
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing code
app.post("/create-item", (req, res) => {
    console.log("user entered /create-item");
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
        console.log(data.ops);
        res.json(data.ops[0]);
    });
});

app.post("/delete-item", (req, res) => {
    const id = req.body.id;
    db.collection("plans").deleteOne(
        { _id: new mongodb.ObjectId(id) },
        function (err, data) {
            res.json({ state: "success" });
        }
        );
    });

    app.post("/edit-item", (req, res) => {
        const data = req.body;
        console.log(data);
        db.collection("plans").findOneAndUpdate(
            { _id: new mongodb.ObjectId(data.id) }, 
            { $set: { reja: data.new_input } }, 
            function (err, data) {
                res.json({ state: "success" });
            }
        );
    });

    app.post("/delete-all", (req, res) => {
        if(req.body.delete_all) {
            db.collection("plans").deleteMany(function() {
                res.json({ state: "hamma rejalar ochirildi"})
            });
        }
    });
    
    app.get("/", function (req, res) {
        console.log("user entered to /");
        db.collection("plans")
        .find()
        .toArray((err, data) => {
            if (err) {
                console.log(err);
                res.end("something went wrong");
            } else {
                console.log(data);
                res.render("reja", { items: data });
            }
        });
    });
    
    module.exports = app; 
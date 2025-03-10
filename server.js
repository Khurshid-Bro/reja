const http = require("http");
const mongodb = require("mongodb");

// npm i mongodb - mongodbni yuklash
// let db;
const connectionString = 
"mongodb+srv://razakovkh6774:6ClG8vYh4Du1mMyO@cluster0.48p1o.mongodb.net/Reja";

mongodb.connect(
    connectionString, 
    {
        useNewUrlParser: true, 
        useUniedTopology: true,
    }, 
    (err, client) => {
        if(err) console.log("Error on connection MongoDB");
        else {
            console.log("MongoDB connection succeed");
            module.exports = client;

            const app = require("./app");
            const server = http.createServer(app);
            let PORT = 3000;
            server.listen(PORT, function () {
                console.log(
                    `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
                );
            });
        }
    }
);
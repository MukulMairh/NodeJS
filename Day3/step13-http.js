let http = require("node:http");

let server = http.createServer(function (req, res) {
    res.write("hello from http sever");
    res.write("hello from http server");
    res.end();
});

server.listen(5050, "localhost", function (error) {
    if (error) console.log("Error: ", error);
    else console.log("Server is now live on localhost:5050");
})

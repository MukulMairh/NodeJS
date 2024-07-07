let fs = require("node:fs");

fs.watchFile("data/temp.txt", { interval: 500 }, () => {
    console.log("File was updated")
});
let count = 0;
let si = setInterval(() => {
    fs.appendFile("data/temp.txt", "\n" + Math.random(), (error, data) => {
        if (error) console.log("Error:", error);
        else {
            console.log("Number added");
            count++;
            if (count > 5) {
                clearInterval(si);
            }
        }
    })
}, 1000)
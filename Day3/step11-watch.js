let fs = require("node:fs");

fs.watchFile("data/temp.txt", function (currentVal, previousVal) {
    console.log("++++++++++++++++++File is updated+++++++++++++");
    console.log("newValue: ", currentVal);
    console.log("oldValue: ", previousVal);

});
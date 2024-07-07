let fs = require("node:fs");

//create a file.
//sync n async
// fs.writeFileSync("temp.txt", "Welcome to your life...", {});
// console.log("File is ready");


var { si, count } = [null, 0];
function writeInfo() {
    si = setInterval(function () {
        fs.writeFile("data/temp.txt", "Welcome to your life\n ", { flag: "a" }, function (error) {
            if (error) {
                console.log("Error:", error);
            } else {
                console.log("File is ready");
            }
        });
        count++;
    }, 1000);

    if (count > 4) {
        clearInterval(si);
    }
}


// fs.access("data", function (error) {
//     if (error) {
//         console.log("Error: ", error);
//         fs.mkdirSync("data")
//         writeInfo();
//     }
//     else {
//         console.log("Folder by name data exists.");
//         writeInfo();
//     }
// });

//Async

fs.access("data", function (error) {
    if (error) {
        console.log("Error:", error);
        fs.mkdir("data", function (mkdirError) {
            if (mkdirError) {
                console.log("Error creating directory:", mkdirError);
            } else {
                writeInfo();
            }
        });
    } else {
        console.log("Folder by name data exists.");
        writeInfo();
    }
});
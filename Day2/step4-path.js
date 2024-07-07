let path = require("path");

console.log("G:\IIT-R\NodeJS\Day2");

console.log(path.resolve("G:\IIT-R\NodeJS\Day2"))

let folders = ["admin", "guest", "users"];
let files = ["index.html", "details.html", "profile.html"];

//console.log();

console.log(path.join(folders[0], files[0]));
console.log(path.join(folders[1], files[1]));
console.log(path.join(folders[2], files[2]));

let mypath = "G:\////IIT-R\ NodeJS/Day2/step4-path.js";
console.log(path.normalize(mypath)); 

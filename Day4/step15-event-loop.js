//Event loops, and precendence. Refer to the slide by Vijay. 
const fs = require("node:fs");
console.log("before the file is read", "line 2");
fs.readFile("temp.txt", (data) => {
    console.log(data, "line 4 ");
});
console.log("after the file is read", "line 6");
Promise.resolve().then(() => {
    console.log("Promise resolve was called.", "line 8");
})
process.nextTick(() => {
    console.log("line 11");
})
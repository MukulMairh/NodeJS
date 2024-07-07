let found = true; // Control variable to resolve or reject the promise

let promise = new Promise(function (resolve, reject) {
    setInterval(() => {
        if (found) {
            resolve("The promise is resolved");
        } else {
            reject("The promise is rejected");
        }
    }, 2000);
});

// Handle promise resolution
promise.then(function (data) {
    console.log("data", data);
    return data;
}).then(function (data) {
    console.log("data", data);
    return data;
}).then(function (data) {
    console.log("data", data);
    return data;
}).catch(function (error) {
    console.log("error", error);
}).finally(function () {
    console.log("Promise is complete");
});
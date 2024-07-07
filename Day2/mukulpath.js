let user = "mukul";
let company = "Intellipaat";
let city = "City";

//commanjs design pattern of exporting
//2009
//revealing pattern 
// module.exports.user = user;
// module.exports.company = company;
// module.exports.city = city;

// module.exports = {
//     user: user,
//     company: company,
//     cisty: city
// }

let myfun = (username = "guest") => {
    return "hello " + username;
}

class Hero {
    firstName = "Tony";
    lastName = "Stark";

    fullName() {
        return this.firstName + " " + this.lastName;
    }
}


module.exports = { user, company, city, Hero, myfun }
//ECMA 2015

module.exports.trainer = user;



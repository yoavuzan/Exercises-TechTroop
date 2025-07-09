const users = require("./Users.js");

console.log(users.find(p=>p.address.suite === "Apt. 950").company.name)
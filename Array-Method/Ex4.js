const users = require("./Users.js");
console.log(users.filter((p) => p.name[0] == "C").map((p) => p.name));

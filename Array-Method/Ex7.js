const users = require("./Users.js");

printUserProp = (user) => 
  `${user.name} lives in ${user.address.city}, and owns the company ${user.company.name}`;
;

users.forEach((p) => console.log(printUserProp(p)));

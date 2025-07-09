const users = require('./Users.js');

console.log(users.filter(p=>p.address.zipcode[0]==="5").map(p=>p.id))
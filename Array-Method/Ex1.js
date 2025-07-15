const users = require('./Users.js');

emailComponyName = users.map((p) => {
  return { email: p.email, companyName: p.company.name}
});

console.log(emailComponyName)
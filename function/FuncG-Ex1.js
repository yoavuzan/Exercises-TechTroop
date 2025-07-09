const people_info = [
  {
    name: "guido",
    profession: "bungalow builder",
    age: 17,
    country: "canaland",
    city: "sydurn",
    catchphrase: "what a piece of wood!",
  },
  {
    name: "petra",
    profession: "jet plane mechanic",
    age: 31,
    country: "greenmark",
    city: "bostork",
    catchphrase: "that's my engine, bub",
  },
  {
    name: "damian",
    profession: "nursery assistant",
    age: 72,
    country: "zimbia",
    city: "bekyo",
    catchphrase: "with great responsibility comes great power",
  },
];
const profession = function (profession) {
  let prof = "";
  for (const word of profession.split(" ")) {
    prof += capitalize(word) + " ";
  }
  return prof;
};

const capitalize = function (str) {
  let capitalizedStr = "";
  capitalizedStr += str[0].toUpperCase(); // first letter, capitalized
  capitalizedStr += str.slice(1); // rest of the string
  return capitalizedStr;
};

const getAge = function (age) {
  if (age < 21) {
    return "Underage";
  } else if (age > 55) {
    return "55+";
  } else {
    return String(age);
  }
};
const combineCityCountry = (country, city) => {
  return "from " + capitalize(city) + ", " + capitalize(country);
};
const catchphrase = (name, catchphrase) => {
  return capitalize(name) + ' loves to say "' + capitalize(catchphrase) + '"."';
};

const getSummary = function (person) {
  let summary = "";
  summary += capitalize(person.name);
  summary += ` is ${getAge(person.age)} `; //Yes - you can put a function call inside the tick quotes!
  summary += `${profession(person.profession)}`; //call function for profession
  summary += combineCityCountry(person.country, person.city); //call function for country + city
  summary += " " + catchphrase(person.name, person.catchphrase); //call function for catchphrase
  return summary;
};

for (const person of people_info) {
  console.log(getSummary(person));
}

const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

for(const i in names){
    people.push({name:names[i],age:ages[i]})
}

for (const man of people){
    console.log(`${man.name} is ${man.age} years old`)
}
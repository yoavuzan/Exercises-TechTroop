function findDuplicates(arr) {
    const counter = {};
    for (let element of arr) {
        if (counter[element]) {
            return "there is a duplicate";
        } else {
            counter[element] = 1;
        }
    }
    return "there is no duplicate";
}

console.log(findDuplicates([1,2,2]));
console.log(findDuplicates([1,2]));
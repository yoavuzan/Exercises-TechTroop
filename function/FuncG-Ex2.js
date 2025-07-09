function removeSpecialCharacters(inputString) {
  return inputString
    .replace(/[,"'.?!;]/g, "")
    .toLowerCase()
    .split(" ");
}
const story =
  "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage.";

const wordCounts = removeSpecialCharacters(story).reduce(function (dic, word) {
  dic[word] = dic[word] ? dic[word] + 1 : 1;
  return dic;
}, {});

console.log(wordCounts);

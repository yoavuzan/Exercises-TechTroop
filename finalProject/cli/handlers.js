import AutoCompleteTrie from "../src/AutoCompleteTrie.js";

const dic = new AutoCompleteTrie();

export function handleCompleteCommand(prefix) {
  let print = `Suggestions for '${prefix}': `;
  const suggestions = dic.predictWords(prefix);
  if (suggestions.length === 0) {
    print += "(none)";
  } else {
    print += suggestions.join(" ");
  }
  console.log(print);
}

export function handleFindCommand(word) {
  if (dic.findWord(word)) {
    console.log(`There is '${word}' in the dictionary.`);
  } else {
    console.log(`Sorry, could not find the word: '${word}'.`);
  }
}

export function handleHelpCommand() {
  console.log("Commands:");
  console.log("add <word>        - Add word to dictionary");
  console.log("find <word>       - Check if word exists");
  console.log("complete <prefix> - Get completions");
  console.log("help              - Show this message");
  console.log("exit              - Quit program");
}

export function handleAddCommand(word) {
  dic.addWord(word);
  console.log(`Added '${word}' to the dictionary.`);
}
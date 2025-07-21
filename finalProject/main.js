import readline from "readline";
import AutoCompleteTrie from "./AutoCompleteTrie.js";

const dic = new AutoCompleteTrie();

function handleCompleteCommand(prefix) {
  let print = `Suggestions for '${prefix}': `;
  const suggestions = dic.predictWords(prefix);
  if (suggestions.length === 0) {
    print += "(none)";
  } else {
    print += suggestions.join(" ");
  }
  console.log(print);
}

function handleFindCommand(word) {
  if (dic.findWord(word)) {
    console.log(`There is '${word}' in the dictionary.`);
  } else {
    console.log(`Sorry, could not find the word: '${word}'.`);
  }
}

function handleHelpCommand() {
  console.log("Commands:");
  console.log("add <word>        - Add word to dictionary");
  console.log("find <word>       - Check if word exists");
  console.log("complete <prefix> - Get completions");
  console.log("help              - Show this message");
  console.log("exit              - Quit program");
}

function executeCommand(command, word) {
  switch (command) {
    case "add":
      if (!word) throw new Error("You must provide a word to add.");
      dic.addWord(word);
      console.log(`Added '${word}' to the dictionary.`);
      break;
    case "complete":
      if (!word) throw new Error("You must provide a prefix.");
      handleCompleteCommand(word);
      break;
    case "find":
      if (!word) throw new Error("You must provide a word to find.");
      handleFindCommand(word);
      break;
    case "help":
      handleHelpCommand();
      break;
    case "exit":
      console.log("Goodbye!");
      break;
    default:
      console.log("Unknown command. Type 'help' to see available commands.");
  }
}

function checkWord(command, word) {
  if (command !== "help" && command !== "exit" && !word) {
    throw new Error("Invalid input. Type 'help' to see usage.");
  }
}

// ===== MAIN LOOP =====
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("=== AutoComplete Trie Console ===");

function promptLoop() {
  rl.question("Please insert your command:\n", (input) => {
    const [command, word] = input.trim().split(" ");

    if (command === "exit") {
      rl.close();
      console.log("Goodbye!");
      return;
    }

    try {
      checkWord(command, word);
      executeCommand(command, word);
    } catch (err) {
      console.log(err.message);
    }

    promptLoop(); // Repeat
  });
}

promptLoop();

// === FOR TESTS ====
export {
  handleCompleteCommand,
  handleFindCommand,
  handleHelpCommand,
  executeCommand,
};

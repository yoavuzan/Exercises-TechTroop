import readline from "readline";
import {
  handleCompleteCommand,
  handleFindCommand,
  handleHelpCommand,
  handleAddCommand
} from "./handlers.js";

function executeCommand(command, word) {
  switch (command) {
    case "add":
      handleAddCommand(word);
      break;
    case "complete":
      handleCompleteCommand(word);
      break;
    case "find":
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
  const requiredWordCommands = ["add", "complete", "find"];

  if (requiredWordCommands.includes(command) && !word) {
    throw new Error(`You must provide a word for the '${command}' command.`);
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
// ==== For Tests ===
export { checkWord, executeCommand, promptLoop };

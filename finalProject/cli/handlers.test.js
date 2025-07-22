import { jest } from '@jest/globals';
import {
  handleAddCommand,
  handleCompleteCommand,
  handleFindCommand,
  handleHelpCommand,
} from "./handlers.js";

describe("Handlers", () => {
  // Mock console.log before each test
  beforeEach(() => {
    jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    console.log.mockRestore();
  });

  test("handleAddCommand adds a word and logs confirmation", () => {
    handleAddCommand("hello");
    expect(console.log).toHaveBeenCalledWith("Added 'hello' to the dictionary.");
  });

  test("handleFindCommand logs found word message", () => {
    handleAddCommand("testword");
    handleFindCommand("testword");
    expect(console.log).toHaveBeenCalledWith("There is 'testword' in the dictionary.");
  });

  test("handleFindCommand logs not found message", () => {
    handleFindCommand("nonexistent");
    expect(console.log).toHaveBeenCalledWith("Sorry, could not find the word: 'nonexistent'.");
  });


  test("handleHelpCommand logs all commands", () => {
    handleHelpCommand();

    expect(console.log).toHaveBeenCalledWith("Commands:");
    expect(console.log).toHaveBeenCalledWith("add <word>        - Add word to dictionary");
    expect(console.log).toHaveBeenCalledWith("find <word>       - Check if word exists");
    expect(console.log).toHaveBeenCalledWith("complete <prefix> - Get completions");
    expect(console.log).toHaveBeenCalledWith("help              - Show this message");
    expect(console.log).toHaveBeenCalledWith("exit              - Quit program");
  });
});

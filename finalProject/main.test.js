import AutoCompleteTrie from './AutoCompleteTrie.js';
import { jest } from '@jest/globals';


import {
  handleCompleteCommand,
  handleFindCommand,
  handleHelpCommand,
  executeCommand,
} from './main.js'; 

describe('CLI command logic', () => {
  let trie;
  let consoleSpy;

  beforeEach(() => {
    trie = new AutoCompleteTrie();
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('add command adds word to dictionary', () => {
    executeCommand('add', 'cat');
    expect(consoleSpy).toHaveBeenCalledWith(`Added 'cat' to the dictionary.`);
  });

  test('find command finds existing word', () => {
    executeCommand('add', 'dog');
    executeCommand('find', 'dog');
    expect(consoleSpy).toHaveBeenCalledWith(`There is 'dog' in the dictionary.`);
  });

  test('find command reports missing word', () => {
    executeCommand('find', 'banana');
    expect(consoleSpy).toHaveBeenCalledWith(`Sorry, could not find the word: 'banana'.`);
  });

  test('complete command suggests words', () => {
    executeCommand('add', 'app');
    executeCommand('add', 'apple');
    executeCommand('add', 'application');
    executeCommand('complete', 'app');
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("Suggestions for 'app':"));
  });

  test('help command shows help text', () => {
    executeCommand('help');
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Commands:'));
  });

  test('exit command prints Goodbye', () => {
    executeCommand('exit');
    expect(consoleSpy).toHaveBeenCalledWith('Goodbye!');
  });

  test('invalid command prints unknown message', () => {
    executeCommand('foo');
    expect(consoleSpy).toHaveBeenCalledWith("Unknown command. Type 'help' to see available commands.");
  });

  test('complete command with no prefix throws', () => {
    expect(() => executeCommand('complete')).toThrow('You must provide a prefix.');
  });

  test('add command with no word throws', () => {
    expect(() => executeCommand('add')).toThrow('You must provide a word to add.');
  });

  test('find command with no word throws', () => {
    expect(() => executeCommand('find')).toThrow('You must provide a word to find.');
  });
});

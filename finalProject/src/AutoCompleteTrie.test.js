import { jest } from '@jest/globals';
import AutoCompleteTrie from './AutoCompleteTrie.js';

describe('AutoCompleteTrie', () => {
  let trie;

  beforeEach(() => {
    trie = new AutoCompleteTrie();
  });

  test('addWord and findWord - single word', () => {
    trie.addWord('cat');
    expect(trie.findWord('cat')).toBe(true);
    expect(trie.findWord('car')).toBe(false);
  });

  test('addWord - overlapping words', () => {
    trie.addWord('car');
    trie.addWord('carbon');
    trie.addWord('cart');

    expect(trie.findWord('car')).toBe(true);
    expect(trie.findWord('carbon')).toBe(true);
    expect(trie.findWord('cart')).toBe(true);
    expect(trie.findWord('carb')).toBe(false);
  });

 



  test('findWord - partial words should return false', () => {
    trie.addWord('hello');
    expect(trie.findWord('hell')).toBe(false);
    expect(trie.findWord('hello')).toBe(true);
  });



  test('addWord - repeated word should still return true', () => {
    trie.addWord('repeat');
    trie.addWord('repeat');
    expect(trie.findWord('repeat')).toBe(true);
  });


});

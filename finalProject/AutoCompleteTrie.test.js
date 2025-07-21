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

  test('predictWords - basic prefixes', () => {
    trie.addWord('cat');
    trie.addWord('car');
    trie.addWord('carbon');
    trie.addWord('cart');

    expect(trie.predictWords('car').sort()).toEqual(['car', 'carbon', 'cart'].sort());
    expect(trie.predictWords('cat')).toEqual(['cat']);
  });

  test('predictWords - no matches', () => {
    trie.addWord('dog');
    trie.addWord('door');

    expect(() => trie.predictWords('z')).toThrow('z not in dictionary');
  });

  test('findWord - partial words should return false', () => {
    trie.addWord('hello');
    expect(trie.findWord('hell')).toBe(false);
    expect(trie.findWord('hello')).toBe(true);
  });

  test('predictWords - empty prefix should return all words', () => {
    trie.addWord('a');
    trie.addWord('ab');
    trie.addWord('abc');

    const predictions = trie.predictWords('');
    expect(predictions.sort()).toEqual(['a', 'ab', 'abc'].sort());
  });

  test('addWord - repeated word should still return true', () => {
    trie.addWord('repeat');
    trie.addWord('repeat');
    expect(trie.findWord('repeat')).toBe(true);
  });

  test('_getRemainingTree throws for missing prefix', () => {
    trie.addWord('hi');
    expect(() => trie.predictWords('hello')).toThrow('hello not in dictionary');
  });
});

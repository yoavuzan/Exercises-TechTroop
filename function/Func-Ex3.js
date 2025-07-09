function checkExists(arr, num) {
  for (const n of arr) {
    if (n === num) {
      return true;
    }
  }
  return false;
}
console.log(checkExists([1, 2, 3], 2));
console.log(checkExists([1, 2, 3], 5));

function counrVowels(str) {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "o" ||
      char === "e" ||
      char === "u" ||
      char === "i"
    ) {
      count++;
    }
  }
  return count;
}
counrVowels("apnacollege");

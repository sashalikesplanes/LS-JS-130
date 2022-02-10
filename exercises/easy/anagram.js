class Anagram {
  constructor(word) {
    this.targetWord = word.toLowerCase();
    this.targetSortedArr = this.targetWord.split("").sort();
  }

  match(arrOfWords) {
    console.log(arrOfWords);
    const anagrams = [];
    arrOfWords.forEach((word) => {
      const wordLower = word.toLowerCase();
      if (wordLower === this.targetWord) return;
      if (wordLower.length !== this.targetWord.length) return;

      let isMatch = true;
      wordLower
        .split("")
        .sort()
        .forEach((char, idx) => {
          if (char !== this.targetSortedArr[idx]) {
            isMatch = false;
          }
        });
      if (isMatch) anagrams.push(word);
      // If lower case word has all the same letters as target add to anagrams
      // and the word is not the target word
    });
    return anagrams;
  }
}

module.exports = Anagram;

const test = new Anagram("ant");
test.match(["tan", "stand", "at"]);

class Scrabble {
  static POINTS_PER_LETTER = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
    l: 1,
    n: 1,
    r: 1,
    s: 1,
    t: 1,
    d: 2,
    g: 2,
    b: 3,
    c: 3,
    m: 3,
    p: 3,
    f: 4,
    h: 4,
    v: 4,
    w: 4,
    y: 4,
    k: 5,
    j: 8,
    x: 8,
    q: 10,
    z: 10,
  };

  constructor(word) {
    if (word) {
      this.word = word.toLowerCase();
    } else {
      this.word = "";
    }
  }

  static score(word) {
    if (!word) return 0;
    word = word.toLowerCase();
    let sum = 0;
    word.split("").forEach((char) => {
      sum += Scrabble.POINTS_PER_LETTER[char] || 0;
    });
    return sum;
  }
  score() {
    return Scrabble.score(this.word);
  }
}

module.exports = Scrabble;

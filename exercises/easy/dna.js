class DNA {
  constructor(sequence) {
    this.sequence = sequence;
  }

  hammingDistance(sequence) {
    // Iterate over both sequences stopping at the shortest length
    // Check if at that position the nucleic acid is different
    //  If yes increment sum
    // Return sum
    let sum = 0;
    for (
      let pos = 0;
      pos < this.sequence.length && pos < sequence.length;
      pos++
    ) {
      if (sequence[pos] !== this.sequence[pos]) sum += 1;
    }
    return sum;
  }
}

module.exports = DNA;

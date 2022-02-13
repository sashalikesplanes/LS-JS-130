class BeerSong {
  static verse(number) {
    if (number === 0) {
      return (
        "No more bottles of beer on the wall, no more bottles of beer.\n" +
        "Go to the store and buy some more, 99 bottles of beer on the wall.\n"
      );
    } else if (number === 1) {
      return (
        "1 bottle of beer on the wall, 1 bottle of beer.\n" +
        "Take it down and pass it around, no more bottles of beer on the wall.\n"
      );
    } else {
      return (
        `${number} bottles of beer on the wall, ${number} bottles of beer.\n` +
        `Take one down and pass it around, ${
          number - 1
        } bottles of beer on the wall.\n`
      );
    }
  }
}

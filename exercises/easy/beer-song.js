class BeerSong {
  static verse(number) {
    let verse = "";

    if (number === 0) {
      verse +=
        "No more bottles of beer on the wall, no more bottles of beer.\n";
    } else if (number === 1) {
      verse += "1 bottle of beer on the wall, 1 bottle of beer.\n";
    } else {
      verse += `${number} bottles of beer on the wall, ${number} bottles of beer.\n`;
    }

    if (number === 0) {
      verse +=
        "Go to the store and buy some more, 99 bottles of beer on the wall.\n";
    } else if (number === 1) {
      verse +=
        "Take it down and pass it around, no more bottles of beer on the wall.\n";
    } else if (number === 2) {
      verse += `Take one down and pass it around, 1 bottle of beer on the wall.\n`;
    } else {
      verse += `Take one down and pass it around, ${
        number - 1
      } bottles of beer on the wall.\n`;
    }

    return verse;
  }

  static verses(startVerse, endVerse) {
    let verses = "";
    for (let verse = startVerse; verse > endVerse; verse--) {
      verses += BeerSong.verse(verse) + "\n";
    }
    verses += BeerSong.verse(endVerse);
    return verses;
  }

  static lyrics() {
    return this.verses(99, 0);
  }
}

module.exports = BeerSong;

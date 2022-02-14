class Robot {
  static usedNames = [];
  static VALID_LETTERS = "ABCDEFGHIJKLMNPQRSTUVWXYZ";
  static VALID_NUMBERS = "0123456789";
  constructor() {
    this.ownName = Robot.getUniqueName();
  }

  name() {
    return this.ownName;
  }

  static getUniqueName() {
    let uniqueName = Robot.getRandomName();
    while (Robot.usedNames.includes(uniqueName)) {
      uniqueName = Robot.getRandomName();
    }
    Robot.usedNames.push(uniqueName);
    return uniqueName;
  }

  static getRandomName() {
    return (
      Robot.getRandomChars(2, Robot.VALID_LETTERS) +
      Robot.getRandomChars(3, Robot.VALID_NUMBERS)
    );
  }

  static getRandomChars(number, validChars) {
    let chars = "";
    for (let i = 0; i < number; i++) {
      chars += this.getRandomChar(validChars);
    }
    return chars;
  }

  static getRandomChar(validChars) {
    const randomChoice = Math.floor(Math.random() * validChars.length);
    return validChars[randomChoice];
  }
}

module.exports = Robot;

class Robot {
  static usedNames = [];
  constructor() {
    this.name = Robot.getUniqueName();
  }

  name() {
    return this.name;
  }

  static getUniqueName() {
    let uniqueName = Robot.getRandomName();
    while (Robot.usedNames.includes(uniqueName)) {
      uniqueName = Robot.getRandomName();
    }
    return uniqueName;
  }
}

module.exports = Robot;

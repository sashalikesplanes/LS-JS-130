class Triangle {
  constructor(...sides) {
    this.sides = sides;
    this.validateSides(sides);
  }

  kind() {
    if (this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2]) {
      return "equilateral";
    } else if (
      this.sides[0] === this.sides[1] ||
      this.sides[1] === this.sides[2] ||
      this.sides[2] === this.sides[0]
    ) {
      return "isosceles";
    } else {
      return "scalene";
    }
  }

  validateSides(sides) {
    sides.forEach((side) => {
      if (side <= 0) throw Error;
    });
    // Check if longest side is shorter than the other two sides
    const longestSide = Math.max(...sides);
    const sumOfSides = sides.reduce((sum, side) => sum + side);
    if (sumOfSides <= longestSide * 2) throw Error;
  }
}

module.exports = Triangle;

class CustomSet {
  constructor(elements) {
    this.elements = [];
    elements.forEach((element) => {
      this.add(element);
    });
  }
  isEmpty() {
    return this.elements.length === 0;
  }
  contains(element) {
    return this.elements.includes(element);
  }
  isSubset(set) {
    // return Bool
  }
  isDisjoint(set) {
    // return Bool
  }
  isSame(set) {
    // return Bool
  }
  add(element) {
    if (!this.elements.includes(element)) {
      this.elements.push(element);
    }
    return this;
  }
  intersection(set) {
    // return new CustomSet
  }
  difference(set) {
    // return new CustomSet
  }
  union(set) {
    // return new CustomSet
  }
}

class CustomSet {
  constructor(elements) {
    this.elements = [];
    if (!Array.isArray(elements)) return this;
    elements.forEach((element) => {
      this.add(element);
    });
  }
  size() {
    return this.elements.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  contains(element) {
    return this.elements.includes(element);
  }
  isSubset(set) {
    return this.elements.every((element) => set.contains(element));
  }
  isDisjoint(set) {
    return this.elements.every((element) => !set.contains(element));
  }
  isSame(set) {
    if (this.size() !== set.size()) return false;
    return this.elements.every(
      (element, index) => element === set.elements[index]
    );
  }
  add(element) {
    if (!this.elements.includes(element)) {
      this.elements.push(element);
      this.elements.sort((a, b) => a - b);
    }
    return this;
  }
  intersection(set) {
    return new CustomSet(
      this.elements.filter((element) => set.contains(element))
    );
  }
  difference(set) {
    return new CustomSet(
      this.elements.filter((element) => !set.contains(element))
    );
  }
  union(set) {
    return new CustomSet([...this.elements, ...set.elements]);
  }
}

module.exports = CustomSet;

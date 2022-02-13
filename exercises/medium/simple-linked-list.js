class Element {
  constructor(value, nextElement) {
    this.value = value;
    this.nextElementPointer = nextElement || null;
  }

  datum() {
    return this.value;
  }

  next() {
    return this.nextElementPointer;
  }

  isTail() {
    return this.nextElementPointer === null;
  }
}

class SimpleLinkedList {
  constructor() {
    this.firstElementPointer = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  head() {
    return this.firstElementPointer;
  }

  size() {
    return this.length;
  }

  push(value) {
    this.firstElementPointer = new Element(value, this.firstElementPointer);
    this.length += 1;
  }
  peek() {
    if (!this.firstElementPointer) return null;
    return this.firstElementPointer.datum();
  }
  pop() {
    if (!this.firstElementPointer) return null;
    const value = this.firstElementPointer.datum();
    this.firstElementPointer = this.firstElementPointer.next();
    this.length -= 1;
    return value;
  }

  toArray() {
    const outArray = [];
    while (this.size() > 0) {
      outArray.push(this.pop());
    }
    return outArray;
  }

  static fromArray(array) {
    // reverse array, add item one at a time
    const newLinkedList = new SimpleLinkedList();
    if (!array) return newLinkedList;
    [...array].reverse().forEach((element) => {
      newLinkedList.push(element);
    });
    return newLinkedList;
  }

  reverse() {
    const reversedLinkedList = new SimpleLinkedList();
    let currentElementPointer = this.head();
    do {
      reversedLinkedList.push(currentElementPointer.datum());
      currentElementPointer = currentElementPointer.next();
    } while (currentElementPointer !== null);
    return reversedLinkedList;
  }
}

module.exports = { Element, SimpleLinkedList };

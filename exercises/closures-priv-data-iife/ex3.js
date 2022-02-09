function newStack() {
  const stack = [];
  return {
    push(value) {
      stack.push(value);
    },
    pop() {
      return stack.pop();
    },
    printStack() {
      stack.forEach((value) => console.log(value));
    },
  };
}

const stack = newStack();
console.log(stack.stack);
stack.push(1);
stack.push(2);
stack.push(4);
stack.printStack();
console.log(stack.pop());

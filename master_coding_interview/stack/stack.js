class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      let holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) {
      return null;
    }
    if (this.top === this.bottom) {
      let holdingPointer = this.top;
      this.top = null;
      this.bottom = null;
      this.length--;
      holdingPointer.next = null;
      return holdingPointer;
    }
    let holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    holdingPointer.next = null;
    return holdingPointer;
  }
  isEmpty() {
    return this.length === 0;
  }
}

module.exports = {
  Stack,
  Node,
};

// const myStack = new Stack();
// myStack.push("google");
// myStack.push("Udemy");
// myStack.push("Discord");
// myStack.pop();

// console.log(myStack.isEmpty());

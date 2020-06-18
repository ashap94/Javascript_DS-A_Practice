class DoublyLinkedNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }

  removeBindings() {
    if (this.prev !== null) {
      this.prev.next = this.next;
    }
    if (this.next !== null) {
      this.next.prev = this.prev;
    }
    this.prev = null;
    this.next = null;
    return this;
  }
}

/*

regular queue needs to be a queue that just keeps storing numbers

max needs to be a stack, with a reference to the first node, b/c that signifies the node in the stack with the greatest value

refactor code below to be a stack with properties stated above, and make nodes be singly linked nodes with a stack behavior
*/

class MaxStack {
  // node in front will always be greatest
  constructor() {
    this.front = null;
    this.back = null;
    this.length = 0;
  }

  add(value) {
    const newNode = new DoublyLinkedNode(value);
    if (this.isEmpty()) {
      this.front = newNode;
      this.back = newNode;
      this.length++;
      return this;
    } else {
      let holdingPointer = this.back;
      this.back = newNode;
      this.back.prev = holdingPointer;
      holdingPointer.next = this.back;
      this.length++;
      return this;
    }
  }

  removeBack() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    } else if (this.length === 1) {
      let holdingPointer = this.back;
      this.back = null;
      this.front = null;
      this.length--;
      holdingPointer.removeBindings();
      return holdingPointer;
    } else {
      let holdingPointer = this.back;
      this.back = this.back.prev;
      holdingPointer.removeBindings();
      this.length--;
      return holdingPointer;
    }
  }

  removeMax() {
    if (this.length === 0) {
      throw new Error("Stack is empty, cannot process request.");
    } else if (this.length === 1) {
      return this.removeBack();
    } else {
      let holdingPointer = this.front;
      this.front = holdingPointer.next;
      holdingPointer.removeBindings();
      this.length--;

      return holdingPointer;
    }
  }

  isEmpty() {
    return this.length === 0 ? true : false;
  }

  getBack() {
    return this.length !== 0 ? this.back.value : null;
  }

  maxValue() {
    return this.length !== 0 ? this.front.value : null;
  }
}

module.exports = {
  MaxStack,
};

const max = new MaxStack();

// max.add(4);
// max.add(5);
// max.add(6);
// max.removeBack();
// max.removeBack();
// max.removeBack();

// console.log(max.getBack());

// console.log(max.isEmpty());

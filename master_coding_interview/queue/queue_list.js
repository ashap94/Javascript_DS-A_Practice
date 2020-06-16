class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.length === 0 ? null : this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.last = newNode;
      this.first = newNode;
      this.length++;
      return this;
    } else {
      let holdingPointer = this.last;
      this.last = newNode;
      holdingPointer.next = this.last;
      this.length++;
      return this;
    }
  }

  dequeue() {
    if (this.length === 0) {
      throw new Error("Queue is empty");
    } else if (this.length === 1) {
      let holdingPointer = this.first;
      this.first = null;
      this.last = null;
      this.length--;
      return holdingPointer.value;
    } else {
      let holdingPointer = this.first;
      this.first = this.first.next;
      this.length--;
      return holdingPointer.value;
    }
  }

  isEmpty() {
    return this.length === 0 ? true : false;
  }
}

module.exports = {
  Queue,
  Node,
};

// const queue = new Queue();
// queue.enqueue(3);

// queue.enqueue(4);
// console.log(queue.dequeue());
// console.log(queue.dequeue());

// queue.enqueue(5);
// console.log(queue.dequeue());

// console.log(queue);

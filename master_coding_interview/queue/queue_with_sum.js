class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class QueueWithSum {
  constructor(limit) {
    this.first = null;
    this.last = null;
    this.length = 0;
    this.limit = limit;
    this.sum = 0;
  }

  peek() {
    return this.length === 0 ? null : this.first;
  }

  enqueue(value) {
    if (typeof value !== "number") {
      throw new Error("Invalid input, must be a number!");
    }
    if (!this.limit) {
      throw new Error("Need to provide a limit for QueueWithSum instance");
    }
    const newNode = new Node(value);

    if (this.limitReached()) {
      this.dequeue();
      let holdingPointer = this.last;
      this.last = newNode;
      holdingPointer.next = this.last;
      this.sum += value;
      this.length++;
      return this;
    } else if (this.length === 0) {
      this.last = newNode;
      this.first = newNode;
      this.sum += value;
      this.length++;
      return this;
    } else {
      let holdingPointer = this.last;
      this.last = newNode;
      holdingPointer.next = this.last;
      this.sum += value;
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
      this.sum -= holdingPointer.value;
      this.length--;
      return holdingPointer.value;
    } else {
      let holdingPointer = this.first;
      this.first = this.first.next;
      this.sum -= holdingPointer.value;
      this.length--;
      return holdingPointer.value;
    }
  }

  isEmpty() {
    return this.length === 0 ? true : false;
  }

  limitReached() {
    return this.length === this.limit ? true : false;
  }
}

module.exports = {
  QueueWithSum,
};

// const queue = new QueueWithSum(2);
// queue.enqueue(3);

// queue.enqueue(7);
// // queue.dequeue();
// queue.enqueue(5);
// queue.enqueue(4);
// console.log(queue.limitReached());
// console.log(queue);

// queue.enqueue(4);
// console.log(queue.dequeue());
// console.log(queue.dequeue());

// queue.enqueue(5);
// console.log(queue.dequeue());

const { MaxStack } = require("./max_stack");
const { Queue } = require("./queue_list");

/*
    MaxStack
        front
        back
        length

      add
      removeBack
      isEmpty


    Queue
        first
        last
        length

      peek
      enqueue
      dequeue
      isEmpty
*/

class QueueWithMax {
  constructor() {
    this.max = new MaxStack();
    this.queue = new Queue();
  }

  enqueue(value) {
    this.queue.enqueue(value);
    // process
    while (!this.max.isEmpty() && this.max.getBack() < value) {
      this.max.removeBack();
    }
    this.max.add(value);
    return this;
  }

  sameValue() {
    // is first item in queue the same value as front item of bi-directional stack
    return this.queue.peek().value === this.max.maxValue();
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    } else if (this.sameValue()) {
      this.max.removeMax();
      this.queue.dequeue();
      return this;
    } else {
      this.queue.dequeue();
      return this;
    }
  }

  isEmpty() {
    return this.queue.isEmpty();
  }

  maxValue() {
    return !this.max.isEmpty() ? this.max.maxValue() : null;
  }
}

const queue = new QueueWithMax();
queue.enqueue(5);
queue.enqueue(7);
queue.enqueue(6);
queue.enqueue(8);
queue.dequeue();

console.log(queue);

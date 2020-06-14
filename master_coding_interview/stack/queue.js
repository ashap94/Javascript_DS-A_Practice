const { Stack, Node } = require("./stack");

class Queue {
  constructor() {
    // stack1 is used to push all elements inside structure
    this.stack1 = new Stack();
    // stack2 is the actual representation of the queue and is ordered in the manner that queues are supposed to be represented
    this.stack2 = new Stack();
    this.length = 0;
  }

  enqueue(value) {
    this.stack1.push(value);
    this.length += 1;
    return this;
  }

  flush() {
    console.log("FLUSHING ALL NODES INTO STACK2");
    while (!this.stack1.isEmpty()) {
      this.stack2.push(this.stack1.pop().value);
    }
    return this;
  }

  dequeue() {
    if (!this.stack2.isEmpty()) {
      this.length -= 1;
      return this.stack2.pop();
    }

    this.flush();

    if (this.stack2.isEmpty()) {
      return null;
    } else {
      this.length -= 1;
      return this.stack2.pop();
    }
  }
}

const myQueue = new Queue();
myQueue.enqueue(1).enqueue(2).enqueue(3).enqueue(4).enqueue(5);
console.log(myQueue.dequeue());
myQueue.enqueue(6).enqueue(7);
console.log(myQueue);

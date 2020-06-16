// queue utilizing an array of fixed length
class Queue {
  constructor(size) {
    this.a = new Array(size);
    this.length = 0;
    this.front = 0;
    this.back = 0;
  }

  enqueue(value) {
    if (this.length === this.a.length) {
      throw new RangeError("Queue is full");
    }
    this.a[this.back] = value;
    this.back = (this.back + 1) % this.a.length;
    this.length++;
    return this;
  }

  dequeue() {
    if (this.length === 0) {
      throw new RangeError("Queue is empty");
    }
    let front = this.a[this.front];
    this.front = (this.front + 1) % this.a.length;
    this.length--;
    return front;
  }

  checkFront() {
    if (this.length === 0) {
      throw new RangeError("Queue is empty");
    }
    return this.a[this.front];
  }
}

const queue = new Queue(4);
queue.enqueue(4);
queue.enqueue(3);
queue.enqueue(6);
queue.enqueue(8);
// queue.enqueue(8);
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();

console.log(queue);

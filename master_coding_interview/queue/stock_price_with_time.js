const { Queue } = require("./queue_list");

class Price {
  constructor(price, day) {
    this.price = price;
    this.day = day;
  }
}

class StockPriceWithTime {
  constructor(window) {
    this.window = window;
    this.queue = new Queue();
  }

  add(price, day) {
    while (
      !this.queue.isEmpty() &&
      this.queue.peek().value.day < day - this.window + 1
    ) {
      this.queue.dequeue();
    }
    this.queue.enqueue(new Price(price, day));
  }

  getMax() {
    return this.iterate();
  }

  iterate() {
    let currentNode = this.queue.first;
    let max = null;
    while (currentNode !== null) {
      console.log("ITERATE", currentNode.value);
      max = Math.max(currentNode.value.price, max);
      currentNode = currentNode.next;
    }
    return max ? max : null;
  }
}

const stocks = new StockPriceWithTime(3);
stocks.add(32, 1);
stocks.add(45, 1);
stocks.add(37, 2);
stocks.add(42, 3);
// stocks.add(40, 4);

console.log("HERE'S MAX", stocks.getMax());

console.log(stocks.queue);

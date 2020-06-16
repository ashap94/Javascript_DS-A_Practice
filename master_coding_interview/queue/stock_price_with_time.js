const { Queue } = require("./queue_list");

class Price {
  constructor(price, day) {
    this.price = price;
    this.day = day;
  }
}

class StockPriceWithTime {
  constructor(window) {
    this.first = null;
    this.last = null;
    this.window = window;
    this.queue = new Queue();
  }
}

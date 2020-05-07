// Level: Medium

// Coin Change Problem: Given a set of coin denominations, print out the different ways you can make a target amount. You can use as many coins of each denomination as you like.

// For example: If coins are [1,2,5] and the target is 5, output will be:

// [1,1,1,1,1]
// [1,1,1,2]
// [1,2,2]
// [5]

function printCoins(coins, target) {
  if (coins == null || coins.length == 0 || target <= 0) {
    return;
  }

  printCoinsHelper(coins, target, new Stack(), 0, 0);
}

function printCoinsHelper(coins, target, buffer, startIdx, sum) {
  if (sum > target) {
    return;
  }

  if (sum == target) {
    // print stack of coins utilizing reverse method
    console.log(buffer.reverse());
    return;
  }

  for (let i = startIdx; i < coins.length; i++) {
    // copy properties of buffer onto buffer copy, but not prototype
    const bufferCopy = Object.assign({}, buffer);
    // copy prototype reference to Stack blueprint onto bufferCopy
    Object.setPrototypeOf(bufferCopy, Stack.prototype);

    bufferCopy.push(coins[i]);
    printCoinsHelper(coins, target, bufferCopy, i, sum + coins[i]);
    bufferCopy.pop();
  }
}

class Stack {
  constructor() {
    this.data = [];
    this.top = 0;
  }

  push(value) {
    this.data[this.top] = value;
    this.top += 1;
  }

  length() {
    return this.top;
  }

  peek() {
    if (this.top == 0) {
      return "No Data in Stack";
    } else {
      return this.data[this.top - 1];
    }
  }

  isEmpty() {
    return this.length === 0;
  }

  pop() {
    if (this.isEmpty() === false) {
      this.top -= 1;
      return this.data.pop();
    }
  }

  print() {
    let top = this.top - 1;
    let data = [];

    while (top >= 0) {
      data.push(this.data[top]);
      top--;
    }

    return data;
  }

  reverse() {
    return this.data;
  }
}

// const stack = new Stack();
// stack.push(9)
// stack.push(8)
// console.log(stack.reverse());
// console.log(stack.pop())
// console.log(stack.length());
// console.log(stack.reverse());

const coins = [1, 2, 5];
const target = 5;

printCoins(coins, target);

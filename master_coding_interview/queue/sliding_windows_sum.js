const { QueueWithSum } = require("./queue_with_sum");

// Given an array of integers A, find the sum of each sliding window of size K.

function slidingWindowSum(arr, size) {
  /*
    arr is array of numbers
    size is how big the queue could be before obtaining sum of all the nodes' data
  */

  const queue = new QueueWithSum(size);
  const sums = []; // sums of windows added here

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    queue.enqueue(num);
    if (queue.limitReached()) {
      sums.push(queue.sum);
    }
  }

  return sums;
}

const size = 3;
const arr = [1, 4, 3, 2, 5]; // => answer:  [8, 9, 10]

console.log(slidingWindowSum(arr, size));

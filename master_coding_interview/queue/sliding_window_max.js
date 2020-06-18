const { QueueWithMax } = require("./queue_with_max");

function slidingWindowMax(arr, k) {
  // k is length of window
  let queue = new QueueWithMax();
  let results = [];

  // first loop, populate queue until index is k
  for (let i = 0; i < k; i++) {
    let num = arr[i];
    queue.enqueue(num);
  }

  results.push(queue.maxValue());

  // second loop, populate rest of elements in array whilst dequeue'ing unused elements in window
  for (let i = k; i < arr.length; i++) {
    let num = arr[i];
    queue.dequeue();
    queue.enqueue(num);
    results.push(queue.maxValue());
  }

  return results;
}

const arr = [4, 6, 5, 2, 4, 7]; // => [6,6,5,7]
const k = 3;

console.log(slidingWindowMax(arr, k));

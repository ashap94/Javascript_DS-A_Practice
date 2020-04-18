// You are given a sorted array A and a target T. Return the index where T would be placed if inserted in order. For example,

// A = [1,2,4,5,6,8] and T = 3, return index 2
// A = [1,2,4,5,6,8] and T = 0, return index 0
// A = [1,2,4,5,6,8] and T = 4, return index 3.

function firstInsertionIndex(a, t) {
  let low = 0;
  let high = a.length - 1;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    if (a[mid] <= t) {
      if (mid === a.length - 1) {
        return a.length;
      }
      low = mid + 1;
    } else {
      if (mid === 0 || (mid > 0 && a[mid - 1] <= t)) {
        return mid;
      }
      high = mid - 1;
    }
  }

  return -1; // shouldn't happen, should be able to at least insert before min or after max indices
}

let a = [1, 2, 4, 5, 6, 8];

let t = 4;

console.log(firstInsertionIndex(a, t));

function findClosestValue(a, target) {
  let start = 0;
  let end = a.length - 1;
  let result = 0;

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    result = record(a, target, mid, result);
    if (a[mid] < target) {
      start = mid + 1;
    } else if (a[mid] > target) {
      end = mid - 1;
    } else {
      return mid;
    }
  }

  return result;
}

function record(a, target, p1, p2) {
  let p1Diff = Math.abs(a[p1] - target);
  let p2Diff = Math.abs(a[p2] - target);

  if (p1Diff < p2Diff) {
    return p1;
  } else if (p1Diff > p2Diff) {
    return p2;
  } else {
    return Math.min(p1, p2);
  }
}

let a = [2, 3, 5, 8, 9, 11];
let target = 9;

findClosestValue(a, target);

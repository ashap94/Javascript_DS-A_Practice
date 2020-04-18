// Given a sorted array that can contain duplicates, find the first occurrence of thetarget element.

// For example:A = [1,3,4,6,6,6,7] and Target = 6, return index 3.

function firstOccurence(a, t) {
  if (a == null || a.length == 0) {
    return -1;
  }

  let low = 0;
  let high = a.length - 1;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (a[mid] > t) {
      high = mid - 1;
    } else if (a[mid] < t) {
      low = mid + 1;
    } else {
      if (mid == 0 || (mid > 0 && a[mid - 1] !== t)) {
        return mid;
      } else {
        high = mid - 1;
      }
    }
  }

  return -1;
}

let a = [2, 3, 4, 5, 5, 6];
let t = 9;

console.log(firstOccurence(a, t));

// Given an array that is cyclically sorted, find the minimum element.

// A cyclically sortedarray is a sorted array rotated by some number of elements.

// Assume all elementsare unique.

// For example:A = [4,5,1,2,3], which is just [1,2,3,4,5] rotated by 2Result = index 2

function cyclicallySortedMin(a) {
  let start = 0;
  let end = a.length - 1;
  let pivot = a[end];

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (a[mid] <= pivot && (mid == 0 || a[mid - 1] > a[mid])) {
      return mid;
    } else if (a[mid] > pivot) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}

let arr = [4, 5, 6, 7, 0, 1, 2, 3];
cyclicallySortedMin(arr);

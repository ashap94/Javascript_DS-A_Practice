const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  // Split Array in into right and left
  let middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let merged = [];
  while (left.length > 0 && right.length > 0) {
    let nextItem = left[0] < right[0] ? left.shift() : right.shift();
    merged.push(nextItem);
  }

  return merged.concat(left, right);
}

const answer = mergeSort(numbers);
console.log(answer);

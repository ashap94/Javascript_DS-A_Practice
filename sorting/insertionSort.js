const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      swap(j, j - 1, array);
      j--;
    }
  }
  return array;
}

function swap(i, j, array) {
  let holdingPointer = array[j];
  array[j] = array[i];
  array[i] = holdingPointer;
}

insertionSort(numbers);
console.log(numbers);

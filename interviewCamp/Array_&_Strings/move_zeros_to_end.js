function moveZerosToEnd(a) {
  let boundry = a.length - 1;
  for (let i = a.length - 1; i >= 0; i--) {
    if (a[i] == 0) {
      swap(i, boundry, a);
      boundry--;
    }
  }
  return a;
}

function swap(left, right, array) {
  let rightEl = array[right];
  array[right] = array[left];
  array[left] = rightEl;
}

let array = [4, 2, 0, 1, 0, 3, 0];

moveZerosToEnd(array);

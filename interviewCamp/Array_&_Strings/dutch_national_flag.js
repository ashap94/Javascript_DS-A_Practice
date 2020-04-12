function dutchNationalFlag(a, pivot) {
  let lowBoundry = 0;
  let highBoundry = a.length - 1;

  let i = 0; // current index pointer variable;

  while (i <= highBoundry) {
    if (a[i] < pivot) {
      swap(i, lowBoundry, a);
      lowBoundry++;
      i++;
    } else if (a[i] > pivot) {
      swap(i, highBoundry, a);
      highBoundry--;
    } else {
      i++;
    }
  }

  return a;
}

function swap(left, right, array) {
  let rightEl = array[right];
  array[right] = array[left];
  array[left] = rightEl;
}

a = [5, 2, 4, 4, 6, 4, 4, 3];

console.log(dutchNationalFlag(a, 4));

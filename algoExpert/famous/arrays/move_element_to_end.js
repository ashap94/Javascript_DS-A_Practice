function moveElementToEnd(array, toMove) {
  // Write your code here.
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    if (array[right] === toMove) {
      right--;
    } else if (array[left] === toMove && array[right] !== toMove) {
      let leftHoldingPointer = array[left];
      array[left] = array[right];
      array[right] = leftHoldingPointer;
      left++;
      right--;
    } else {
      left++;
    }
  }

  return array;
}

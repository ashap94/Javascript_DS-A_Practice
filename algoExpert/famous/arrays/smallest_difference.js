function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let closest = Infinity;
  let closestPair = [];
  let i = 0;
  let j = 0;
  while (i !== arrayOne.length && j !== arrayTwo.length) {
    let difference = Math.abs(arrayOne[i] - arrayTwo[j]);
    if (difference < closest) {
      closest = difference;
      closestPair = [arrayOne[i], arrayTwo[j]];
    }
    if (arrayOne[i] < arrayTwo[j]) {
      i++;
    } else {
      j++;
    }
  }

  return closestPair;
}

// Do not edit the line below.
// exports.smallestDifference = smallestDifference;

function kadanesAlgorithm(array) {
  // Write your code here.
  let maxEndingHere = array[0];
  let maxSoFar = array[0];

  for (let i = 1; i < array.length; i++) {
    let sum = maxEndingHere + array[i];
    maxEndingHere = sum > array[i] ? sum : array[i];
    if (maxEndingHere > maxSoFar) {
      maxSoFar = maxEndingHere;
    }
  }

  return maxSoFar;
}

// Sample input: [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]
// Sample output: 19([1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1])

// Do not edit the line below.
// exports.kadanesAlgorithm = kadanesAlgorithm;

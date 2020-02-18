function fourNumberSum(array, targetSum) {
  let quadruplets = [];
  let pairSums = {};

  for (let i = 1; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let currentSum = array[i] + array[j];
      let difference = targetSum - currentSum;
      if (difference in pairSums) {
        for (const pair of pairSums[difference]) {
          quadruplets.push(pair.concat(array[i], array[j]));
        }
      }
    }
    for (let k = 0; k < i; k++) {
      let sum = array[k] + array[i];
      if (sum in pairSums) {
        pairSums[sum].push([array[k], array[i]]);
      } else {
        pairSums[sum] = [[array[k], array[i]]];
      }
    }
  }

  return quadruplets;
}

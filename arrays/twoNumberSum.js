function twoNumberSum(array, targetSum) {
  // Write your code here.
  let complement = {};

  for (const num of array) {
    let difference = targetSum - num;
    if (difference in complement) {
      return [difference, num];
    } else {
      complement[num] = true;
    }
  }

  return [];
}

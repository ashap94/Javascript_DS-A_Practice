// Intersecting Arrays

// Find the intersection of two arrays. An intersection would be the common elements that exists within both arrays. In this case, these elements should be unique!

// Example:

// const firstArray = [2, 2, 4, 1];  n

/*
  {
    4: false,
    2: false
  }

  map[el] => 

  Time: O(n + m)
  Space: O(n)

  [1]

*/

function findCommonElements(arr1, arr2) {
  let firstArr;
  let secondArr;

  if (arr1.length > arr2.length) {
    firstArr = arr2;
    secondArr = arr1;
  } else {
    firstArr = arr1;
    secondArr = arr2;
  }

  const map = {};

  secondArr.forEach((el) => (map[el] = true));

  const result = [];

  firstArr.forEach((el) => {
    if (el in map) {
      result.push(el);
      delete map[el];
    }
  });

  return result;
}

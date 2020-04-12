// Given an array with n marbles colored Red, White or Blue, sort them so that marbles of the same color are adjacent, with the colors in the order Red, White and Blue.
// Assume the colors are given as numbers - 0 (Red), 1 (White) and 2 (Blue).
// For example, if A = [1,0,1,2,1,0,1,2]
// Output = [0,0,1,1,1,1,2,2]

function redWhiteBlue(marbles) {
  let white = 1;
  let lowBoundry = 0;
  let highBoundry = marbles.length - 1;

  let i = 0; // current index pointer variable

  while (i <= highBoundry) {
    if (marbles[i] < white) {
      swap(i, lowBoundry, marbles);
      lowBoundry++;
      i++;
    } else if (marbles[i] > white) {
      swap(i, highBoundry, marbles);
      highBoundry--;
    } else {
      i++;
    }
  }

  return marbles;
}

function swap(left, right, array) {
  let leftEl = array[left];
  array[left] = array[right];
  array[right] = leftEl;
}

const a = [1, 0, 1, 2, 1, 0, 1, 2];

console.log(redWhiteBlue(a));

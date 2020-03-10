// TIME O(n^2) || SPACE O(1)
function longestPalindromicSubstring(string) {
  let currentLongest = [0, 1];
  for (let i = 1; i < string.length; i++) {
    let odd = getLongestPalindromeFrom(string, i - 1, i + 1);
    let even = getLongestPalindromeFrom(string, i - 1, i);
    let longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
    currentLongest =
      longest[1] - longest[0] > currentLongest[1] - currentLongest[0]
        ? longest
        : currentLongest;
  }

  return string.slice(currentLongest[0], currentLongest[1]);
}

function getLongestPalindromeFrom(string, leftIdx, rightIdx) {
  while (leftIdx >= 0 && rightIdx < string.length) {
    if (string[leftIdx] !== string[rightIdx]) break;
    leftIdx--;
    rightIdx++;
  }
  return [leftIdx + 1, rightIdx];
}

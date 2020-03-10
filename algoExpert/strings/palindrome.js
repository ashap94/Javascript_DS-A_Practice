function isPalindrome(string) {
  // Write your code here.
  return (
    string ===
    string
      .split("")
      .reverse()
      .join("")
  );
}

// other solution
// TIME O(n) || SPACE O(1)

function isPalindrome(string) {
  // Write your code here.
  let leftIdx = 0;
  let rightIdx = string.length - 1;
  while (leftIdx < rightIdx) {
    if (string[leftIdx] !== string[rightIdx]) return false;
    leftIdx++;
    rightIdx--;
  }
  return true;
}

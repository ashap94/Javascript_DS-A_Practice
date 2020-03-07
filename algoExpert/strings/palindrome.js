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

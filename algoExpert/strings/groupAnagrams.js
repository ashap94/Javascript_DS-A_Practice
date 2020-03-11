// SPACE O(WN)  ||  TIME O(W Nlog(N))
// W is length of array and N is length longest string
function groupAnagrams(words) {
  // Write your code here.
  let groups = {};
  for (const word of words) {
    let sorted = word
      .split("")
      .sort()
      .join("");
    if (sorted in groups) {
      groups[sorted].push(word);
    } else {
      groups[sorted] = [word];
    }
  }

  return Object.values(groups);
}

// Level: Medium

// Word Break Problem: Given a String S, which contains letters and no spaces, determine if you
// can break it into valid words. Return one such combination of words.
// You can assume that you are provided a dictionary of English words.

// For example:
// S = "ilikemangotango"

// Output:
// Return any one of these:
// "i like mango tango"
// "i like man go tan go"
// "i like mango tan go"
// "i like man go tango"

function wordBreak(s, dictionary) {
  const memo = new Array(s.length).fill("UNVISITED");
  const result = [];

  if (wordBreakHelper(s, dictionary, 0, memo, result)) {
    return result.join(" ");
  } else {
    return null;
  }
}

function wordBreakHelper(string, dictionary, startIdx, memo, result) {
  if (startIdx === string.length) {
    return true;
  }

  if (memo[startIdx] === "NOT_FOUND") {
    return false;
  }

  for (let i = startIdx; i < string.length; i++) {
    let substring = string.substring(startIdx, i + 1);
    if (dictionary.find((word) => word === substring)) {
      result.push(substring);
      if (wordBreakHelper(string, dictionary, i + 1, memo, result)) {
        return true;
      } else {
        result.pop();
        memo[i + 1] = "NOT_FOUND";
      }
    }
  }

  return false;
}

let s = "ilikemangotango";
let wordDict1 = ["i", "like", "mango", "tango"];
let wordDict2 = ["i", "like", "man", "tan", "go"];

console.log(wordBreak(s, wordDict2));

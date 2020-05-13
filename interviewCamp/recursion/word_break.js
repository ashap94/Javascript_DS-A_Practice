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

function wordBreak(s, wordDict) {
  // memo array, if index gets modified to NOT_FOUND, recursive call at index will return false to prevent further work done at that startIdx b/c it has already been determined that no substrings at that index will complete the complete segement of strings in the result
  let memo = new Array(s.length).fill("UNVISITED");
  let result = [];

  if (wordBreakHelper(s, wordDict, 0, result, memo)) {
    console.log(result);
    return;
  } else {
    return null;
  }
}

function wordBreakHelper(s, wordDict, startIdx, result, memo) {
  if (startIdx === s.length) {
    return true;
  }

  if (memo[startIdx] === "NOT_FOUND") {
    return false;
  }

  for (let i = startIdx; i < s.length; i++) {
    let substring = s.substring(startIdx, i + 1);
    if (wordDict.find((sub) => sub == substring)) {
      result.push(substring);
      if (wordBreakHelper(s, wordDict, i + 1, result, memo)) {
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

wordBreak(s, wordDict2);

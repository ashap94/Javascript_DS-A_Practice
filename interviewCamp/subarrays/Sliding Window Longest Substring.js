// Given a String, find the longest substring with unique characters.
// For example: "whatwhywhere" --> "atwhy"

function uniqueContiguousSubstring(string) {
  let start = 0;
  let end = 0;
  let longest = 1;
  let result = [start, end]; // 1st idx is start, 2nd will be end, based on what interviewer wants, either use these indices to slice or return as is
  let map = { [string[end]]: end }; // characters came accross with values being indices
  //   console.log("WHAT MAP LOOKS LIKE INITIALLY:  ", map);
  while (end < string.length - 1) {
    end++;
    let toAdd = string[end];
    // console.log("AT INDEX ", end, ": ", map);
    if (toAdd in map) {
      start = map[toAdd] + 1;
    }
    map[toAdd] = end;

    let currentLength = end + 1 - start;
    if (currentLength > longest) {
      longest = currentLength;
      result = [start, end];
    }
  }

  return string.slice(result[0], result[1] + 1);
}

let a = "whatwhywhere";
console.log(uniqueContiguousSubstring(a));

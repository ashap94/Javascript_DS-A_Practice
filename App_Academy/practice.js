// Part 1: Say that I gave you an array of length n, containing the numbers 1..n in jumbled order. "Sort" this array in O(n) time. You should be able to do this without looking at the input.

//   [4,2,3,6,5,1,8,7]

// Part 2: Say that I give you an array of length n with numbers in the range 1..N (N >= n). Sort this array in O(n + N) time. You may use O(N) memory.

// [7,8,2,55]

// [3,1,4,5,2]   ->   [1,2,3,4,5]
//  let largest = 5;

//  [3,1,4,5,2]
//   ^
//
//  result = []
//
//  [_,_,_,_,_]  O(N)
//

// Part 3: Say I give you an array of n strings, each of length k. I claim that, using merge sort, you can sort this in O(knlog(n)), since comparing a pair of strings takes O(k) time.

// I want you to beat that. Sort the strings in O(kn). Hint: do not compare any two strings. You may assume all strings contain only lowercase letters a..z without whitespace or punctuation.

// let alp = "";  length 26
//      0      1      2      3
//  ["bib", "bat", "cat", "car"]    ->   ["bat", "bib", "car", "cat"]
//    ^
//

//   [ "bib", "car", "bat", "cat"]

//    ["car", "bat", "cat", "bib"]

//  [ [], ["bat", "bib"], ["car", "cat"], [], [], [],[], [], [],[], [], [],[], [], [],[], [], [],[], [], [],[], [], [], [] ]

//   for k of str
//      for n arr
//
//
//
/*
  {
    car: 0,
    cat: 1,
    bat: 2,
    bib: 3
  }

*/

// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

// Example:

// [ row + 1, col ]
// [ row, col + 1 ]

// Input:
// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]

/*
  [ 1, 4, 5]
  [ 2, 7, 6]
  [  ,  , 7]
*/

// O(m*n)

/*
  create copy of 2d array
  for loop and check conditions
    if cell has neighbor at top and left
      replace cell with min sum magnitude of neighbor cells
    else if nieghbor only on top, replace cell with sum mag
    else 
      neighbor to left sum mag in copy matrix

  return cell at last index
  

*/

// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]

/*
  [ 1, 4, 5]
  [ 2, 7, 6]
  [  ,  , 7]
*/

function minSumPath(grid) {
  const memo = copyMatrix(grid);

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (row == 0 && col == 0) {
        continue;
      }
      if (col === 0) {
        memo[row][col] += memo[row - 1][col];
      } else if (row === 0) {
        memo[row][col] += memo[row][col - 1];
      } else {
        memo[row][col] += Math.min(memo[row - 1][col], memo[row][col - 1]);
      }
    }
  }

  return memo[memo.length - 1][memo[0].length - 1];
}

// Output: 7
// Explanation: Because the path 1→3→1→1→1 minimizes the sum.

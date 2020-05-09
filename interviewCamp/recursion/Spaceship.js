/* 
Technique: BacktrackingLevel: 

MediumMaze Problem: 

You are given a 2D array that represents a maze. It can have 2 values - 0 and 1.1 represents a wall and 0 represents a path.

The objective is to reach the bottom right corner, i.e, A[A.length-1][A.length-1]. You start fromA[0][0]. You can move in 4 directions - up, down, left and right. Find if a path exists to thebottom right of the maze.

For example, a path exists in the following maze:

0 1 1 1
0 1 1 1
0 0 0 0
1 1 1 0 

Questions to Clarify:

Q. How do you want the output?
A. Return ​true​ if a path exists.

Q. Does it matter if the end is a path or a wall?
A. It doesn't matter, the last element (​A[A.length-1][A.length-1]​) can be anything. You just have to get there.

Q. What if the array is empty or null?
A. Return ​false​ (no path exists).

Q. What if the array has just one element, e.g, ​{0}​ or ​{1}​.
A. Return ​true​, because we're already at the last element


*/

function pathExists(grid) {
  if (grid == null || grid.length == 0) return false;

  const memo = new Array(grid.length);

  for (let i = 0; i < grid.length; i++) {
    memo[i] = new Array(grid[0].length).fill("UNIVISITED");
  }

  return pathExistsHelper(grid, 0, 0, memo);
}

/*
[
  [0, 1, 0, 0, 0],
  [0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0],
  [0, 0, 0, 1, 0],
]
*/

function pathExistsHelper(grid, row, col, memo) {
  // oob = Out of Bounds
  if (oob(grid, row, col) || grid[row][col] == 1) {
    return false;
  }

  if (row == grid.length - 1 && col == grid[0].length - 1) {
    return true;
  }

  if (memo[row][col] == "VISITED" || memo[row][col] == "PATH_NOT_FOUND") {
    return false;
  }

  memo[row][col] = "VISITED";
  const dirs = [
    [row + 1, col],
    [row - 1, col],
    [row, col + 1],
    [row, col - 1],
  ];

  for (let i = 0; i < dirs.length; i++) {
    // allowed to instantiate row and col here b/c let and const allow for block only scope
    // will not persist outside of scope
    let row = dirs[i][0];
    let col = dirs[i][1];
    if (pathExistsHelper(grid, row, col, memo)) {
      return true;
    }
  }
  memo[row][col] = "PATH_NOT_FOUND";
  return false;
}

// oob = Out of Bounds

function oob(grid, row, col) {
  let rowThreshold = grid.length - 1;
  let colThreshold = grid[0].length - 1;

  if (row < 0 || row > rowThreshold || col < 0 || col > colThreshold) {
    return true;
  } else {
    return false;
  }
}

const grid = [
  [0, 1, 0, 0, 0],
  [0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0],
  [0, 0, 0, 1, 0],
];

pathExists(grid);

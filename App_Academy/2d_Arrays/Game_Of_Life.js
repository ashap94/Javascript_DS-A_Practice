// According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

// Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

// Any live cell with fewer than two live neighbors dies, as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population..
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
// Write a function to compute the next state (after one update) of the board given its current state. The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously.

// Example:

// Input:
// [
//   [0,1,0],
//   [0,0,1],
//   [1,1,1],
//   [0,0,0]
// ]
// Output:
// [
//   [0,0,0],
//   [1,0,1],
//   [0,1,1],
//   [0,1,0]
// ]

function cellularAutomaton(grid) {
  const newGrid = JSON.parse(JSON.stringify(grid));

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      // let cell = grid[row][col];
      cellAutomatonNeighborMutate(row, col, grid, newGrid);
    }
  }

  return JSON.stringify(newGrid);
}

function cellAutomatonNeighborMutate(row, col, grid, newGrid) {
  const cell = grid[row][col];
  let count = 0;

  switch (cell) {
    case 0:
      count = cellAutomatonNeighborCount(row, col, grid);
      if (count === 3) {
        newGrid[row][col] = 1;
      }

    case 1:
      count = cellAutomatonNeighborCount(row, col, grid);
      if (count < 2) {
        newGrid[row][col] = 0;
      } else if (count > 3) {
        newGrid[row][col] = 0;
      }
  }
}

function cellAutomatonNeighborCount(row, col, grid) {
  let count = 0;

  const rowThreshold = grid.length - 1;
  const colThreshold = grid[0].length - 1;

  const rows = [row - 1, row, row + 1];
  const cols = [col - 1, col, col + 1];

  for (let i = 0; i < rows.length; i++) {
    if (rows[i] < 0 || rows[i] > rowThreshold) {
      continue;
    }
    for (let j = 0; j < cols.length; j++) {
      if (cols[j] < 0 || cols[j] > colThreshold) {
        continue;
      }
      if (rows[i] === row && cols[j] === col) {
        continue;
      }

      if (grid[rows[i]][cols[j]] === 1) {
        count++;
      }
    }
  }

  return count;
}

let grid = [
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0],
];

// Output:
// [
//   [0,0,0],
//   [1,0,1],
//   [0,1,1],
//   [0,1,0]
// ]

cellularAutomaton(grid);

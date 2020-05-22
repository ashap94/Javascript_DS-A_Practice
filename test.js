function generateBooleanBoard() {
  let grid = new Array(9);
  for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array(10).fill(false);
  }
  return grid;
}

console.table(generateBooleanBoard());

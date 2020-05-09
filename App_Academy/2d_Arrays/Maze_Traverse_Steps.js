//Maze_Traverse_Steps

// Fahad is taking part in a maze competition. Initially, Fahad will stand in the top-left corner of the maze. The maze is a 2-D grid consisting of some blocked (represented as '#') and unblocked (represented as '.') cells. It is guaranteed that Fahad is standing in an unblocked cell. It is also guaranteed that the bottom-right cell is unblocked. Each cell of the maze is connected with it's right, left, top and bottom cells (if those cells exist). It takes 1 second to move from a cell to its adjacent cell. If Fahad can reach the bottom-right corner of the maze within k seconds he wins. Determine whether he can win. If he can, return the string Fahad wins. Otherwise, return the string Better luck next time.

/*

  [
    ['.', '.', '#', '#'],
    ['#', '.', '#', '#'],
    ['#', '.', '.', '.']
  ]

*/

function canWin(maze, k) {
  // let row = 0;
  // let col = 0;
  const steps = [];
  noOfStepsToTarget(maze, 0, 0, 0, steps);
  console.log("HERE IS steps: ", steps);

  const min = Math.min(...steps);
  // console.log('HERE IS steps: ', min)

  if (steps.length == 0) {
    console.log("Better luck next time");
  } else {
    const min = Math.min(...steps);
    if (min > k) {
      console.log("Better luck next time");
    } else {
      console.log("Fahad wins");
    }
  }
}

/*

  [
    ['.', '.', '#', '#'],
    ['#', '.', '#', '#'],
    ['#', '.', '.', '.']
  ]

*/

function noOfStepsToTarget(maze, row, col, count = 0, steps) {
  let rowThreshold = maze.length - 1;
  let colThreshold = maze[0].length - 1;

  if (row < 0 || row > rowThreshold || col < 0 || col > colThreshold) {
    return;
  }

  if (maze[row][col] != ".") {
    return;
  }

  if (row == rowThreshold && col == colThreshold) {
    steps.push(count);
    return count;
  }

  maze[row][col] = "#";
  count++;

  noOfStepsToTarget(maze, row + 1, col, count, steps);
  noOfStepsToTarget(maze, row - 1, col, count, steps);
  noOfStepsToTarget(maze, row, col + 1, count, steps);
  noOfStepsToTarget(maze, row, col - 1, count, steps);
}

const maze = [
  [".", ".", "#", "#"],
  ["#", ".", "#", "#"],
  ["#", ".", ".", "."],
];

const steps = 5;

canWin(maze, steps);

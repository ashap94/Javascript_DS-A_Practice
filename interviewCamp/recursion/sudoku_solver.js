// Level: Medium

// Sudoku Solver: Given a Sudoku board, find a solution. The board can have some squares filled out already. You have to fill the rest of the squares.

// (Rules of Sudoku are as follows: In each column, row and 3 x 3 square, you cannot have duplicate numbers. Also, only numbers 1-9 are allowed.)

// function solveSudoku(board) {
//   const checker = new BoardChecker(board);
//   console.log("WHAT DOES CHECKER LOOK LIKE BEFORE", checker);

//   checker.populateBooleanGrids();
//   console.log("WHAT DOES CHECKER LOOK LIKE AFTER", checker);

//   // const count = [0];
//   const success = solveSudokuHelper(board, 0, 0, checker);

//   if (success) {
//     console.table(board);
//     return;
//   } else {
//     // console.table("NO. OF ITERATIONS:  ", count)
//     console.table(board);
//     console.log("Board has no solution.");
//     return;
//   }
// }

// function solveSudokuHelper(board, row, col, checker) {
//   // count[0] += 1;
//   if (row === board.length) return true;

//   const next = nextSquare(row, col);

//   if (board[row][col] !== 0) {
//     solveSudokuHelper(board, next.i, next.j, checker);
//   }

//   for (let candidate = 1; candidate <= 9; candidate++) {
//     if (checker.canPlace(row, col, candidate)) {
//       checker.place(row, col, candidate);
//       board[row][col] = candidate;

//       if (solveSudokuHelper(board, next.i, next.j, checker)) {
//         return true;
//       }

//       checker.remove(row, col, candidate);
//       board[row][col] = 0;
//     }
//   }

//   return false;
// }

// class Pair {
//   constructor(i, j) {
//     this.i = i;
//     this.j = j;
//   }

//   // i() {
//   //   return this.i;
//   // }

//   // j() {
//   //   return this.j;
//   // }
// }

// function nextSquare(i, j) {
//   if (j === 8) {
//     return new Pair(i + 1, 0);
//   } else {
//     return new Pair(i, j + 1);
//   }
// }

// function booleanGrid() {
//   const grid = new Array(9).fill(new Array(9).fill(false));
//   return grid;
// }

// class BoardChecker {
//   constructor(board) {
//     this.board = board;
//     this.row = booleanGrid();
//     this.col = booleanGrid();
//     this.box = booleanGrid();
//     this.count = 0;
//   }

//   boxNumber(i, j) {
//     return Math.floor(i / 3) * 3 + Math.floor(j / 3);
//   }

//   populateBooleanGrids() {
//     for (let row = 0; row < this.board.length; row++) {
//       for (let col = 0; col < this.board[0].length; col++) {
//         let number = this.board[row][col];

//         if (number !== 0) {
//           this.place(row, col, number);
//         }
//       }
//     }
//   }

//   place(row, col, number) {
//     this.count = this.count + 1;
//     console.log("WHAT IS GRID AT", "ROW", row, "BEFORE", "\n", this.row);

//     this.row[row][number - 1] = true;
//     console.log("WHAT IS GRID AT", "ROW", row, "AFTER", "\n", this.row);

//     this.col[col][number - 1] = true;
//     this.box[this.boxNumber(row, col)][number - 1] = true;

//     // return true;
//   }

//   canPlace(row, col, number) {
//     if (this.row[row][number - 1]) return false;
//     if (this.col[col][number - 1]) return false;
//     if (this.box[this.boxNumber(row, col)][number - 1]) return false;

//     return true;
//   }

//   remove(row, col, number) {
//     this.row[row][number - 1] = false;
//     this.col[col][number - 1] = false;
//     this.box[this.boxNumber(row, col)][number - 1] = false;
//   }
// }

function solveSudoku(board) {
  const checker = new BoardChecker(board);
  checker.populateBooleanBoards();
  let count = [0];

  const success = solveSudokuHelper(board, 0, 0, checker, count);

  if (success) {
    console.table(board);
    return;
  } else {
    console.log("Board has no result, here's count: ", count);
    console.table(board);
    return;
  }
}

function solveSudokuHelper(board, row, col, checker, count) {
  count[0] += 1;
  if (row === board.length) {
    return true;
  }

  const next = nextCoordinates(row, col);

  if (board[row][col] !== 0) {
    solveSudokuHelper(board, next.i, next.j, checker, count);
  }

  for (let candidate = 1; candidate <= 9; candidate++) {
    if (checker.canPlace(row, col, candidate)) {
      checker.place(row, col, candidate);
      board[row][col] = candidate;
      if (solveSudokuHelper(board, next.i, next.j, checker, count)) {
        return true;
      }
      checker.remove(row, col, candidate);
      board[row][col] = 0;
    }
  }

  return false;
}

function nextCoordinates(row, col) {
  if (col === 8) {
    return { i: row + 1, j: 0 };
  } else {
    return { i: row, j: col + 1 };
  }
}

function generateBooleanBoard() {
  const arr = new Array(9);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(10).fill(false);
  }
  return arr;
}

class BoardChecker {
  constructor(board) {
    this.board = JSON.parse(JSON.stringify(board));
    this.rows = generateBooleanBoard();
    this.cols = generateBooleanBoard();
    this.box = generateBooleanBoard();
  }

  boxIndex(i, j) {
    return Math.floor(i / 3) * 3 + Math.floor(j / 3);
  }

  populateBooleanBoards() {
    for (let row = 0; row < this.board.length; row++) {
      for (let col = 0; col < this.board[0].length; col++) {
        let number = this.board[row][col];
        if (number != 0) {
          this.place(row, col, number);
        }
      }
    }
  }

  canPlace(row, col, number) {
    if (this.rows[row][number]) return false;
    if (this.cols[col][number]) return false;
    if (this.box[this.boxIndex(row, col)][number]) return false;

    return true;
  }

  place(row, col, number) {
    this.rows[row][number] = true;
    this.cols[col][number] = true;
    this.box[this.boxIndex(row, col)][number] = true;

    return true;
  }

  remove(row, col, number) {
    this.rows[row][number] = false;
    this.cols[col][number] = false;
    this.box[this.boxIndex(row, col)][number] = false;

    return true;
  }
}

const board = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

solveSudoku(board);

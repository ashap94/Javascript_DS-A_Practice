function zigzagTraverse(array) {
  // Write your code here.
  let row = 0;
  let col = 0;
  let goingDown = true;
  let result = [];
  let height = array.length - 1;
  let width = array[0].length - 1;
  while (!isOutOfBounds(row, col, height, width)) {
    result.push(array[row][col]);

    if (goingDown) {
      if (col == 0 || row == height) {
        goingDown = false;
        if (row == height) {
          col += 1;
        } else {
          row += 1;
        }
      } else {
        row += 1;
        col -= 1;
      }
    } else {
      if (row == 0 || col == width) {
        goingDown = true;
        if (col == width) {
          row += 1;
        } else {
          col += 1;
        }
      } else {
        row -= 1;
        col += 1;
      }
    }
  }

  return result;
}

function isOutOfBounds(row, col, height, width) {
  return row < 0 || row > height || col < 0 || col > width;
}

// function zigzagTraverse(array) {
//   // Write your code here.
//   let vertThreshold = array.length - 1;
//   let horizThreshold = array[0].length - 1;
//   let ordered = [];
//   let newPosition = [0, 0]; // this position will be updated with a
//   // specific function to determine what new postion
//   // to be visited
//   getClosestNeighbor(
//     newPosition,
//     ordered,
//     vertThreshold,
//     horizThreshold,
//     array
//   );
//   return ordered;
// }

// function getClosestNeighbor(
//   position,
//   ordered,
//   vertThreshold,
//   horizThreshold,
//   matrix
// ) {
//   if (position[0] === vertThreshold && position[1] === horizThreshold) {
//     addPosition(matrix, vertThreshold, horizThreshold, ordered);
//     return;
//   }

//   let closest = findNeighbor(matrix, position);

//   addPosition(matrix, closest[0], closest[1], ordered);
//   getClosestNeighbor(closest, ordered, vertThreshold, horizThreshold, matrix);
// }

// function getDifference(i, j, element, matrix) {
//   return matrix[i][j] - element;
// }

// function addPosition(matrix, i, j, ordered) {
//   return ordered.push(matrix[i][j]);
// }

// function findNeighbor(matrix, pos) {
//   const currentEle = matrix[pos[0]][pos[1]];
//   const topPos = [pos[0] - 1, pos[1]];
//   const topLeft = [pos[0] - 1, pos[1] - 1];
//   const left = [pos[0], pos[1] - 1];
//   const bottomLeft = [pos[0] + 1, pos[1] - 1];
//   const bottom = [pos[0] + 1, pos[1]];
//   const bottomRight = [pos[0] + 1, pos[1] + 1];
//   const right = [pos[0], pos[1] + 1];
//   const topRight = [pos[0] - 1, pos[1] + 1];

//   const positions = [
//     topPos,
//     topLeft,
//     left,
//     bottomLeft,
//     bottom,
//     bottomRight,
//     right,
//     topRight
//   ];
//   let closestPosition;
//   let closestDifference = Infinity;

//   let vertThreshold = matrix.length - 1;
//   let horizThreshold = matrix[0].length - 1;

//   for (let i = 0; i < positions.length; i++) {
//     if (positions[i][0] < 0 || positions[i][0] > vertThreshold) {
//       continue;
//     } else {
//       if (positions[i][1] < 0 || positions[i][1] > horizThreshold) {
//         continue;
//       } else {
//         let difference =
//           matrix[(positions[i][0], positions[i][1])] - currentEle;
//         if (closestPosition === undefined && difference > 0) {
//           closestPosition = positions[i];
//           closestDifference = difference;
//           continue;
//         }
//         if (difference > 0 && difference < closestDifference) {
//           closestDifference = difference;
//           closestPosition = positions[i];
//           continue;
//         }
//       }
//     }
//   }

//   return closestPosition;
// }

// // does not solve solution

// // // Do not edit the line below.
// // exports.zigzagTraverse = zigzagTraverse;

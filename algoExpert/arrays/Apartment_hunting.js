// solution Time O(B^2R) || Space O(B)

function apartmentHunting(blocks, reqs) {
  // Write your code here.
  let maxDistancesAtBlocks = blocks.map(_ => -Infinity);
  // let maxDistancesAtBlocks = new Array(blocks.length).fill(-Infinity);
  for (let i = 0; i < blocks.length; i++) {
    for (const req of reqs) {
      let closestReqDistance = Infinity;
      for (let j = 0; j < blocks.length; j++) {
        if (blocks[j][req]) {
          closestReqDistance = Math.min(
            closestReqDistance,
            distanceBetween(i, j)
          );
        }
      }
      maxDistancesAtBlocks[i] = Math.max(
        maxDistancesAtBlocks[i],
        closestReqDistance
      );
    }
  }

  return getMinDistance(maxDistancesAtBlocks);
}

function getMinDistance(array) {
  let minValue = array[0];
  let minPosition = 0;
  for (let i = 1; i < array.length; i++) {
    let currentValue = array[i];
    if (currentValue < minValue) {
      minValue = currentValue;
      minPosition = i;
    }
  }

  return minPosition;
}

function distanceBetween(a, b) {
  return Math.abs(a - b);
}

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

// second solution,
// Time O(BR) || Space O(BR)

function apartmentHunting(blocks, reqs) {
  // Write your code here.
  const minDistancesFromBlocks = reqs.map(req =>
    getMinDistancesFromBlocks(req, blocks)
  );
  const maxDistancesAtBlocks = getMaxDistancesAtBlocks(
    blocks,
    minDistancesFromBlocks
  );
  return getIdxAtMinValue(maxDistancesAtBlocks);
}

function getMinDistancesFromBlocks(req, blocks) {
  const minDistances = new Array(blocks.length);
  let closestDistance = Infinity;
  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i][req]) closestDistance = i;
    minDistances[i] = getMinDistance(i, closestDistance);
  }
  for (let i = blocks.length - 1; i >= 0; i--) {
    if (blocks[i][req]) closestDistance = i;
    minDistances[i] = Math.min(
      minDistances[i],
      getMinDistance(i, closestDistance)
    );
  }

  return minDistances;
}

function getMaxDistancesAtBlocks(blocks, minDistancesFromBlocks) {
  let maxDistancesAtBlocks = new Array(blocks.length);

  for (let i = 0; i < blocks.length; i++) {
    const distancesFromReqs = minDistancesFromBlocks.map(
      distances => distances[i]
    );
    maxDistancesAtBlocks[i] = Math.max(...distancesFromReqs);
  }

  return maxDistancesAtBlocks;
}

function getIdxAtMinValue(array) {
  let minValue = array[0];
  let minIdx = 0;
  for (let i = 0; i < array.length; i++) {
    let currentValue = array[i];
    if (currentValue < minValue) {
      minValue = currentValue;
      minIdx = i;
    }
  }

  return minIdx;
}

function getMinDistance(a, b) {
  return Math.abs(a - b);
}

// recursive implementation
function findClosestValueInBst(tree, target) {
  // Write your code here.
  return findClosestValueInBstHelper(tree, target, Infinity);
}

function findClosestValueInBstHelper(tree, target, closest) {
  if (tree === null) {
    return closest;
  }
  if (Math.abs(closest - target) > Math.abs(tree.value - target)) {
    closest = tree.value;
  }
  if (target < tree.value) {
    return findClosestValueInBstHelper(tree.left, target, closest);
  } else if (target > tree.value) {
    return findClosestValueInBstHelper(tree.right, target, closest);
  } else {
    return closest;
  }
}

// iterative implementation
// better b/c space complexity is 0(1)
function findClosestValueInBst(tree, target) {
  // Write your code here.
  return findClosestValueInBstHelper(tree, target, Infinity);
}

function findClosestValueInBstHelper(tree, target, closest) {
  let currentNode = tree;
  while (currentNode !== null) {
    if (Math.abs(closest - target) > Math.abs(currentNode.value - target)) {
      closest = currentNode.value;
    }
    if (target < currentNode.value) {
      currentNode = currentNode.left;
    } else if (target > currentNode.value) {
      currentNode = currentNode.right;
    } else {
      break;
    }
  }

  return closest;
}

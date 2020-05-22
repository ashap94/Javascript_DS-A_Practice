var hasCycle = function (head) {
  const set = new Set();

  let currentNode = head;

  while (currentNode !== null) {
    if (set.has(currentNode)) {
      return true;
    } else {
      set.add(currentNode);
    }
    currentNode = currentNode.next;
  }
  return false;
};

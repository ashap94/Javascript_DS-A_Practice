// Fund Loop

//   Write a function that takes in the head of a Singly Linked List that contains
//   a loop (in other words, the list's tail node points to some node in the list
//   instead of None / null). The function should return
//   the node (the actual node--not just its value) from which the loop originates
//   in constant space.

// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findLoop(head) {
  // Write your code here.
  let slow = head;
  let fast = head;

  while (true) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return findNodeOriginOfCycle(head, fast);
    }
  }
}

function findNodeOriginOfCycle(node1, node2) {
  while (true) {
    if (node1 === node2) {
      return node1;
    }
    node1 = node1.next;
    node2 = node2.next;
  }
}

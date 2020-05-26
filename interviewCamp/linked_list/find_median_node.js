// Given a linked list, find its median node's value. You may assume the list does not have a cycle.

/*
Questions to Clarify:

Q. If there are even number of nodes, which node to return?
A. Return the average of both middle nodes values
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findMedianNodeValue(head) {
  let slow = head;
  let fast = head;

  while (true) {
    fast = fast.next;
    if (fast === null) {
      return slow.value;
    }
    fast = fast.next;
    if (fast === null) {
      return medianValue(slow, slow.next);
    }
    slow = slow.next;
  }
}

function medianValue(node1, node2) {
  let sumValues = node1.value + node2.value;
  return sumValues / 2;
}

const head1 = new Node(1);

const head2 = new Node(2);
head1.next = head2;

const head3 = new Node(3);
head2.next = head3;

const head4 = new Node(4);
head3.next = head4;

const head5 = new Node(5);
head4.next = head5;

console.log(findMedianNodeValue(head1));

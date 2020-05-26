// Given a linked list that has a cycle, find the length of the cycle. The length is in number of nodes.

/* 

Questions to Clarify:

Q. How do you want the output
A. Return the number of nodes in the cycle

Q. Can we assume the input has a cycle?
A. No 

if no cycle, console.log "No cycle detected"

*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function findLengthOfCycle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null) {
    fast = fast.next;
    if (fast === slow) {
      return lengthOfCycle(slow, fast);
    }
    if (fast !== null) {
      fast = fast.next;
      if (fast === slow) {
        return lengthOfCycle(slow, fast);
      }
    }
    slow = slow.next;
  }

  //   console.log("No cycle Detected");
  return null;
}

function lengthOfCycle(node1, node2) {
  let count = 1;
  node2 = node2.next;

  while (node1 !== node2) {
    count++;
    node2 = node2.next;
  }

  return count;
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

const head6 = new Node(6);
head5.next = head6;

const head7 = new Node(7);
head6.next = head7;

const head8 = new Node(8);
head7.next = head8;

const head9 = new Node(9);
head8.next = head9;

// head9.next = head4;

console.log(findLengthOfCycle(head1));

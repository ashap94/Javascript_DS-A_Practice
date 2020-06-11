// Level: Medium

// Is Palindrome:
// Given a Linked List, determine if it is a Palindrome.

// For example, the following lists are palindromes:

// A -> B -> C -> B -> A
// A -> B -> B -> A
// K -> A -> Y -> A -> K

// Note​: Do it with O(N) time and O(1) space?
// (Hint: Reverse a part of the list)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function isPalindrome(head) {
  // head representing head node in the sequence
  let slow = head;
  let fast = head;

  while (true) {
    if (fast.next === null) {
      reverseListFromPosition(slow);
      break;
    }
    fast = fast.next;
    if (fast.next === null) {
      reverseListFromPosition(slow);
      break;
    }
    fast = fast.next;
    slow = slow.next;
  }

  return findPalindromeInNodes(head, fast);
}

function reverseListFromPosition(node) {
  let prev = node;
  let current = node.next;
  let next = node.next.next;

  while (current !== null) {
    current.next = prev;

    prev = current;
    current = next;

    if (next !== null) {
      next = next.next;
    }
  }
}

function findPalindromeInNodes(head, last) {
  while (head !== last) {
    if (head.value !== last.value) {
      return false;
    }

    head = head.next;
    if (head === last) {
      break;
    }
    last = last.next;
  }

  return true;
}

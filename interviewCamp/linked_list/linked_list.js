class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    let currentNode = this.tail;
    currentNode.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  getNode(n) {
    let currentNode = this.head;
    let idx = 1;

    while (idx < n) {
      if (currentNode.next == null) {
        currentNode = null;
        break;
      } else {
        currentNode = currentNode.next;
        idx++;
      }
    }

    return currentNode;
  }

  prepend(value) {
    const newNode = new Node(value);
    const holdingPointer = this.head;
    this.head = newNode;
    this.head.next = holdingPointer;
    this.length++;
    return this;
  }

  insert(index, value) {
    if (index <= 1) {
      this.prepend(value);
      return this;
    }
    if (index > this.length) {
      this.append(value);
      return this;
    }
    let idx = 2;
    let prevNode = this.head;
    let currentNode = this.head.next;
    const newNode = new Node(value);
    while (true) {
      if (idx == index) {
        newNode.next = currentNode;
        prevNode.next = newNode;
        this.length++;
        break;
      } else {
        prevNode = currentNode;
        currentNode = currentNode.next;
        idx++;
      }
    }
    return this;
  }

  remove(index) {
    if (index <= 1) {
      let holdingPointer = this.head;
      this.head = holdingPointer.next;
      holdingPointer.next = null;
      this.length--;
      return this;
    }

    if (index >= this.length) {
      let nodeBeforeLast = this.getNode(index - 1);
      this.tail = nodeBeforeLast;
      this.tail.next = null;

      this.length--;

      return this;
    }

    let prevNode = this.head;
    let currentNode = prevNode.next;
    let i = 2;

    while (true) {
      if (i === index) {
        prevNode.next = currentNode.next;
        currentNode.next = null;
        this.length--;
        return this;
      }

      prevNode = currentNode;
      currentNode = currentNode.next;
      i++;
    }
  }
}

const list = new LinkedList(8);
list.append(4);
list.append(7);
list.append(5);
list.insert(1, 6);
list.remove(1);
console.log(list);
// list.prepend(12)
// console.log(list)

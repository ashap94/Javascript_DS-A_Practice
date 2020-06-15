// Use an array to implement 2 stacks.

class ArrayStack {
  constructor(size) {
    this.a = new Array(size);
    this.s1 = 0;
    this.s2 = this.a.length - 1;
  }

  push(stackNumber, value) {
    if (stackNumber !== 1 && stackNumber !== 2) {
      throw new Error("Must reference stack no. 1 or 2 as first parameter");
    }
    if (this.s1 > this.s2) {
      throw new Error(
        "Array object is full, no more room for data between both stacks."
      );
    }
    if (stackNumber === 1) {
      this.a[this.s1++] = value;
    } else {
      this.a[this.s2--] = value;
    }
  }

  pop(stackNumber) {
    if (stackNumber !== 1 && stackNumber !== 2) {
      throw new Error("Must reference stack no. 1 or 2 as first parameter");
    }
    if (this.s1 > this.s2) {
      throw new Error(
        "Array object is full, no more room for data between both stacks."
      );
    }
    if (stackNumber === 1 && this.s1 > 0) {
      return this.a[--this.s1];
    } else if (stackNumber === 2 && this.s2 < this.a.length - 1) {
      return this.a[++this.s2];
    } else {
      throw new Error("Stack is empty.");
    }
  }
}

const stack = new ArrayStack(6);
stack.push(1, 4);
stack.push(1, 14);
stack.push(2, 4);
// stack.pop(2);
stack.pop(1);

console.log(stack);

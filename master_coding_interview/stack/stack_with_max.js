const { Stack } = require("./stack");

class StackWithMax {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  push(value) {
    if (!!this.max()) {
      if (this.stack2.peek().value < value) {
        this.stack2.push(value);
        this.stack1.push(value);
        return this;
      } else {
        this.stack1.push(value);
        return this;
      }
    } else {
      this.stack2.push(value);
      this.stack1.push(value);
      return this;
    }
  }

  pop() {
    if (this.stack1.isEmpty()) {
      throw new Error("Stack is Empty");
    }
    if (this.stack1.peek().value === this.stack2.peek().value) {
      this.stack1.pop();
      return this.stack2.pop();
    }
    return this.stack1.pop();
  }

  max() {
    return this.stack2.peek() ? this.stack2.peek().value : null;
  }
}

const stack = new StackWithMax();

stack.push(2);
stack.push(1);
stack.push(3);
stack.push(0);
stack.pop();
stack.pop();
stack.pop();
stack.pop();

// stack.pop();

console.log(stack.max());

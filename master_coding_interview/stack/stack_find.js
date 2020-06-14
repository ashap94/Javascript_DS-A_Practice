const { Stack } = require("./stack");

function find(s, target) {
  let temp = new Stack();
  let found = false;

  while (!s.isEmpty()) {
    let top = s.peek();
    if (top.value === target) {
      found = true;
      break;
    }
    temp.push(s.pop().value);
  }

  while (!temp.isEmpty()) {
    s.push(temp.pop().value);
  }

  return found;
}

const myStack = new Stack();

myStack.push("google");
myStack.push("Udemy");
myStack.push("Discord");
// myStack.pop();

console.log(find(myStack, "google"));

console.log(myStack);

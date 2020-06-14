// Use an array to implement 2 stacks.

class ArrayStack {
  constructor(size) {
    this.a = new Array(size);
    this.s1 = 0;
    this.s2 = this.a.length - 1;
  }
}

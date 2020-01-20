function fibonacchi(n) {
  if (n < 2) {
    return n;
  }

  return fibonacchi(n - 1) + fibonacchi(n - 2);
}

// console.log(fibonacchi(9));

function fibonacchiMaster() {
  let cache = {};
  return function fib(n) {
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        console.log("LONG CALCULATION");
        cache[n] = fib(n - 2) + fib(n - 1);
        return cache[n];
      }
    }
  };
}

let fibRev = fibonacchiMaster();

console.log(fibRev(5));
console.log(fibRev(4));

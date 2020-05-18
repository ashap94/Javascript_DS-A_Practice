// Given a 32-bit signed integer, reverse digits of an integer.

// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

var reverse = function (x) {
  let absX = Math.abs(x);
  let res = 0;

  while (absX > 0) {
    res = res * 10 + (absX % 10);
    absX = Math.floor(absX / 10);
  }

  res = x < 0 ? -res : res;

  if (res < -(2 ** 31) || 2 ** 31 - 1 < res) {
    return 0;
  }

  return res;
};

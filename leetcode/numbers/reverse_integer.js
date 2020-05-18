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

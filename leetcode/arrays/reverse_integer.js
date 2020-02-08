var reverse = function(x) {
  let res = 0;
  if (x < 0) {
    res = -Number(
      String(x)
        .split("")
        .reverse()
        .join("")
    );
  } else {
    res = Number(
      String(x)
        .split("")
        .reverse()
        .join("")
    );
  }
  if (res < -Math.pow(2, 31) || res > Math.pow(2, 31) - 1) return 0;
  return res;
};

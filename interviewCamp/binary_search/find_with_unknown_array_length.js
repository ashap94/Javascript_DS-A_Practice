function findWithUnknownArrayLength(a, target) {
  let high = 1;
  let lastIdx = -1;

  while (true) {
    console.log("HIGH IN MAIN FUNC:   ", high);
    if (a[high] == undefined) {
      lastIdx = bSearchLastIdx(a, high / 2, high);
      break;
    }
    if (a[high] > target) {
      return bSearchWithRange(a, target, high / 2, high);
    }
    high = high * 2;
  }
  return bSearchWithRange(a, target, 0, lastIdx);
}

function bSearchLastIdx(a, low, high) {
  let start = low;
  let end = high;

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (a[mid] == undefined) {
      end = mid - 1;
    } else if (a[mid + 1] == undefined) {
      return mid;
    } else {
      start = mid + 1;
    }
  }
  return -1; // shouldn't happen
}

function bSearchWithRange(a, target, low, high) {
  let start = low;
  let end = high;

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (a[mid] > target) {
      end = mid - 1;
    } else if (a[mid] < target) {
      start = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
}

const arr = [
  4,
  5,
  7,
  8,
  9,
  10,
  11,
  12,
  14,
  15,
  16,
  17,
  18,
  19,
  23,
  34,
  45,
  46,
  47,
  48,
  94,
  9140,
  412,
  241,
  512,
  21,
  6432,
  1234,
  3647,
  75496,
  456732,
  354,
  5324543,
  523,
  252,
  453,
  54,
  355,
  354,
  543,
  47,
  5,
  967,
  75,
  3,
  3434,
  58,
  5,
  345,
  8903,
  392,
  12,
  4,
  0,
  7766,
  54,
  42344,
  8678,
  677946,
  43,
  6,
  6453,
  634,
  643,
  3456,
  2,
  543,
  1432234,
  1,
];

arr.sort((a, b) => a - b);

console.log(arr);

console.log(findWithUnknownArrayLength(arr, 53245437));
console.log(arr.findIndex((e) => e == 53245437));

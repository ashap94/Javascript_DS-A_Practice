let arr = [
  { id: 1, name: "aaron" },
  { id: 2, name: "bob" },
  { id: 3, name: "jack" },
];

arr.forEach((el, idx) => {
  arr[idx] = Object.assign(el, { elephant: idx });
});

console.log(arr);

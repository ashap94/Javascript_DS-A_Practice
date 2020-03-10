function caesarCipherEncryptor(string, key) {
  // Write your code here.
  const newKey = key % 26;
  const alp = "abcdefghijklmnopqrstuvwxyz".split("");
  const newLetters = []; // pushing is O(1) instead of concatenation
  for (const letter of string) {
    newLetters.push(getNewLetter(letter, alp, newKey));
  }
  return newLetters.join("");
}

function getNewLetter(letter, alp, key) {
  let index = alp.indexOf(letter);
  let newIndex = index + key;
  if (newIndex <= 25) {
    return alp[newIndex];
  } else {
    return alp[-1 + (newIndex % 25)];
  }
}

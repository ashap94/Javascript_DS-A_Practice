// Question Discussed: (Level: Medium) Phone Number Mnemonic Problem: Given an N digit phone number, print all the strings that can be made from that phone number. Since 1 and 0 don't correspond to any characters, ignore them. For example:

// 213 => AD, AE, AF, BD, BE, BF, CD, CE, CF

// 456 => GJM, GJN, GJO, GKM, GKN, GKO,.. etc.

function printWords(phoneNumber) {
  let stringNumber = phoneNumber + "";
  let buffer = new Array(stringNumber.length);

  printWordsHelper(stringNumber, buffer, 0, 0);
}

function printWordsHelper(string, buffer, idx, bufferIdx) {
  if (bufferIdx == buffer.length || idx == string.length) {
    console.log(buffer.join(""));
    return;
  }

  const letters = getLettersFromNumber(string[idx]);
  if (letters.length == 0) {
    return printWordsHelper(string, buffer, idx + 1, bufferIdx);
  }

  for (let i = 0; i < letters.length; i++) {
    let bufferCopy = [...buffer];
    bufferCopy[bufferIdx] = letters[i];

    printWordsHelper(string, bufferCopy, idx + 1, bufferIdx + 1);
  }
}

function getLettersFromNumber(num) {
  // num is string datatype
  switch (num) {
    case "0":
      return [];
    case "1":
      return [];
    case "2":
      return ["a", "b", "c"];
    case "3":
      return ["d", "e", "f"];
    case "4":
      return ["g", "h", "i"];
    case "5":
      return ["j", "k", "l"];
    case "6":
      return ["m", "n", "o"];
    case "7":
      return ["p", "q", "r", "s"];
    case "8":
      return ["t", "u", "v"];
    case "9":
      return ["w", "x", "y", "z"];
  }
}

printWords(456);

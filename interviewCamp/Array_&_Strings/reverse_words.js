// Given a sentence, reverse the words of the sentence.

// For example,

// "i live in a house" becomes "house a in live i"

// s is string in parameter

function reverseWords(s) {
    let reversedWords = [];
    let end = s.length;
    
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] == " ") {
            let word = s.slice(i+1, end);
            reversedWords.push(word);
            end = i;
        }
    }
    
    let firstWord = s.slice(0, end);
    reversedWords.push(firstWord);

    return reversedWords.join(" ");
    
}

let string = "i live in a house";

console.log("Input:  \n\n", string);
console.log("Output:  \n\n", reverseWords(string) )
/*
    Given an array of numbers, replace each even number with two of the same number. e.g, [1,2,5,6,8, , , ,] -> [1,2,2,5,6,6,8,8].
    
    Assume that the array has the exact amount of space to accommodate the result.
*/

// input a is an array with the numbers modeled in the example

function cloneEvenNumbers(a) {
    let end = a.length;
    let i = findLastNumber(a);
    
    while (i >= 0) {
        if (a[i] % 2 == 0) {
            end--;
            a[end] = a[i];
            end--;
            a[end] = a[i];
        } else {
            end--;
            a[end] = a[i];
        }

        i--;
    }

    return a;
}

function findLastNumber(a) {
    let i = a.length;

    while (i >= 0) {
        if (i == 1) {
            return i;
        } else if ( a[i-1] !== -1) {
            return i;
        }

        i--;
    }
}



const array = [1,2,5,6,8,-1,-1,-1];

console.log("RESULT OF INPUT ARRAY", array, cloneEvenNumbers(array))
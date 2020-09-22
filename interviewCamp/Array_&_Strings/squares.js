// Given a sorted array in non-decreasing order, return an array of squares of each number, also
// in non-decreasing order. For example:

// [-4,-2,-1,0,3,5] -> [0,1,4,9,16,25]

// How can you do it in O(n) time?

function squares(a) {
    let start = 0;
    let end = a.length - 1;

    const squares = new Array(a.length);
    let squaresEnd = a.length - 1;
    
    while (start <= end) {
        
        let startEl = Math.abs( a[start] ) ** 2;
        let endEl = Math.abs( a[end] ) ** 2;

        if ( startEl > endEl  ) {
            squares[squaresEnd] = startEl;
            start++;
        } else {
            squares[squaresEnd] = endEl;
            end--;
        }

        squaresEnd--;

    }
    
    return squares;
}

const arr = [-4,-2,-1,0,3,5];

console.log("Input: \n", arr)
console.log("Output: \n", squares(arr))
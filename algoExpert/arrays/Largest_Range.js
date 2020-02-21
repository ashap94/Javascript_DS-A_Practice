// first Attempt, not optimal due to using unshift while checking previous numbers in the numbers hash 
// having unshift is O(n) operation, and inside a for loop, makes time complexity for function O(n^2)
function largestRange(array) {
  // Write your code here.
	let numbers = {};
	for (let i = 0; i < array.length; i++) {
		if ( !numbers[ array[i] ] ) numbers[ array[i] ] = true;
	}
	
	let longestRange = [];
	for (let j = 0; j < array.length; j++) {
		let range = [ array[j] ];
		numbers[ array[j] ] = false;
		let prev = array[j] - 1;
		while ( numbers[prev] === true ) {
			numbers[prev] = false;
			range.unshift(prev);
			prev--;
		}
		let next = array[j] + 1;
		while ( numbers[next] === true ) {
			numbers[next] = false;
			range.push(next);
			next++;
		}
		
		if (range.length > longestRange) longestRange = range;
	}
	
	return [ longestRange[0], longestRange[ longestRange.length - 1 ] ];
}

// much attempt below b/c not creating array longest range or range that needs to have unshift method performed on it to track first element which is an O(n) process inside a loop which makes overall time complexity O(n)

// rather just instantiating some variables right and left and just placing them as the bestRange variable if currentLength is longer than the longest length found in the array.

function largestRange(array) {
  // Write your code here.
	let longestLength = 0;
	let bestRange = [];
	let numbers = {};
	for (const num of array) {
		numbers[num] = true;
	}
	
	for (const num of array) {
		if ( !numbers[num] ) continue;
		// let range = [ array[j] ];
		// numbers[ array[j] ] = false;
		// let prev = array[j] - 1;
		let currentLength = 1;
		let left = num - 1;
		let right = num + 1;
		while ( left in numbers ) {
			numbers[left] = false;
			currentLength++;
			left--;
		}
		// let next = array[j] + 1;
		while ( right in numbers ) {
			numbers[right] = false;
			currentLength++;
			right++;
		}
		
		if ( currentLength > longestLength ) {
			longestLength = currentLength;
			bestRange = [ left + 1, right - 1 ]
		}
		
	}
	
	return bestRange;
}
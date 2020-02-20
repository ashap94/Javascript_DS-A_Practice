// function subarraySort(array) {
//   // Write your code here.
	
// 	// sort is most likely time complexity of O(nlog(n))
// 	// and algoritm
// 	// let sorted = array.sort( (a,b) => a - b );
// 	// if ( equalArrays(array, sorted) ) {
// 	// 	return [-1,-1];
// 	// }
	
// 	let unordered = [];
	
// 	for (let i = 0; i < array.length; i++) {
		
// 		if (i == 0) {
// 			if ( !( array[i + 1] => array[i] ) ) {
// 				unordered.push( array[i] );
// 			}
// 		}
		
// 		if (i == array.length - 1) {
// 			if (!(array[i - 1] <= array[i])) {
// 				unordered.push( array[i] );
// 			}
// 		}
		
// 		let prev = array[i - 1];
// 		let next = array[i + 1];
// 		if ( !( array[i] <= next && array[i] >= prev ) ) {
// 			unordered.push( array[i] );
// 		}
		
// 	}
	
// 	// let indices = [];
// 	let smallest = 0;
// 	let largest = unordered.length - 1;
	
// 	if ( 
// 		// !!unordered.length && 
// 			unordered.length > 2 ) {
		
// 		for (let j = 1; j < unordered.length; j++) {
// 			if ( unordered[i] < unordered[smallest] ) smallest = j;
// 		}
		
// 		for (let k = unordered.length - 2; k >= 0; k--) {
// 			if ( unordered[i] > unordered[largest] ) largest = k;
// 		}
		
// 	}
	
// 	return unordered.length === 0 ? [-1, -1] : [smallest, largest];
	
// } 

// function equalArrays( array1, array2 ) {
// 	if (array1.length !== array2.length) {
// 		return false;
// 	} 
	 	
// 	for (let i = 0; i < array1.length; i++) {
// 		if (array1[i] !== array2[i]) return false;
// 	} 
	
// 	return true;
// }


function subarraySort(array) {
	let minOutOfOrder = Infinity;
	let maxOutOfOrder = -Infinity;
	
	for (let i = 0; i < array.length; i++) {
		let num = array[i];
		if ( isOutOfOrder(i, num, array) ) {
			minOutOfOrder = Math.min(minOutOfOrder, num);
			maxOutOfOrder = Math.max(maxOutOfOrder, num);
		}
	}
	if (minOutOfOrder === Infinity) {
		return [-1, -1];
	}
	let subArrayLeftIdx = 0;
	while ( minOutOfOrder >= array[subArrayLeftIdx] ) {
		subArrayLeftIdx++;
	}
	
	let subArrayRightIdx = array.length - 1;
	while ( maxOutOfOrder <= array[subArrayRightIdx] ) {
		subArrayRightIdx--;
	}
	
	return [subArrayLeftIdx, subArrayRightIdx]
	
	
} 

function isOutOfOrder(i, num, array) {
	if ( i == 0 ) {
		return num > array[i + 1];
	}
	if (i == array.length - 1) {
		return num < array[ i - 1 ];
	}
	return num > array[ i + 1 ] || num < array[i - 1];
}


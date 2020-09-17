let arr1 = [1,2,3,4,5];
let arr2 = [1,2,3,7,8,9,6];

// this function returns a random element from a given array
let getRandomElementFromArray = (inputArr) => {
	return inputArr[Math.floor(Math.random() * inputArr.length)];
}

console.log(getRandomElementFromArray(arr1));
console.log(getRandomElementFromArray(arr2));

// this function picks 2 random elements of a given array and swap their place
let swapArrayRandomly = (inputArr) => {
	let i = Math.floor(Math.random() * inputArr.length);
	let j = Math.floor(Math.random() * inputArr.length);
	if ( i !== j ) {
		[ inputArr[i], inputArr[j] ] = [ inputArr[j], inputArr[i] ];
	}
	return inputArr;
}

console.log(swapArrayRandomly(arr1));

// this function finds all elements that exist in 2 given arrays
let findSimilarElements = (inputArr1, inputArr2) => {
	let output = [];
	inputArr1.sort();
	inputArr2.sort();
	let length = (inputArr1.length > inputArr2.length ? inputArr1.length : inputArr2.length);
	let i = 0;
	while ( i < length ) {
		if ( inputArr2.indexOf(inputArr1[i]) > -1 )
			output.push(inputArr1[i]);
		i++;
	}
	return output;
}

console.log(findSimilarElements(arr1,arr2));

// this function finds all elements that exist in 1 given array, but not in another
let findElementsDifference = (inputArr1, inputArr2) => {
	let output = [];
	inputArr1.sort();
	inputArr2.sort();
	let length = (inputArr1.length > inputArr2.length ? inputArr1.length : inputArr2.length);
	let i = 0;
	while ( i < length ) {
		if ( inputArr1.indexOf(inputArr2[i]) === -1 )
			if ( inputArr2[i] !== undefined )
				output.push(inputArr2[i]);
		if ( inputArr2.indexOf(inputArr1[i]) === -1 )
			if ( inputArr1[i] !== undefined )
				output.push(inputArr1[i]);
		i++;
	}
	return output;
}

console.log(findElementsDifference(arr1,arr2));

// this function returns an array containing all elements of 2 given arrays (without duplication)
let returnAllArrayElements = (inputArr1, inputArr2) => {
	return [ ...(findSimilarElements(inputArr1, inputArr2)), ...(findElementsDifference(inputArr1, inputArr2)) ];
}

console.log(returnAllArrayElements(arr1,arr2));

// this function generates a random hex color code
let generateRandomHexColor = () => {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

console.log(generateRandomHexColor());

// this function finds all possible substrings of a given input string
let findAllSubStrings = (inputStr) => { 
	let output = [];
	for (let i = 0; i < inputStr.length; i++) {
		let j = 0;
		while (!(j > inputStr.length)) {
			if (j > i) output.push(inputStr.substring(i, j));
			j++;
		}
	}
	return output;
} 

// this function checks if the given input array is increasing or not
let checkIncreasingArray = (inputArr) => {
	let i = 0;
	while (i < inputArr.length){
		if (inputArr[i+1] < inputArr[i]) return false;
		i++;
	}	
	return true;
}

// this function checks if the given input array is decreasing and has only odd numbers or not
let checkOddDecreasingArray = (inputArr) => {
	let i = 0;
	while (i < inputArr.length){
		if ( inputArr[i] % 2 === 0 ) return false;
		else if (inputArr[i+1] > inputArr[i]) return false;
		i++;
	}
	return true;
}

// this function returns the smallest integers possible from the characters of a given integer
let getSmallestInteger = (input) => {
	let intArray = input.toString().split("").sort();
	if (intArray[0] === '0') {
		let i = 1;
		while (i < intArray.length) {
			if ( intArray[i] > 0 ) {
				[ intArray[0], intArray[i] ] = [ intArray[i], 0 ] ;
				break;
			}
			i++;
		}
	}
	return intArray.join('');
}

// this function generates a random set of RGB color code
let generateRandomRGBColor = () => {
	let output = {
		r: 0, g: 0, b: 0
	}
	output.r = Math.floor(Math.random() * 256);
	output.g = Math.floor(Math.random() * 256);
	output.b = Math.floor(Math.random() * 256);
	return output;
}

// this function removes any duplicate elements in a given array
let removeDuplicateElements = (input) => {
	let output = input.filter((item, index) => {
		return input.indexOf(item) === index;
	});
	return output;
}

// this function finds all duplicate elements in a given array
let findDuplicateElements = (input) => {
	let output = input.filter((item, index) => {
		return input.indexOf(item) !== index;
	});
	output = removeDuplicateElements(output);
	return output;
}

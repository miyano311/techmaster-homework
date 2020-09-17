// this function checks if a given string exists within another given string
let checkStringExist = (str1, str2) => {
	return str1.includes(str2);
}

console.log(checkStringExist("Reimu Hakurei", "Reimu"));
console.log(checkStringExist("Reimu Hakurei", "Baka"));


// this function returns the first 8 characters of a given string
let shortenString = (input) => {
	let output = input.slice(0,8);
	if ( input.length > 8 ) output += "...";
	return output;
}

console.log(shortenString("Reimu Bakarei"));
console.log(shortenString("Hakurei Reimu"));

// this function converts characters in a given string so that only the first characters of words inside the string are capitalized.
let capitalizeString = (input) => {
	let tempStr = input.toLowerCase().split(" ");
	let output = tempStr.map(str => {
		return str.slice(0,1).toUpperCase() + str.slice(1)
	})
	return output.join(" ");
}

console.log(capitalizeString("reiMu baKarei"));
console.log(capitalizeString("sLAvA tOO bAlaNS FOr yOU"));


// this function multiplies a given string by 10 times
let multiplyString = (input) => {
	let output = "";
	let i = 0;
	while ( i < 10 ) {
		output += input;
		i++;
	}
	return output;
}

console.log(multiplyString("Ora"));
console.log(multiplyString("Muda"));

// this function multiplies a given string by 10 times, adding "-" between pieces of output string
let multiplyString2 = (input) => {
	let output = "";
	let i = 0;
	while ( i < 10 ) {
		output += input;
		i++;
		if ( i < 10 )
			output += "-";
	}
	return output;
}

console.log(multiplyString2("Ora"));
console.log(multiplyString2("Muda"));


// this function multiplies a given string by a given number of times (num)
let multiplyString3 = (input, num) => {
	let output = "";
	let i = 0;
	while ( i < num ) {
		output += input;
		i++;
		if ( i < num )
			output += "-";
		}
	return output;
}

console.log(multiplyString3("Ora", 17));
console.log(multiplyString3("Muda", 18));


// this function reverses a given string
let reverseString = (input) => {
	return input.split("").reverse().join("");
}

console.log(reverseString("Gold Experience"));
console.log(reverseString("Kono Giorno Giovanna niwa yume ga aru!"));

// this function checks if a given string is palindrome or not (ignoring spacing and capitalization)
let checkPalindromeString = (input) => {
	let tempArr = input.toLowerCase().split(" ").join("").split("");

	let mid = Math.floor(tempArr.length / 2);
	let isPalindrome = true;
	let i = 0;
	while ( i < mid ) {
		if ( tempArr[i] !== tempArr[tempArr.length - (i+1)]) {
			isPalindrome = false;
			break;
		}
		i++;
	}
	return isPalindrome;
}

console.log(checkPalindromeString("Muda adum"));
console.log(checkPalindromeString("not palindrome text"));

// this function checks if a string of numbers from 1 to n has any multiples of 3 and/or 5
let checkForMultiplesOf3And5 = (n) => {
	let i = 0;
	while (i < n) {
		let output = "";
		i++;
		console.log(i);
		if ( i % 3 === 0 ) output += "fizz";
		if ( i % 5 === 0 ) output += "buzz";
		if ( output !== "" ) console.log(output);
	}
}

checkForMultiplesOf3And5(8);
checkForMultiplesOf3And5(17);

// this function returns the number of vowel characters in a given string
let countVowels = (str) => {
	let temp = str.toLowerCase().split("");
	let i = 0;
	let count = 0;
	while ( i < temp.length ) {
		if ( temp[i] === "a" ) count++;
		if ( temp[i] === "e" ) count++;
		if ( temp[i] === "i" ) count++;
		if ( temp[i] === "o" ) count++;
		if ( temp[i] === "u" ) count++;
		i++;
	}
	return count;
}

console.log(countVowels("Gold Experience"));
console.log(countVowels("sLAvA tOO bAlaNS FOr yOU"));

// this function finds the smallest value in a given array of integers
let findMin = (inputArr) => {
	inputArr.sort();
	return inputArr[0];
}

console.log(findMin([6,2,3]));
console.log(findMin([6,3,7,0,3,5,0,7]));

// this function finds the second highest value in a given array of integers
let findSecondMax = (inputArr) => {
	inputArr.sort().reverse();
	let i = 0;
	let output = inputArr[i];
	while (i < inputArr.length) {
		i++;
		if (output > inputArr[i]) {
			output = inputArr[i];
			break;
		}
	}
	return output;
}

console.log(findSecondMax([6,2,3]));
console.log(findSecondMax([6,3,7,0,3,5,0,7]));

// this function sorts a given array of students' names in Z-A order
let sortStudents = (inputArr) => {
	return inputArr.sort().reverse();
}

console.log(sortStudents(['Gearing','Shimakaze','Daring']));
console.log(sortStudents(['Lexington','Saratoga','Ranger','Yorktown','Enterprise','Hornet']));

// this function finds the sum of all integer values in the range of 0-100 that are divisible by 5
let findSumOfDivisibleBy5 = () => {
	let i = 0;
	let output = 0;
	while ( i < 101 ) {
		if ( i % 5 === 0 ) output += i;
		i++;
	}
	return output;
}

console.log(findSumOfDivisibleBy5());

// this function returns an array of remainders after dividing elements of a given array to 2
let findRemainderOf2 = (inputArr) => {
	let outputArr = inputArr.map(ele => ele % 2);
	return outputArr;
}

console.log(findRemainderOf2([4,5,6]));
console.log(findRemainderOf2([44,45,76,88,9]));

// this function finds the longest strings in a given array
let findLongestStringInArray = (inputArr) => {
	let temp = inputArr.map(ele => ele.length);
	let maxStrLength = Math.max(...temp);
	let outputArr = inputArr.filter(ele => ele.length == maxStrLength);
	return outputArr;
}

console.log(findLongestStringInArray(['Gearing','Shimakaze','Hatsuharu','Daring']));
console.log(findLongestStringInArray(['Shoukaku','Lexington','Implacable','Indomitable','Saipan','Illustrious']));

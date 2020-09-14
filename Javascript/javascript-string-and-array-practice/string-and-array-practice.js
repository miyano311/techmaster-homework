// this function checks if a given string exists within another given string
function checkStringExist(str1, str2) {
	return str1.includes(str2);
}

console.log(checkStringExist("Reimu Hakurei", "Reimu"));
console.log(checkStringExist("Reimu Hakurei", "Baka"));


// this function returns the first 8 characters of a given string
function shortenString(input) {
	return input.slice(0,8);
}

console.log(shortenString("Reimu Bakarei"));
console.log(shortenString("Hakurei Reimu"));


// this function converts characters in a given string so that only the first characters of words inside the string are capitalized.
function capitalizeString(input) {
	input = input.toLowerCase();
	var i = 0;
	var output = "";
	var arr = input.split("");
	arr[i] = arr[i].toUpperCase();
	while ( i < arr.length ){
		output += arr[i];
		if ( arr[i] === " " ) {
			arr[i+1] = arr[i+1].toUpperCase();  
		}
		i++;
	}
	return output;
}

console.log(capitalizeString("reiMu baKarei"));
console.log(capitalizeString("sLAvA tOO bAlaNS FOr yOU"));


// this function multiplies a given string by 10 times
function multiplyString(input) {
	var output = "";
	var i = 0;
	while ( i < 10 ) {
		output += input;
		i++;
	}
	return output;
}

console.log(multiplyString("Ora"));
console.log(multiplyString("Muda"));

// this function multiplies a given string by 10 times, adding "-" between pieces of output string
function multiplyString2(input) {
	var output = "";
	var i = 0;
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
function multiplyString3(input, num) {
	var output = "";
	var i = 0;
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
function reverseString(input) {
	var output = "";
	var arr = input.split("");
	var i = arr.length;
	while ( i > 0 ){
		i--
		output += arr[i];
	}
	return output;
}

console.log(reverseString("Gold Experience"));
console.log(reverseString("Kono Giorno Giovanna niwa yume ga aru!"));

// this function checks if a given string is palindrome or not (ignoring spacing and capitalization)
function checkPalindromeString(input) {
	input = input.toLowerCase();
	var i = 0;
	var temp = "";
	var arr = input.split(" ");
	while ( i < arr.length ){
		temp += arr[i];
		i++;
	}

	arr = temp.split("");
	var mid = Math.floor(arr.length / 2);
	var j = 0;
	var isPalindrome = true;
	while ( j < mid ) {
		if ( arr[j] !== arr[arr.length - (j+1)]) {
			isPalindrome = false;
			break;
		}
		j++;
	}
	return isPalindrome;
}

console.log(checkPalindromeString("Muda adum"));
console.log(checkPalindromeString("not palindrome text"));

// this function checks if a string of numbers from 1 to n has any multiples of 3 and/or 5
function checkForMultiplesOf3And5(n) {
	var i = 0;
	while (i < n) {
		var output = "";
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
function countVowels(str) {
	str = str.toLowerCase();
	var temp = str.split("");
	var i = 0;
	var count = 0;
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
function findMin(inputArr) {
	inputArr.sort();
	return inputArr[0];
}

console.log(findMin([6,2,3]));
console.log(findMin([6,3,7,0,3,5,0,7]));

// this function finds the second highest value in a given array of integers
function findSecondMax(inputArr) {
	inputArr.sort();
	inputArr.reverse();
	var i = 0;
	var output = inputArr[i];
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
function sortStudents(inputArr) {
	inputArr.sort();
	inputArr.reverse();
	return inputArr;
}

console.log(sortStudents(['Gearing','Shimakaze','Daring']));
console.log(sortStudents(['Lexington','Saratoga','Ranger','Yorktown','Enterprise','Hornet']));

// this function finds the sum of all integer values in the range of 0-100 that are divisible by 5
function findSumOfDivisibleBy5() {
	var i = 0;
	var output = 0;
	while ( i < 101 ) {
		if ( i % 5 === 0 ) output += i;
		i++;
	}
	return output;
}

console.log(findSumOfDivisibleBy5());

// this function returns an array of remainders after dividing elements of a given array to 2
function findRemainderOf2(inputArr) {
	var outputArr = [];
	var i = 0;
	while (i < inputArr.length) {
		outputArr[i] = inputArr[i] % 2;
		i++;
	}
	return outputArr;
}

console.log(findRemainderOf2([4,5,6]));
console.log(findRemainderOf2([44,45,76,88,9]));

// this function finds the longest strings in a given array
function findLongestStringInArray(inputArr) {
	var outputArr = [];
	var i = 0;
	var maxStrLength = 0;
	while (i < inputArr.length) {
		if (maxStrLength < inputArr[i].length)
			maxStrLength = inputArr[i].length;
		i++;
	}

	i = 0;
	while (i < inputArr.length) {
		if (inputArr[i].length === maxStrLength)
			outputArr.push(inputArr[i]);
		i++;
	}
	return outputArr;
}

console.log(findLongestStringInArray(['Gearing','Shimakaze','Hatsuharu','Daring']));
console.log(findLongestStringInArray(['Shoukaku','Lexington','Implacable','Indomitable','Saipan','Illustrious']));

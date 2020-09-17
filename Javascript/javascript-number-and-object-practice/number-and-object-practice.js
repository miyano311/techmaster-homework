// this function calculates the volume of a sphere with a given radius
let calculateSphereVolume = (rad) => {
	return 4/3*rad*rad*rad*Math.PI;
}

console.log(calculateSphereVolume(5));
console.log(calculateSphereVolume(7));

// this function calculates the sum of all integers within a range
let findSumInsideRange = (startRange, endRange) => {
	let output = 0;
	while ( startRange < endRange - 1 ) {
		startRange++;
		output += startRange;
	}
	return output;
}

console.log(findSumInsideRange(2,7));
console.log(findSumInsideRange(3,10));

// this function checks if a given number is prime or not
let isPrimeNumber = (input) => {
	if (!(input > 1)) return false;
	if (!(input > 3)) return true;
	if (input % 2 === 0 || input % 3 === 0) return false;
	
	let i = 5;
	while (!( i*i > input)) {
		if (input % i === 0 || n % (i + 2) === 0)
			return false;
		i += 6;
	}
	return true; 
}

console.log(isPrimeNumber(5));
console.log(isPrimeNumber(6));

// this function calculates the sum of all prime numbers no bigger than a given integer
let findSumOfPrimeInsideRange = (input) => {
	let output = 0;
	if (input < 2)
		return output;

	let i = 2;
	while (!(i > input)) {
		if (isPrimeNumber(i))
			output += i;
		i++;
	}
	return output;
}

console.log(findSumOfPrimeInsideRange(7));
console.log(findSumOfPrimeInsideRange(20));

// this function calculates the sum of all divisors of a given integer
let findSumOfAllDivisors = (input) => {
	let output = 0;
	if (input < 1)
		return output;
	let i = 1;
	while (!(i > input)) {
		if ( input % i === 0 ) output += i;
		i++;
	}
	return output;
}

console.log(findSumOfAllDivisors(10));
console.log(findSumOfAllDivisors(18));


let sampleObj = {
    name: "Fletcher",
    age: 20,
	birthPlace: "dockyard",
    isStatus: false
}

// this function returns an array of properties of a given object
let getUserProperties = (inputObj) => {
	return Object.keys(inputObj);
}

console.log(getUserProperties(sampleObj));

// this function returns an array of value of properties of a given object 
let getUserPropertiesValue = (inputObj) => {
	return Object.values(inputObj);
}

console.log(getUserPropertiesValue(sampleObj));

// this function checks if a given property exists within a given object
let checkUserProperty = (str, inoutObj) => {
	return inoutObj.hasOwnProperty(str);
}

console.log(checkUserProperty("name", sampleObj));
console.log(checkUserProperty("balans", sampleObj));

// this function returns the length of a given object
function getObjectLength(inputObj) {
	return Object.keys(inputObj).length;
}

console.log(getObjectLength(sampleObj));


let userArr = [
  {
    name: "Fletcher",
    age: 20,
    isStatus: false
  },
  {
    name: "Iowa",
    age: 39,
    isStatus: true
  },
  {
    name: "Essex",
    age: 30,
    isStatus: true
  },
  {
    name: "Cleveland",
    age: 23,
    isStatus: false
  }
]

// this function finds all users with age greater than a given target age and with isStatus true
let findUserWithGivenAge = (targetAge, objArr) => {
	let output = objArr.filter( ele => ele.isStatus === true );
	output = output.filter( ele => ele.age > targetAge );
	return output;
}

console.log(findUserWithGivenAge(25, userArr));

// this function compares the age of users, which is used to sort these users by age
let compareUserAge = (a, b) => {
	const ageA = a.age;
	const ageB = b.age;

	let comparison = 0;
	if (ageA > ageB) {
		comparison = 1;
	} else if (ageA < ageB) {
		comparison = -1;
	}
	return comparison;
}

console.log(userArr.sort(compareUserAge));

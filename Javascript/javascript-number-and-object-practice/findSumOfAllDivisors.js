function isDivisor(dividend, testDivisor) {
	if (dividend % testDivisor !== 0) return false;
	else return true; 
}

function findSumOfAllDivisors(input) {
	var output = 0;
	if (input < 1)
		return output;

	var j = 1;
	while (!(j > input)) {
		if (isDivisor(input, j))
			output += j;
		j++;
	}
	
	return output;
}

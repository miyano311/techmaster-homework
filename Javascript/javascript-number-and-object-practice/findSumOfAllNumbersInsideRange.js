function findSumOfAllNumbersInsideRange(startRange, endRange) {
	var output = 0;
	while ( startRange < endRange - 1 ) {
		startRange++;
		output += startRange;
	}
	return output;
}

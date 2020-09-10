function isPrimeNumber(input) {
	if (!(input > 1)) return false;
	if (!(input > 3)) return true;
	if (input % 2 === 0 || input % 3 === 0) return false;
	
	var i = 5;
	while (!( i*i > input)) {
		if (input % i === 0 || n % (i + 2) === 0)
			return false;
		i += 6;
	}
	
	return true; 
}

// this function does... let's just say it changes "37761" to "13677".
function getSmallestInteger(input) {
	var intArray = input.toString().split("");
	intArray.sort();
	
	if (intArray[0] === '0') {
		var i = 1;
		while (i < intArray.length) {
			if ( intArray[i] > 0 ) {
				intArray[0] = intArray[i];
				intArray[i] = 0;
				break;
			}
			i++;
		}
	}
	return intArray.join('');
}

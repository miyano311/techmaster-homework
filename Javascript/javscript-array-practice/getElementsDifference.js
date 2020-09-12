// this function finds all elements that do not exist in both input arrays
function getElementsDifference(inputArr1, inputArr2) {
	var output = [];
	inputArr1.sort();
	inputArr2.sort();
	var length = (inputArr1.length > inputArr2.length ? inputArr1.length : inputArr2.length);
	var i = 0;
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

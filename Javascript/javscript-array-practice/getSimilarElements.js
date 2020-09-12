// this function finds all elements that exist in both input arrays
function getSimilarElements(inputArr1, inputArr2) {
	var output = [];
	inputArr1.sort();
	inputArr2.sort();
	var length = (inputArr1.length > inputArr2.length ? inputArr1.length : inputArr2.length);
	var i = 0;
	while ( i < length ) {
		if ( inputArr2.indexOf(inputArr1[i]) > -1 )
			output.push(inputArr1[i]);
		i++;
	}

	return output;
}

// this function checks if the given input array is decreasing and has only odd numbers or not
function checkOddDecreasingArray(inputArr) {
	var i = 0;
	while (i < inputArr.length){
		if ( inputArr[i] % 2 === 0 ) return false;
		else if (inputArr[i+1] > inputArr[i]) return false;
		i++;
	}
	
	return true;
}

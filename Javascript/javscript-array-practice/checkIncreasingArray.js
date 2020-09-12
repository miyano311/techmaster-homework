// this function checks if the given input array is increasing or not
function checkIncreasingArray(inputArr) {
	var i = 0;
	while (i < inputArr.length){
		if (inputArr[i+1] < inputArr[i]) return false;
		i++;
	}
	
	return true;
}

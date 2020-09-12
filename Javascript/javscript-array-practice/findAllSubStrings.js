// this function finds all possible substrings of a given input string
function findAllSubStrings(inputStr) { 
	var output = [];
	for (var i = 0; i < inputStr.length; i++) {
		var j = 0;
		while (!(j > inputStr.length)) {
			if (j > i) output.push(inputStr.substring(i, j));
			j++;
		}
	}
	
	return output;
} 

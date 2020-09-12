function findDuplicateElements(input) {
  var output = input.filter( (item, index) => {
    return input.indexOf(item) !== index;
    });
	output = removeDuplicateElements(output);
  return output;
}

function removeDuplicateElements(input) {
  var output = input.filter( (item, index) => {
    return input.indexOf(item) === index;
    });
  return output;
}

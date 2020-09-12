function removeDuplicateElements(input) {
  var output = input.filter( (item, index) => {
    return input.indexOf(item) === index;
    });
  return output;
}

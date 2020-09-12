// this function swaps the input array randomly
function swapArrayRandomly(inputArr) {
  var i = Math.floor(Math.random() * inputArr.length);
  var j = Math.floor(Math.random() * inputArr.length);
  if (i !== j) {
      var temp = inputArr[i];
      inputArr[i] = inputArr[j];
      inputArr[j] = temp;
  }
}

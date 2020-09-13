// this function returns the current date in DD/MM/YYYY format
function getCurrentDate() {
  var temp = new Date();
  var output = temp.getDate() + '/' + temp.getMonth() + '/' + temp.getFullYear();
  return output;
}

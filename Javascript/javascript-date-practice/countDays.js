// this function counts the number of days between the current date and the first date of the current year
function countDays() {
  var currentDate = new Date();
  var temp = "1/1/" + currentDate.getFullYear();
  var startOfCurrentYearDate = new Date(temp);
  var output = Math.floor((currentDate.getTime() - startOfCurrentYearDate.getTime()) / (1000 * 3600 * 24));
  return output;
}

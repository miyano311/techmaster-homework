// this function returns the date of the first day of the week which the given date is in
function getStartOfWeekDate(input) {
  var newDD = input.getDate() - input.getDay();
  var newDate = new Date((input.getMonth()+1) + "/" + newDD + "/" + input.getFullYear());
  return newDate;
}

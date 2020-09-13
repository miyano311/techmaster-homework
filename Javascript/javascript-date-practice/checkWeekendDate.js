// this function checks if a given date is in the weekends or not
function checkWeekendDate(input) {
  if ( input.getDay() === 0 ) return true;
  else if ( input.getDay() === 6 ) return true;
  else return false;
}

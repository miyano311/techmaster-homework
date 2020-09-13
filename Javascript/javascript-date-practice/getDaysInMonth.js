// this function returns the number of days in a given month of a given year
function getDaysInMonth(month, year) {
  var output = 0;
  switch(month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      output = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      output = 30;
      break;
    case 2:
      if (year % 4 === 0) {
        if (year % 100 !== 0 || year % 400 === 0) output = 29; 
      } else output = 28;
      break;
    default:
      output = 0;
  }

  return output;
}

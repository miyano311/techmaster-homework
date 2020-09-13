// this function returns the final date of the month which the given date is in 
function getEndOfMonthDate(input) {
  var newDD = getDaysInMonth(input.getMonth()+1, input.getFullYear());
  var newDate = new Date((input.getMonth()+1) + "/" + newDD + "/" + input.getFullYear());
  return(newDate);
}

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

// this function converts a given number of minutes to HH:MM format
function convertMinutesToBetterFormat(inputMin) {
  var hh = Math.floor(inputMin/60) ;
  var mm = inputMin % 60;
  var output = "";
  if (hh < 10) {
    output = "0" + (hh + ":");
  } else output = hh + ":";
  if (mm < 10) output += "0";
  output += mm;
  return output;
}

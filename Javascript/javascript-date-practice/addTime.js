// this function returns the result of the addition of a given time variable with HH:MM:SS format and a given number of seconds
function addTime(inputTime, additionS) {
  var temp = inputTime.split(":");
  var inputH = parseInt(temp[0],10);
  var inputM = parseInt(temp[1],10);
  var inputS = parseInt(temp[2],10);
  inputH += Math.floor(additionS/60/60);
  inputM += Math.floor((additionS/60)%60);
  inputS += Math.floor(additionS%60%60);

  var output = "";
  if (inputH < 10) output += "0";
  output += inputH + ":";
  if (inputM < 10) output += "0";
  output += inputM + ":";
  if (inputS < 10) output += "0";
  output += inputS;
  return output;
}

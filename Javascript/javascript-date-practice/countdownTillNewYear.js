function countdownTillNewYear() {
  var currentDate = new Date();
  var endOfYearDate = new Date("12/31/" + currentDate.getFullYear());
  var remainingDay = Math.floor((endOfYearDate.getTime() - currentDate.getTime())/1000/60/60/24);
  console.log(remainingDay + " days left until new year comes");
}

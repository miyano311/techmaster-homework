const CURRENT = new Date();
const SAMPLE_DATE_1 = new Date(2020,9,3);
const SAMPLE_DATE_2 = new Date(1980,4,10);

// this function returns the current date in DD/MM/YYYY format
let getCurrentDate = () => {
	let currentDate = new Date();
	return `${currentDate.getDate()}/${currentDate.getMonth()}/${currentDate.getFullYear()}`;
}

console.log(getCurrentDate());

// this function returns the number of days in a given month of a given year
let getDaysInMonth = (month, year) => {
	let output = 0;
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
			break;
	}

	return output;
}

console.log(getDaysInMonth(4,2020));
console.log(getDaysInMonth(2,2018));

// this function checks if a given date is in the weekends or not
let checkWeekendDate = (input) => {
	if ( input.getDay() === 0 ) return true;
	else if ( input.getDay() === 6 ) return true;
	else return false;
}

console.log(checkWeekendDate(CURRENT));
console.log(checkWeekendDate(SAMPLE_DATE_1));

// this function converts a given number of minutes to HH:MM format
let convertMinutesToBetterFormat = (inputMin) => {
	let hh = "";
	let mm = "";
	if (Math.floor(inputMin/60) < 10) hh = `0${Math.floor(inputMin/60)}`;
	else hh = `${Math.floor(inputMin/60)}`;
	if ((inputMin % 60) < 10) mm = `0${(inputMin % 60)}`;
	else mm = `${(inputMin % 60)}`;
	return `${hh}:${mm}`;
}

console.log(convertMinutesToBetterFormat(75));

// this function counts the number of days between the current date and the first date of the current year
let countDays = () => {
	let currentDate = new Date();
	let startOfCurrentYearDate = new Date(currentDate.getFullYear(),0,1);
	return Math.floor((currentDate.getTime() - startOfCurrentYearDate.getTime()) / (1000 * 3600 * 24));
}

console.log(countDays());

// this function calculates the age of a person using a given Date input
let calculateAge = (dob) => {
	let age_dt = new Date(Date.now() - dob.getTime());
	return Math.abs(age_dt.getUTCFullYear() - 1970);
}

console.log(calculateAge(SAMPLE_DATE_2));

// this function returns the date of the first day of the week which the given date is in
let getStartOfWeekDate = (input) => {
	let newDate = new Date(input.getFullYear(),input.getMonth(),input.getDate() - input.getDay()+1);
	return newDate;
}

console.log(getStartOfWeekDate(SAMPLE_DATE_1));

// this function returns the final date of the month which the given date is in 
let getEndOfMonthDate = (input) => {
	let newDate = new Date(input.getFullYear(),input.getMonth(),getDaysInMonth(input.getMonth()+1, input.getFullYear()));
	return newDate;
}

console.log(getEndOfMonthDate(SAMPLE_DATE_1));

// this function returns the number of remaining days until the next year comes
let countdownTillNewYear = () => {
	let currentDate = new Date();
	let endOfYearDate = new Date(currentDate.getFullYear(),11,31);
	return Math.floor((endOfYearDate.getTime() - currentDate.getTime())/1000/60/60/24);
}

console.log(`${countdownTillNewYear()} days left until new year comes`);

// this function returns the result of the addition of a given time variable with HH:MM:SS format and a given number of seconds
let addTime = (inputTime, additionS) => {
	let temp = inputTime.split(":");
	let inputH = parseInt(temp[0],10) + Math.floor(additionS/60/60);
	let inputM = parseInt(temp[1],10) + Math.floor((additionS/60)%60);
	let inputS = parseInt(temp[2],10) + Math.floor(additionS%60%60);
	if (!(inputS < 60)) { inputS -= 60; inputM++; }
	if (!(inputM < 60)) { inputM -= 60; inputH++; }

	if (inputH < 10) inputH = `0${inputH}`;
	if (inputM < 10) inputM = `0${inputM}`;
	if (inputS < 10) inputS = `0${inputS}`;
	return `${inputH}:${inputM}:${inputS}`;
}

console.log(addTime("01:10:30",300));
console.log(addTime("01:50:40",800));
// this function calculates the age of a person using a given Date input
function calculateAge(dob) {
    var diff = Date.now() - dob.getTime();
    var age_dt = new Date(diff);
    var output = Math.abs(age_dt.getUTCFullYear() - 1970);
    return output;
}

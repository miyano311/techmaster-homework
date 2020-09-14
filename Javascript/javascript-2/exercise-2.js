// Create object "user"
var user = {
	name: "John Doe",
	dateOfBirth: "Jan 3, 1999",
	nation: "America",
	location: {
		Lat: 38.8977,
		Lng: 77.0365
	},
	sayHello: function() {
		return "This is " + this.name + " speaking! Good morning motherf*cker!";
	}
};

// A function to calculate age from dateOfBirth property
function calculateUserAge() {
	var birthDate = new Date(user.dateOfBirth);
	var currentDate = new Date();
	var age = currentDate.getFullYear() - birthDate.getFullYear();
	return age;
}
		
// A function to change the location property
function changeUserLocation(newLat, newLng) {
	user.location.Lat = newLat;
	user.location.Lng = newLng
}

console.log(user.sayHello());
console.log("Age: " + calculateUserAge());
console.log(user.location.Lat + ", " + user.location.Lng);
changeUserLocation(77.03, 38.89);
console.log(user.location.Lat + ", " + user.location.Lng);

// the following codes will attempt to add text via "getElementById", and adjust the color and font via "getElementsByTagName"
document.getElementById("test").innerHTML = "sample text"
document.getElementsByTagName("p")[0].style.color = "red";
document.getElementsByTagName("p")[0].style.fontSize = "40px";

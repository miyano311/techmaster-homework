// User class
class User {
	constructor(username, age, address, psw) {
		this.username = username;
		this.age = age;
		this.address = address;
		this.psw = psw;
	}
}

// Get the modal
let modalLogin = document.getElementById('id01');
let modalSignup = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modalLogin) {
		modalLogin.style.display = "none";
	}
	
	if (event.target == modalSignup) {
		modalSignup.style.display = "none";
	}
}

// create an array to store user data
const testArr = [];

// create new user
function createNewUser() {
	alert("New User account successfully created!");
	let tempUser = new User(document.getElementById("signup-username").value,document.getElementById("signup-age").value,document.getElementById("signup-address").value,document.getElementById("signup-password").value);
	
	modalSignup.style.display = "none";
	document.getElementById("signup-username").value = "";
	document.getElementById("signup-age").value = "";
	document.getElementById("signup-address").value = "";
	document.getElementById("signup-password").value = "";
	
	testArr.push(tempUser);
}

// function testStoringUserData() {
	// console.log(testArr);
	// console.log(testArr[0]);
// }

// check if user data exists (for logging in)
function checkExistingUser() {
	let isUser = false;
	let tempUsername = document.getElementById("login-username").value;
	let tempPsw = document.getElementById("login-password").value;
	let i = 0;
	while (i < testArr.length) {
		if (tempUsername === testArr[i].username) {
			isUser = true;
			if (tempPsw === testArr[i].psw) {
				alert("You have successfully logged in!");
				modalLogin.style.display = "none";
				document.getElementById("login-username").value = "";
				document.getElementById("login-password").value = "";
				break;
			} else {
				alert("You enter the wrong password. Please enter the correct one.")
			}
		}
		i++;
	}
	
	if (!(isUser)) alert("Username not found.");
}

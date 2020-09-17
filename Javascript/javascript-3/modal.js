// Get the modal
var modalLogin = document.getElementById('id01');
let modalSignup = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modalLogin) {
	modal.style.display = "none";
	}
}

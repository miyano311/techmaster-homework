const dropdownMenuToggle = document.getElementById("dropdownToggle");
const dropdownMenuBtn = document.querySelector(".btn-drop-menu");
const startBox = document.querySelector(".start-box");
const gameBox = document.querySelector(".game-session-box");
const gameTracker = document.querySelector(".game-tracker");
const timerBox = document.getElementById("timer");
const targetBox = document.querySelector(".typing-target");
let inputBox = document.querySelector(".game-input");

function dropdownToggle() {
	dropdownMenuToggle.classList.toggle("hide");
}

function changeMode(targetMode) {
	dropdownMenuBtn.innerText = targetMode;
}

window.onclick = function(e) {
	if (!e.target.matches(".btn-drop-menu")) {
		if (!dropdownMenuToggle.classList.contains("hide"))
			dropdownToggle();
	}
}

function startingGame() {
	startBox.classList.toggle("hide");
	gameBox.classList.toggle("hide");
	timer(dropdownMenuBtn.innerText);
}
			
function timer(mode) {
	let seconds = 0;
	switch(mode) {
		case "Easy":
			seconds = 121;
			break;
		case "Normal":
			seconds = 91;
			break;
		case "Hard":
			seconds = 76;
			break;
		case "Lunatic":
			seconds = 46;
			break;
	}
	
	let countdown = setInterval(function() {
		seconds--;
		timerBox.innerHTML = `Time left: <span>${seconds}s</span>`;
		if (seconds < 6) timerBox.innerHTML = `Time left: <span class="red-txt">${seconds}s</span>`;
		if (seconds <= 0) {
			clearInterval(countdown);
			
		}
	}, 1000);
}

function isInputCorrect() {
	if (inputBox.value != targetBox.innerText) console.log(false);
	else console.log(true);
}

inputBox.addEventListener("keydown", function(e) {
	if (e.key == "Enter") {
		isInputCorrect();
	}
})

function endGame() {
	
}

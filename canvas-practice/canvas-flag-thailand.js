	// draw the flag of Thailand
	const canvas = document.getElementById("canvas");
	canvas.width = 800;
	canvas.height = 500;
	canvas.style.border = "solid 2px";

	const flagThailand = canvas.getContext("2d");
	flagThailand.fillStyle = "red";
	flagThailand.fillRect(0,0,canvas.width,canvas.height/6);
	flagThailand.fillRect(0,canvas.height/6*5,canvas.width,canvas.height/6);
	flagThailand.fillStyle = "#04124a";
	flagThailand.fillRect(0,canvas.height/3,canvas.width,canvas.height/3);

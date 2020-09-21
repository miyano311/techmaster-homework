	// draw the flag of Vietnam
	const canvas = document.getElementById("canvas");
	canvas.width = 800;
	canvas.height = 500;
	canvas.style.border = "solid 2px";
	canvas.style.backgroundColor = "#ff0000"

	const star = canvas.getContext("2d");
	star.moveTo(400,100);
	star.lineTo(500,400);
	star.lineTo(250,200);
	star.lineTo(550,200);
	star.lineTo(300,400);
	star.lineTo(400,100)
	star.fillStyle = "#fff000";
	star.fill();

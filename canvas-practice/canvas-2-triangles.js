	// draw 2 triangles, 1 black and 1 white
	const canvas = document.getElementById("canvas");
	canvas.width = 800;
	canvas.height = 500;
	canvas.style.border = "solid 2px";

	const line = canvas.getContext("2d");
	line.moveTo(100,100);
	line.lineTo(300,100);
	line.lineTo(100,300);
	line.lineTo(100,100);
	line.fill();
	
	line.moveTo(320,120);
	line.lineTo(320,320);
	line.lineTo(120,320);
	line.lineTo(320,120);
	line.stroke();

	// this function generates a random hex color code
	let generateRandomHexColor = () => {
		return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
	}

	// draw the rectangles at special areas of canvas
	const canvas = document.getElementById("canvas");
	canvas.width = 1300;
	canvas.height = 700;
	canvas.style.border = "solid 2px";
		
	const ctx = canvas.getContext("2d");
	ctx.fillStyle = generateRandomHexColor();
	ctx.fillRect(0,0,200,120);

	ctx.fillStyle = generateRandomHexColor();
	ctx.fillRect(0,canvas.height,180,-100);

	ctx.fillStyle = generateRandomHexColor();
	ctx.fillRect(canvas.width,0,-210,180);

	ctx.fillStyle = generateRandomHexColor();
	ctx.fillRect(canvas.width,canvas.height,-190,-150);

	ctx.fillStyle = generateRandomHexColor();
	ctx.fillRect(canvas.width/2,0,170,110);

	ctx.fillStyle = generateRandomHexColor();
	ctx.fillRect(0,canvas.height/2,160,210);

	ctx.fillStyle = generateRandomHexColor();
	ctx.fillRect(canvas.width/2,canvas.height,200,-140);

	ctx.fillStyle = generateRandomHexColor();
	ctx.fillRect(canvas.width,canvas.height/2,-190,130);

	ctx.fillStyle = generateRandomHexColor();
	ctx.fillRect(canvas.width/4,canvas.height/4,canvas.width/2,canvas.height/2);

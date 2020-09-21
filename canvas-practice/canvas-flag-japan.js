	// draw the flag of Japan in canvas
	const canvas = document.getElementById("canvas");
	canvas.width = 800;
	canvas.height = 500;
	canvas.style.border = "solid 2px";

	const flagJapan = canvas.getContext("2d");
	flagJapan.strokeStyle = "black";
	flagJapan.fillStyle = "red";
	flagJapan.arc(canvas.width/2,canvas.height/2,100,0,2*Math.PI,false);
	flagJapan.stroke();
	flagJapan.fill();

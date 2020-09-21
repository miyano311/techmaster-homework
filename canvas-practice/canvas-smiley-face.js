	// draw a smiley face in canvas
	const canvas = document.getElementById("canvas");
	canvas.width = 800;
	canvas.height = 500;
	canvas.style.border = "solid 2px";

	const smileFace = canvas.getContext("2d");
	smileFace.strokeStyle = "black";
	smileFace.arc(canvas.width/2,canvas.height/2,150,0,2*Math.PI,false);
	smileFace.stroke();
	smileFace.beginPath();
	smileFace.arc(canvas.width/2,canvas.height/2,110,0,Math.PI,false);
	smileFace.stroke();
	smileFace.beginPath();
	smileFace.arc((canvas.width/2)-45,(canvas.height/2)-40,10,0,2*Math.PI,false);
	smileFace.stroke();
	smileFace.beginPath();
	smileFace.arc((canvas.width/2)+45,(canvas.height/2)-40,10,0,2*Math.PI,false);
	smileFace.stroke();

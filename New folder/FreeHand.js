class FreeHand {
	constructor(canvas) {
		this.canvas = canvas;
		this.ctx = canvas.getContext("2d");
		
		this.isDraw = false;
		this.points = [];
		
		this.ctx.lineWidth = 2;
		this.ctx.lineCap = "round";
		this.ctx.lineJoin = "round";
		this.ctx.strokeStyle = "white";
		
		// memory canvas
		this.memCanvas = document.createElement("canvas");
		this.memCtx = this.memCanvas.getContext("2d");
		this.memCanvas.width = canvas.width;
		this.memCanvas.height = canvas.height;
	}
	
	onmousedown(e) {
		this.x = e.offsetX;
		this.y = e.offsetY;
		
		this.points.push({
			x : this.x,
			y : this.y
		});
		
		this.isDraw = true;
	}
	
	onmousemove(e) {
		if(this.isDraw) {
			// if drawing already exists
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
			this.ctx.drawImage(this.memCanvas, 0, 0);
			
			// new drawing
			this.points.push({
				x : e.offsetX,
				y : e.offsetY
			});
			
			this.drawPoints();
		}
	}
	
	onmouseup(e) {
		this.isDraw = false;
		
		this.memCtx.clearRect(0, 0, this.memCanvas.width, this.memCanvas.height);
		this.memCtx.drawImage(this.canvas, 0, 0);
	}
	
	drawPoints() {
		this.ctx.beginPath();
		this.ctx.moveTo(this.points[0].x,this.points[0].y);
		for (let i = 1; i < this.points.length - 1; i++) {
			let c = (this.points[i].x + this.points[i+1].x)/2;
			let d = (this.points[i].y + this.points[i+1].y)/2;
			this.ctx.quadraticCurveTo(this.points[i].x,this.points[i].y,c,d);
		}
		this.ctx.stroke();
	}
	
	clearCanvas() {
		this.memCtx.clearRect(0, 0, this.memCanvas.width, this.memCanvas.height);
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}
}

let canvas = document.getElementById("canvas");
canvas.width = 1200;
canvas.height = 600;
canvas.style.backgroundColor = "#000";
let freehand = new FreeHand(canvas);

canvas.addEventListener("mousedown", function(event){
	freehand.onmousedown(event);
})

canvas.addEventListener("mousemove", function(event){
	freehand.onmousemove(event);
})

canvas.addEventListener("mouseup", function(event){
	freehand.onmouseup(event);
})

deleteAll.addEventListener("click", function(){
	freehand.clearCanvas();
})

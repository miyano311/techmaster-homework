	// draw a chessboard
	const canvas = document.getElementById("canvas");
	canvas.width = 1300;
	canvas.height = 700;
	canvas.style.border = "solid 2px";

	const ctx = canvas.getContext("2d");
	class Rectangle {
		constructor(x, y, width, height, color){
			this.x = x;
			this.y = y;
			this.width = width;
			this.height = height;
			this.color = color;
		}
				
		draw() {
			ctx.beginPath();
			ctx.fillStyle = this.color;
			ctx.rect(this.x, this.y, this.width, this.height);
			ctx.fill();
			}
		}

	let chessBoard = new Rectangle(350, 50, 600, 600, "#fff6a1");
	chessBoard.draw();
	ctx.stroke();
	let chessBoardInner = new Rectangle(410, 110, 480, 480, "#fff6a1");
	chessBoardInner.draw();
	ctx.strokeStyle = "#ff0000";
	ctx.stroke();

	let letterArr = ["A","B","C","D","E","F","G","H"];
	ctx.font = "50px Arial";
	ctx.fillStyle = "#000";
	ctx.textAlign = "center";
	for (let i = 0; i < letterArr.length ; i++) {
		ctx.fillText(letterArr[i], 440+60*i, 100);
		ctx.fillText(letterArr[i], 440+60*i, 100+540);
		ctx.fillText(8-i, 380, 160+60*i);
		ctx.fillText(8-i, 380+540, 160+60*i);
	}
			
	for (let j = 0; j < 4; j++) {
		for (let i = 0; i < 4; i++) {
			let testChessGrid = new Rectangle(470+120*i,110+120*j,60,60,"#ff0000");
			testChessGrid.draw();
			let testChessGrid2 = new Rectangle(410+120*i,170+120*j,60,60,"#ff0000");
			testChessGrid2.draw();
		}
	}

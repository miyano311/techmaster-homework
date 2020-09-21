		const canvas = document.getElementById("test-canvas");
		canvas.width = 1300;
		canvas.height = 700;
		canvas.style.border = "solid 2px";
		
		const ctx = canvas.getContext("2d");
//		ctx.fillStyle = "#000000";	
		// fill the northwest quarter of canvas
//		ctx.rect(0,0,canvas.width/2,canvas.height/2);
		// fill the southwest quarter of canvas
//		ctx.rect(0,canvas.height/2,canvas.width/2,canvas.height/2);
		// fill the northeast quarter of canvas
//		ctx.rect(canvas.width/2,0,canvas.width/2,canvas.height/2);
		// fill the southeast quarter of canvas
//		ctx.rect(canvas.width/2,canvas.height/2,canvas.width/2,canvas.height/2);
		// fill the center of canvas
//		ctx.rect(canvas.width/4,canvas.height/4,canvas.width/2,canvas.height/2);

		// draw the flag of Thailand via canvas
//		const flagThailand = canvas.getContext("2d");
//		flagThailand.fillStyle = "red";
//		flagThailand.fillRect(0,0,canvas.width,canvas.height/6);
//		flagThailand.fillRect(0,canvas.height/6*5,canvas.width,canvas.height/6);
//		flagThailand.fillStyle = "#04124a";
//		flagThailand.fillRect(0,canvas.height/3,canvas.width,canvas.height/3);

		// draw the flag of Japan in canvas
//		const flagJapan = canvas.getContext("2d");
//		flagJapan.strokeStyle = "black";
//		flagJapan.fillStyle = "red";
//		flagJapan.arc(canvas.width/2,canvas.height/2,100,0,2*Math.PI,false);
//		flagJapan.stroke();
//		flagJapan.fill();
		
		// draw a smiley face in canvas
//		const smileFace = canvas.getContext("2d");
//		smileFace.strokeStyle = "black";
//		smileFace.arc(canvas.width/2,canvas.height/2,150,0,2*Math.PI,false);
//		smileFace.stroke();
///		smileFace.beginPath();
//		smileFace.arc(canvas.width/2,canvas.height/2,110,0,Math.PI,false);
//		smileFace.stroke();
//		smileFace.beginPath();
//		smileFace.arc((canvas.width/2)-45,(canvas.height/2)-40,10,0,2*Math.PI,false);
//		smileFace.stroke();
//		smileFace.beginPath();
//		smileFace.arc((canvas.width/2)+45,(canvas.height/2)-40,10,0,2*Math.PI,false);
//		smileFace.stroke();

		// draw lines in canvas
//		const line = canvas.getContext("2d");
//		line.moveTo(100,100);
//		line.lineTo(500,300);
//		line.lineTo(100,300);
//		line.lineTo(100,100);
//		line.stroke();
		
		// insert text in canvas
//		const textbox = canvas.getContext("2d");
		
//		textbox.fillStyle = "red";
//		textbox.shadowColor = "black";
//		textbox.shadowOffsetX = 10;
//		textbox.shadowOffsetY = 10;
//		textbox.shadowBlur = 30;
//		textbox.fillRect(100,100,300,200);

//		textbox.fillStyle = "black";
//		textbox.font = "40pt Calibri";
//		textbox.textAlign = "center";
//		textbox.fillText("Hello World!",400,250);
		

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
		
//		let test = new Rectangle(100,100,400,200,"green");
//		test.draw();
//		let test2 = new Rectangle(600,50,100,300,"purple");
//		test2.draw();


		class Circle {
			constructor(x, y, radius) {
				this.x = x;
				this.y = y;
				this.radius = radius;
				this.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
			}
			
			draw() {
				ctx.beginPath();
				ctx.fillStyle = this.color;
				ctx.strokeStyle = "black";
				ctx.arc(this.x,this.y,this.radius,0,2*Math.PI,false);
				ctx.fill();
				ctx.stroke();
			}
		}
//		let test = new Circle(100,100,50);
//		test.draw();
		
//		let i = 0;
//		while (i < 5) {
//			let tempX = Math.floor(Math.random() * canvas.width);
//			let tempY = Math.floor(Math.random() * canvas.height);
//			let tempRad = Math.floor(Math.random() * 70)+20;
//			let tempCircle = new Circle(tempX, tempY, tempRad);
//			tempCircle.draw();
//			i++;
//		}

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
		
		
		
		
		
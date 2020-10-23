

// let para = $("#para");
// let para1 = $(".para1");
// let paras = $("p");

// console.log(para.html());
// para1.text("sample text");
// para1.html("<input type="text" placeholder="sample input"");

// console.log($(".img").attr("src"));

// $(".btn-change-image").click( function() {
	// console.log("Clicked!");
// /*	$(".img").attr("src", "https://cdn.discordapp.com/emojis/609920619718377532.png?v=1"); */
	// $(".img").toggle();
// })

// $(".button").click(function(){
	// $("p").load("./sample-text-file.txt", function() {
		// $(".button").css("background-color", "red");
	// })
// })

// console.log($("select.dog-selector").innerText);
	let count = 0;


$(".button").click(function(){
	$.ajax({
		type: "GET",
		url: "https://dog.ceo/api/breed/boxer/images",
		dataType: "json",
		success: function(data) {
			$.each(data.message, function(i, ele){
				 if (i > 100) count++;
				$(".box").append(`<img src="${ele}" alt="image"/>`)
				$("img").width("150px")
					.height("auto");
			});
				// console.log(count);
				
			

		},
		error: function(err) {
			console.log(err);
		}
	});
	
})

function generateNumBtn(n) {
	
}


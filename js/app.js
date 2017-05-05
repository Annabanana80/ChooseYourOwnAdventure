$(document).ready(function() {
    // alert("Everything is ready, let's do this");
    $("p").hide();
    $(".choice").hide();
    $("#back").hide();

    $("#start").click(function(){
	console.log("I'm clicked");
	$("#start").hide();
	$("#back").show();
	$("#part1").show();
	$("#button1").show().html("Choose A");
	$("#button2").show().html("Choose B");
	})
	//button to go back
	// $("#back").click(function(){
	// 	//
	// })
	// when the first choice is clicked
	$("#button1").click(function(){
		$("#part1").hide();
		$("#button1").hide();
		$("#button2").hide();
		$("#pt2chA").show();
		$("#button3").show().html("Choose A");
		$("#button4").show().html("Choose B");
	})
	//when the second choice is clicked
	$("#button2").click(function(){
		$("#part1").hide();
		$("#button1").hide();
		$("#button2").hide();
		$("#pt2chB").show();
		$("#button3").show().html("Choose A");
		$("#button4").show().html("Choose B");
	})
	//part 2 1st choice button
	$("#button3").click(function(){
		$("#pt2chA").hide();
		$("#pt2chB").hide();
		$("#button3").hide();
		$("#button4").hide();
		$("#pt3chA").show();
		$("#button5").show().html("Choose A");
		$("#button6").show().html("Choose B");
	})
	//part 2 2nd choice button
	$("#button4").click(function(){
		$("#pt2chA").hide();
		$("#pt2chB").hide();
		$("#button3").hide();
		$("#button4").hide();
		$("#pt3chB").show();
		$("#button5").show().html("Choose A");
		$("#button6").show().html("Choose B");
	})
});



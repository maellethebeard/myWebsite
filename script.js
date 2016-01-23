$(document).ready(function(){
	console.log("Ready ?");
	$( window ).scroll(function() {
		var myScroll = 	$(window).scrollTop();
		myScroll = 1 - myScroll/150;
		$("h1").css("opacity", myScroll);
		console.log(myScroll);

	});
});
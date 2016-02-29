$(document).ready(function(){
	console.log("Ready ?");
	$( window ).scroll(function() {
		var windowsTop = 	$(window).scrollTop();
		var myScrollTitle = 1 - windowsTop/150;
		$("h1").css("opacity", myScrollTitle);
		console.log(windowsTop);

		$('.skills-box').each( function(i){
			var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            	if( bottom_of_window > bottom_of_object ){
                
               	 $(this).delay(i*100).animate({'opacity':'1'},300);
                    
           		 };
        });

	});

});
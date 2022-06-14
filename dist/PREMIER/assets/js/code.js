$(window).on("load", function () {
   
    /* ********************************************************************************** */
    
    $('.loading-overlay .loader').fadeOut(1400, function () {

        $(".loading-overlay .loading-overlay-content").fadeOut(1000);
        
        $(this).parent().fadeOut(1000, function () {

            // Show Scroll
            $("body").css("overflow", "auto");

            $(this).remove();
            
        });
            
	});
	 
});
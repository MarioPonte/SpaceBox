$(document).ready(function(){
    
	$("#btn-scroll-up").hide();
	$(window).scroll(function(){
		if($(this).scrollTop() > 40){
			$("#btn-scroll-up").fadeIn();
		}else{
			$("#btn-scroll-up").fadeOut();
		}
	});
	

});
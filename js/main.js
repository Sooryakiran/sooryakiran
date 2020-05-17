function checkScroll(){
    var startY = $('.navbar').height() * 3; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.navbar').addClass("scrolled");
		$('.navbar').addClass("navbar-light");
		console.log($(window).scrollTop());
    }else{
        $('.navbar').removeClass("scrolled");
		$('.navbar').removeClass("navbar-light");
    }
}

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}

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


function resizeIframe(obj) {
	console.log(obj.contentWindow.document.documentElement.scrollHeight )
	obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
}

function AdjustIFrame(id) {
    var frame = document.getElementById(id);
    var maxW = frame.scrollWidth;
    var minW = maxW;
    var FrameH = 1000; //IFrame starting height
    frame.style.height = FrameH + "px"

    while ((minW == maxW) && FrameH<window.innerHeight) {
        FrameH = FrameH + 1000; //Increment
        frame.style.height = FrameH + "px";
        minW = frame.scrollWidth;
    }
	
}


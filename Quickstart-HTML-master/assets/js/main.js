(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {
		$(".embed-response-ifreme").addClass("embed-response-item");
		$(".carousel-inner .item:first-child").addClass("active");
		$("[data-toggle='tooltip']").tooltip();

		//jQuery sticky navigation
		$(".header-area").sticky({ topSpacing: 0 });


		//jQuery Smooth scroll 
		$('li.smooth-menu a').bind('click', function (event) {
			var $anchor = $(this);
			var headerH = '66';
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
			}, 1200, 'easeInOutQuint');
			event.preventDefault();
		});


		//jQuery Scroll Spy
		$('body').scrollspy({
			target:'.navbar-collapse', offset:95
		});

		//Parallax bg
		 $('.parallax-bg').parallax({imageSrc: ' url(img/ingre-bg.jpg) no-repeat'});

		 //mobile menu start
		 (function ($) {
    "use strict";
    var menu = $(".menu");
$(window).resize(function(){
	$(".menu-toggle").removeClass("active");
	if($(window).innerWidth() > 600){
		menu.show();
	} else {
		menu.hide();
	}
});
$(".menu-toggle").click(function(){
	$(this).toggleClass("active");
	menu.slideToggle();
})
$(".open-submenu").click(function(){
	$(this).toggleClass("active");
	$(this).next("ul").slideToggle();
	$(this).children(".arrow").toggleClass("down up");
});



})(jQuery);
		 //mobile menu end
		 
		 

	});

	jQuery(window).load(function () {

	});
}(jQuery));	
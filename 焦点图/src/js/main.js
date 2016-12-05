$(function(){

	var slideShow = $('.slideshow'),
		ul = slideShow.find('ul'),
		nav = slideShow.find('.nav span'),
		oneWidth = ul.find('li').eq(0).width(),
		prev = slideShow.find('prev'),
		next = slideShow.find('next'),
		timer = null,
		iNow = 0;

	slideShow.hover(function(){
		clearInterval(timer);
	},autoPlay);

	nav.on("click", function(){
		var me = $(this),
			index = me.index();
			iNow = index;
		ul.animate({
			'left':- oneWidth * iNow,
		});
		nav.removeClass('active');
		me.addClass('active');

	});

	autoPlay();
	function autoPlay(){
		timer = setInterval(function(){
			iNow++;
			if(iNow>nav.length-1){
				iNow = 0;
			}
			nav.eq(iNow).trigger('click');

		},2000);
	};

})
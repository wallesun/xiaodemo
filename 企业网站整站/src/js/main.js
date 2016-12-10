$(function(){
	var i = 0;
	var iWidth = $('.hd-banner').find('ul li').width();
	var clone = $('.hd-banner ul li').first().clone();
	$('.hd-banner ul').append(clone);
	var size1 = $('.hd-banner ul li').size();

	for(var j=0;j<size1-1;j++){
		$('.hd-banner p').append('<span></span>');
	}

	$('.hd-banner ul').width(size1*iWidth);
	$('.hd-banner p span').first().addClass('on');
	/*自动轮播*/
	function moveR(){
			if(i==size1){
				$('.hd-banner ul').css({left:0})
				i = 1;
			}
			$('.hd-banner ul').stop().animate({
				left:-i * iWidth ,
			},500);
			if(i==size1-1){
				$('.hd-banner p span').eq(0).addClass('on').siblings().removeClass('on');
			}else{
				$('.hd-banner p span').eq(i).addClass('on').siblings().removeClass('on');
			}
	}

	iTimer = setInterval(function(){
		i++;
		moveR();
	},2000)

	/*划过按钮播放*/
	
	$('.hd-banner p span').hover(function(){
			clearInterval(iTimer);
			$(this).addClass('on').siblings().removeClass('on');
			var index = $(this).index();
			$('.hd-banner ul').stop().animate({
					left:-index * iWidth ,
			},500);
		},function(){
			i = $(this).index();/*此处i不要用var声明成局部变量，*/
			iTimer = setInterval(function(){
				i++;
				moveR();
		},2000);
	});

	/*划过图片停止播放，离开后继续*/
	$('.hd-banner ul li').hover(function(){
			clearInterval(iTimer);
		},function(){
			i = $(this).index();/*此处i不要用var声明成局部变量，*/
			iTimer = setInterval(function(){
				i++;
				moveR();
			},2000);
	});

	/*盐湖风光轮播图*/
	var clone2 = $('.banner .wrap .content li:eq(0),.banner .wrap .content li:eq(1),.banner .wrap .content li:eq(2),.banner .wrap .content li:eq(3)').clone();
	$('.banner .wrap .content ul').append(clone2);
	var size2 = $('.banner .wrap .content li').size();
	var iWidth1 = $('.banner .wrap .content li').width();
	var j = 0;
	console.log(size2);
	function moveLeft(){
		if(j==size2){
			$('.banner .wrap .content ul').css({left:0});
			j = 4;
		};
		$('.banner .wrap .content ul').animate({
			left:-j * (iWidth1 + 7)
		},1000);
	}
	function moveRight(){
		if(j==-4){
			$('.banner .wrap .content ul').css({left:-(size2-4) * iWidth1 + 'px'});
			j = size2-8;
		}
		$('.banner .wrap .content ul').animate({
			left:-j * (iWidth1 + 7)
		},1000);
		
	}
	$('.banner .wrap .arrow-l').click(function(){
		j+=4;
		moveLeft();
	})
	$('.banner .wrap .arrow-r').click(function(){
		j-=4;
		moveRight();
		console.log(j);
	})


})
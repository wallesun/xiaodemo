window.onload = function(){
	var oDiv1 = document.getElementById('div1');
	var oDiv2 = document.getElementById('div2');
	var oImg = document.getElementById('img1');
	var oDiv3 = document.getElementById('div3');
	var oDiv4 = document.getElementById('div4');

	oDiv1.onmouseover = function(){
		startMove(this,'left',0,10);
	}

	oDiv1.onmouseout = function(){
		startMove(this,'left', -100,-10);
	}

	oImg.onmouseover = function(){
		fadeio(this,'opacity', 100,10);
	}
	oImg.onmouseout = function(){
		fadeio(this,'opacity', 40,-10);
	}

	/*侧边栏滑动函数*/
	function startMove(obj,attr,iTarget,iSpeed){
		clearInterval(obj.iTimer);//这样设置定时器格式（obj.iTimer），是为了多个定时器时，互相不干扰
		obj.iTimer = setInterval(function(){
			if(obj.offsetLeft == iTarget){
				clearInterval(obj.iTimer);
			}else{
				obj.style[attr] = obj.offsetLeft + iSpeed + 'px';
			}
		},30);
	}

	/*图片淡入淡出*/
	function fadeio(obj,attr,iTarget,iSpeed){
		clearInterval(obj.iTimer);
		var iCur = 0;

		obj.iTimer = setInterval(function(){
			if(attr == 'opacity'){
				iCur = Math.round(css(obj,'opacity') * 100);
			}else {
				iCur = parseInt(css(obj,attr));
			}
			
			if(iCur == iTarget){
				clearInterval(obj.iTimer);
			}else{
				if(attr == 'opacity'){
					obj.style.opacity = (iCur + iSpeed)/100;
					obj.style.filter = 'alpha(opacity=' + (iCur + iSpeed) + ')';
				}else {
					obj.style[attr] = iCur + iSpeed + 'px';
				}
				
			}

		},30);

	}

	/*图片多值运动变大*/

	oDiv3.onmouseover = function(){
		startMove2(this,{
			width:300,
			height:400,
		},10);
	}
	oDiv3.onmouseout = function(){
		startMove2(this,{
			width:100,
			height:100,
		},-10);
	}
	function startMove2(obj,json,iSpeed){
		clearInterval(obj.iTimer);
		var iCur = 0;

		obj.iTimer = setInterval(function(){
			var iBtn = true;
			for(var attr in json){
				var iTarget = json[attr];
				if(attr == 'opacity') {
					iCur = Math.round(css(obj,'opacity') * 100);
				}else {
					iCur = parseInt(css(obj,attr));
				}
				if(iCur != iTarget) {
					iBtn = false;
					if(attr == 'opacity'){
						obj.style.opacity = (iCur + iSpeed)/100;
						obj.style.filter = 'alpha(opacity=' + (iCur + iSpeed) + ')';
					}else{
						obj.style[attr] = iCur + iSpeed + 'px';
					}
				}
			}
			if(iBtn){
				clearInterval(obj.iTimer);
			}
		})
	}


	/*图形宽高依次变化*/
	oDiv4.onclick = function(){
		startMove3(this,{width:400,},function(){
			startMove3(this,{height:300})
		});
	}


	function startMove3(obj,json,fn){
		clearInterval(obj.iTimer);
		var iCur = 0;
		var iSpeed = 0;


		obj.iTimer = setInterval(function(){
			var iBtn = true;
			for(var attr in json){
				var iTarget = json[attr];
				if(attr == 'opacity') {
					iCur = Math.round(css(obj,'opacity') * 100);
				}else {
					iCur = parseInt(css(obj,attr));
				}
				/*加入速度缓冲算法*/
				iSpeed = (iTarget - iCur)/80;//速度=（目标点-当前值）/比例值
				iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);

				if(iCur != iTarget) {
					iBtn = false;
					if(attr == 'opacity'){
						obj.style.opacity = (iCur + iSpeed)/100;
						obj.style.filter = 'alpha(opacity=' + (iCur + iSpeed) + ')';
					}else{
						obj.style[attr] = iCur + iSpeed + 'px';
					}
				}
			}
			if(iBtn){
				clearInterval(obj.iTimer);
				fn && fn.call(obj);//回调
			}
		})
	}


	/*获取css属性*/
	function css(obj,attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		}else {
			return getComputedStyle(obj,false)[attr];
		}
	}

}
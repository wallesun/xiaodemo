	function startMove(obj,json,fn){
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
				iSpeed = (iTarget - iCur)/4;//速度=（目标点-当前值）/比例值
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
		},30);
	}


	/*获取css属性*/
	function css(obj,attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		}else {
			return getComputedStyle(obj,false)[attr];
		}
	}

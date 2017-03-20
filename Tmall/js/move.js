/*封装运动函数*/
function Move(obj,json){
	clearInterval(obj.iTimer);
	var iSpeed = 0;
	var iCur = 0;
	obj.iTimer = setInterval(function(){
		for(var attr in json){
			var iTarget = json[attr];
			if(attr == 'opacity'){
				iCur = Math.round(css(obj,'opacity')*100);
			}else{
				iCur = parseInt(css(obj,attr));
			}
			iSpeed = (iTarget - iCur)/8;//可以调整速度
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed):Math.floor(iSpeed);
			if(iCur !=iTarget){
				if(attr == 'opacity'){
					obj.style.opacity = (iCur + iSpeed)/100 + 'px';
					obj.style.fliter = 'alpha(opacity='+ (iCur + iSpeed) +')';
				}else{
					obj.style[attr] = iCur + iSpeed + 'px';
				}
			}
		}
	},30);
}
/*获取css样式*/
function css(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];
	}
}
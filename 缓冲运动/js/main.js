window.onload = function(){
	var oBtn = document.getElementById('btn');
	var oDiv = document.getElementById('div1');
	var iTimer = null;

	oBtn.onclick = function() {
		clearInterval(oDiv.iTimer);
		var iSpeed = 0;


		oDiv.iTimer = setInterval(function(){
			iSpeed = (500 - oDiv.offsetLeft ) / 8;
			iSpeed = iSpeed>0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);//为了使得最终位置到所指定点，因为js会自己四舍五入计算造成误差

			if(oDiv.offsetLeft == 500){
				clearInterval(oDiv.iTimer);
			}else{
				oDiv.style.left = oDiv.offsetLeft + iSpeed + 'px';
			}
		},30);
	};
}

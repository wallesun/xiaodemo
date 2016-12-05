window.onload = function(){
	var oUl = document.getElementById('ul1');
	var aImg = document.getElementsByTagName('img');
	var arr = [];
	var zIndex = 1;

	for(var i=0; i<aImg.length;i++){
		arr.push({left:aImg[i].offsetLeft, top:aImg[i].offsetTop});
	}

	for(var i=0;i<aImg.length;i++){
		aImg[i].index = i;
		aImg[i].style.left = arr[i].left + 'px';
		aImg[i].style.top = arr[i].top + 'px';

		aImg[i].style.position = 'absolute';
		aImg[i].style.margin = '0px';
	

		aImg[i].onmouseover = function(){
			this.style.zIndex = zIndex++;

			startMove(this,{
				width:300,
				height:300,
				left:arr[this.index].left - 50,//当前left值减去扩大的值得一半
				top:arr[this.index].top - 50,
			});
		}
		aImg[i].onmouseout = function(){
			this.style.zIndex = zIndex++;

			startMove(this,{
				width:200,
				height:200,
				left:arr[this.index].left,//当前left值减去扩大的值得一半
				top:arr[this.index].top,
			});
		}
	}

}
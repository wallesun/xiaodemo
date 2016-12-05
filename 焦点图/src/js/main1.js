window.onload = function(){
	var oDiv = document.getElementById('div1');
	var aSpan = oDiv.getElementsByTagName('span');
	var oUl = document.getElementById('ul1');
	var aLi = document.getElementsByTagName('li');
	var prev = oDiv.getElementsByClassName('prev')[0];
	var next = oDiv.getElementsByClassName('next')[0];
	var iLen = aSpan.length;
	var iWidth = aLi[0].offsetWidth;
	

	oUl.style.width = (iLen + 1) * iWidth + 'px';	
	for(var i=0;i<iLen;i++){
		aSpan[i].index = i;
		aSpan[i].onclick = function(){
			for(var i=0;i<iLen;i++){
				aSpan[i].className = '';
			}
			this.className = 'current';
			startMove(oUl,{
				left:-this.index * iWidth,
			})
		};
	}
	var n = 0;
	prev.onclick = function(){
			for(var i=0;i<iLen;i++){
				aSpan[i].className = '';
			}
			n++;
			if(n == 6){
				oUl.style.left = 0 + 'px';
				n = 1;
				aSpan[n].className = 'current';
				startMove(oUl,{ 
				left:-n * iWidth,
			});
			}else{
				startMove(oUl,{ 
					left:-n * iWidth,
				});
				if(n==5){
					aSpan[0].className = 'current';
				}
			aSpan[n].className = 'current';
			}
			
		}
	next.onclick = function(){
			for(var i=0;i<iLen;i++){
				aSpan[i].className = '';
			}
			n--;
			if(n == -1){
				oUl.style.left = -5 * iWidth + 'px';
				n = 4;
				aSpan[n].className = 'current';
				startMove(oUl,{ 
				left:-n * iWidth,
			});
			}else{
				startMove(oUl,{ 
					left:-n * iWidth,
				});
				/*if(n==5){
					aSpan[0].className = 'current';
				}*/
			aSpan[n].className = 'current';
			}
			
		}

}
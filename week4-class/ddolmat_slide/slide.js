document.addEventListener("DOMContentLoaded", function(){
	init();
});

function init(){
	var wrap = document.querySelector(".wrap");
	var width = parseInt(window.getComputedStyle(wrap).width);
	var basket = wrap.querySelector(".basket");
	var btn = wrap.querySelector(".btn");
	var overOpacity = 0.7;
	var outOpacity = window.getComputedStyle(btn).opacity;
	//복제하고
	insertClone(basket, width);
	//클릭이벤트 있으면 화면 움직이고
	wrap.addEventListener("click", function(evt){
		moveBox(basket, width, evt.target);
		evt.target.blur();		
	});
	
	wrap.addEventListener("mouseover", function(evt){
		modOpacity(overOpacity, evt.target);
	});
	wrap.addEventListener("mouseout", function(evt){
		modOpacity(outOpacity, evt.target);
	});

}
function insertClone(div, width){
	var len = div.children.length; //화면의 갯수
	var lastClone = div.children[len-1].cloneNode(true); //마지막 화면 복제
	var lastX = -width; // 움직일 화면 크기
	setTrans(lastClone, lastX, ""); //transform으로 화면 이동
	div.insertBefore(lastClone, div.children[0]); //마지막 화면을 제일 처음으로 복제
	var firstClone = div.children[1].cloneNode(true);
	var firstX = width * len;
	setTrans(firstClone, firstX, ""); //첫번쨰 화면 이동
	div.appendChild(firstClone); //첫번째 화면을 마지막으로 복제
}

function setTrans(node, x, tr){
	node.style.transform = "translate3d("+x+"px, 0px, 0px)";
	if(tr === "") return;
	node.style.transition = tr;
}

function moveBox(div, width, evtTarget){
	if(evtTarget.tagName !== "BUTTON") return;
	var boxNum = div.children.length - 2;
	var x = +div.style.transform.replace(/translate3d\((-?\d+).+/, "$1");
	if(evtTarget.id === "left") {
		moveLeft(div, boxNum, x, width);
		return;
	}
	if(evtTarget.id === "right") {
		moveRight(div, boxNum, x, width);
		return;
	}
}

function moveLeft(div, boxNum, x, width){
	if(x === width){
		var mod =  - (boxNum - 1) * width;
		var mod2 = mod + width;
		setTrans(div, mod, "none");
		setTimeout(function(){
			setTrans(div, mod2, "All 1.5s");
		}, 10);
		return;
	}
	x += width;
	setTrans(div, x, "");
	return;
}

function moveRight(div, boxNum, x, width){
	var a = boxNum * width;
	if(x === -a) {
		setTrans(div, 0, "none");
		setTimeout(function(){
			setTrans(div, -width, "All 1.5s");		
		}, 10);
		return;	
		}
	x -= width;
	setTrans(div, x, "");
	return;	
}

function modOpacity(value, evtTarget){
	if(evtTarget.tagName !== "BUTTON") return;
	evtTarget.style.opacity = value;
}

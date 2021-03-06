startPoint = 0;
endPoint = -2400;
oneSlide = 600;

function getCurrentX(){
	var position = document.querySelector(".movePoint").style.transform;
	var pattern = /translate3d\((-?\d+)px,.\d+px,.\d+px\)/
	var currentX = Number(position.replace(/translate3d\((-?\d+)px,.\d+px,.\d+px\)/,"$1"));
	return currentX;
}

function init(){
	document.addEventListener("click",function(evt){
		var positionView = getCurrentX();
		var movePoint = document.querySelector(".movePoint");
		switch(evt.target.className){
			case "leftButton":
				if(positionView < endPoint) return false;
				if(positionView === endPoint){
					var moveString = "transform:translate3d(" + startPoint + "px,0px,0px";
					movePoint.setAttribute("style",moveString);
				}
				else{
				positionView = positionView - oneSlide;
				var moveString = "transform:translate3d(" + positionView + "px,0px,0px";
				movePoint.setAttribute("style",moveString);
				}
			break;
			
			case "rightButton":
				if(positionView > startPoint) return false;
				if(positionView === startPoint){
					var moveString = "transform:translate3d(" + endPoint + "px,0px,0px";
					movePoint.setAttribute("style",moveString);
				}
				else{
					positionView = positionView + oneSlide;
					var moveString = "transform:translate3d(" + positionView + "px,0px,0px";
					movePoint.setAttribute("style",moveString);
				}
			break;
		}

	});
}

//transform 인자값 양식 : "translate3d(-600px, 0px, 0px)"
//transform 정규표현식 : /translate3d\((-?\d+)px,.\d+px,.\d+px\)/
document.addEventListener("DOMContentLoaded", function(){
	init();
});

//(완료)이벤트 델리게이션
//(완료)이벤트 컨텐트로디드 시작지점 작성
//(불가능)CSS파일 파싱하기 -> 웹은 로컬의 파일접근이 불가능함. activeX를 설치하면 가능

//(완료)transform을 인라인으로 변경 -> 좌표값을 전역변수를 사용하지 않고서 구성
//화면 좌표 동그라미 표시
//무한롤링 구성
// --1. 좌표를 1로 돌린다.
// --2. 배열에 위치값을 넣어둔다.
// --3. 
//커서속성 구성

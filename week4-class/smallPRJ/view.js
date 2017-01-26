var VARIABLE = {
	positionView:0
}


function init(){
	document.addEventListener("click",function(evt){
		switch(evt.target.className){
			case "leftButton":
				if(VARIABLE.positionView <= -2400) return false;
				VARIABLE.positionView = VARIABLE.positionView - 600
				var movePoint = document.querySelector(".movePoint");
				var moveString = "transform:translate3d(" + VARIABLE.positionView + "px,0px,0px";
				movePoint.setAttribute("style",moveString);
			break;
			
			case "rightButton":
				if(VARIABLE.positionView >= 0) return false;
				VARIABLE.positionView = VARIABLE.positionView + 600
				var movePoint = document.querySelector(".movePoint");
				var moveString = "transform:translate3d(" + VARIABLE.positionView + "px,0px,0px";
				movePoint.setAttribute("style",moveString);
			break;
		}

	});
}


document.addEventListener("DOMContentLoaded", function(){
	init();
});

//(완료)이벤트 델리게이션
//(완료)이벤트 컨텐트로디드 시작지점 작성
//(불가능)CSS파일 파싱하기

//transform을 인라인으로 변경 -> 좌표값을 전역변수를 사용하지 않고서 구성
//화면 좌표 동그라미 표시
//무한롤링 구성
//커서속성 구성

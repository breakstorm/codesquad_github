//week3-class EVENT실습

var mainTextarea = document.querySelector(".main-write-text");
var currentCount = 0;
var maxCount = 80;
console.log(mainTextarea);

mainTextarea.addEventListener("focus",function(evt){
	var mainArea = evt.target;
	if(mainArea.tagName !== "TEXTAREA") return false;
	mainTextarea.setAttribute("style","background-color:gray");
	//입력공간 옆에 있는 것을 숨기고
	mainTextarea.nextElementSibling.style.visibility = "hidden";
	mainTextarea.nextElementSibling.nextElementSibling.style.visibility = "hidden";
	mainTextarea.nextElementSibling.nextElementSibling.nextElementSibling.style.visibility = "hidden";
	//새로 만들 기능 화면에 표시
	mainTextarea.insertAdjacentHTML("afterend","<button>hello</button>");
	mainTextarea.insertAdjacentHTML("afterend","<p>0 / 80byte </p>");
});

mainTextarea.addEventListener("focusout",function(evt){
	var mainArea = evt.target;
	if(mainArea.tagName !== "TEXTAREA") return false;
	mainTextarea.setAttribute("style","background-color:white");
	//새로 만든 기능을 숨기고 / 삭제
	mainTextarea.parentElement.removeChild(mainTextarea.nextElementSibling);
	//입력한 글자값 삭제
	mainTextarea.value = "";
	//기존에 있던 버튼을 화면에 표
	mainTextarea.nextElementSibling.style.visibility = "visible";
	mainTextarea.nextElementSibling.nextElementSibling.style.visibility = "visible";
	mainTextarea.nextElementSibling.nextElementSibling.nextElementSibling.style.visibility = "visible";
});

mainTextarea.addEventListener("keyup",function(evt){
	var countBoard = mainTextarea.nextElementSibling.nextElementSibling;
	currentCount++;
	//var tempWord = mainTextarea.value;
	countBoard.innerText = currentCount + " / 80byte"
	//mainTextarea.insertAdjacentHTML("afterend","<p>hello</p>");
});
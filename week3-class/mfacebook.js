//week3-class EVENT실습

var mainTextarea = document.querySelector(".main-write-text");
var currentCount = 0;
var maxCount = 80;
console.log(mainTextarea);

//HTML속성값을 변경하는 함수가 필요
//엘리먼트, 속성네임, 속성값



mainTextarea.addEventListener("focus",function(evt){
	var mainArea = evt.target;
	if(mainArea.tagName !== "TEXTAREA") return false;
	mainTextarea.setAttribute("style","background-color:gray");
	//입력공간 옆에 있는 것을 숨기고
	var deleteButton = mainTextarea.nextElementSibling.nextElementSibling
	deleteButton.previousElementSibling.style.display = "none";
	deleteButton.style.display = "none";
	deleteButton.nextElementSibling.style.display = "none";
	//새로 만들 능 화면에 표시
	mainTextarea.insertAdjacentHTML("afterend","<button>취소</button>");
	mainTextarea.insertAdjacentHTML("afterend","<a>0 / 80byte </a>");
});

mainTextarea.addEventListener("focusout",function(evt){
	var mainArea = evt.target;
	
	if(mainArea.tagName !== "TEXTAREA") return false;
	mainTextarea.setAttribute("style","background-color:white");
	//새로 만든 능을 / 삭제
	mainTextarea.parentElement.removeChild(mainTextarea.nextElementSibling);
	mainTextarea.parentElement.removeChild(mainTextarea.nextElementSibling);
	//입력한 글자값 삭제
	mainTextarea.value = "";
	//기존에 있던 버튼을 화면에 표시
	var deleteButton = mainTextarea.nextElementSibling.nextElementSibling;
	console.log(deleteButton);
	//deleteButton.previousElementSibling.setAttribute("style","display:block");
	deleteButton.previousElementSibling.style.display = "";
	deleteButton.style.display = "";
	deleteButton.nextElementSibling.style.display = "";
});

mainTextarea.addEventListener("keyup",function(evt){
	var countBoard = mainTextarea.nextElementSibling;
	var currentCount = mainTextarea.value.length;
	//var tempWord = mainTextarea.value;
	countBoard.innerText = currentCount + " / 80byte"
	//mainTextarea.insertAdjacentHTML("afterend","<p>hello</p>");
	if(currentCount >	 maxCount){
		//alert("글자수가 초과 되었습니다.");
		countBoard.style.color = "red";
	}
	else{
		countBoard.style.color = "black";
	}
});
var oReq = new XMLHttpRequest();
var eleButton = document.querySelector("button");


oReq.addEventListener("load",function(evt){
	var tempObj = evt.target.responseText;
	var parseData = JSON.parse(tempObj);
	var tmepHTML = ""; //오타
	var tempSelect = document.querySelector("dl");
	//var선언 필요.
	for(var i in parseData.owner){
		//마크업이 수정될시 이슈사항 발생.
		tmepHTML = '<dt>'+i+'</dt>' + '<dd>'+parseData.owner[i]+'</dd>';
		tempSelect.insertAdjacentHTML("beforeend",tmepHTML);
	}
});

//추가 과제 oReq.status값 조건분기 작성

eleButton.addEventListener("click",function(evt){
	var btn = evt.target;
	if(btn.tagName !== "BUTTON") return false;
	btn.setAttribute("style","display:none");
	oReq.open("GET", "js/data.json");
	oReq.send();
});
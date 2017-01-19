var oReq = new XMLHttpRequest();
oReq.addEventListener("load",function(evt){
	var tempObj = evt.target.responseText;
	// console.log(evt.target);
	var parseData = JSON.parse(tempObj);
	// console.log(parseData);
	var tmepHTML = "";
	var tempSelect = document.querySelector("dl");
	for(i in parseData.owner){
		tmepHTML = '<dt>'+i+'</dt>' + '<dd>'+parseData.owner[i]+'</dd>';
		tempSelect.insertAdjacentHTML("beforeend",tmepHTML);
	}
});



var eleButton = document.querySelector("button");
eleButton.addEventListener("click",function(evt){
	var btn = evt.target;
	if(btn.tagName !== "BUTTON") return false;
	// var btnParent = btn.parentElement;
	// console.log("hello world");
	btn.setAttribute("style","display:none");
	oReq.open("GET", "js/data.json");
	oReq.send();
	// var tmepHTML = "";
	// var tempSelect = document.querySelector("dl");
	// for(i in parseData.owner){
	// 	tmepHTML = '<dt>'+i+'</dt>' + '<dd>'+parseData.owner[i]+'</dd>';
	// 	tempSelect.insertAdjacentHTML("beforeend",tmepHTML);
	// }
});
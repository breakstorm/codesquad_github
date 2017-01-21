var elePostion = document.querySelector("#position");
var eleFriend = document.querySelector("#friend");
var eleTheme = document.querySelector("#theme");
var eleNews = document.querySelector("#news");

var oReq = new XMLHttpRequest()

oReq.addEventListener("load",function(evt){
	var tempElement = document.querySelector(".eleDisplayShow > ul > li")
	var tempXHRObj = evt.target.responseText;
	var tempXHRText = JSON.parse(tempXHRObj);
	var tempInsertString = '<div>' + tempXHRText["title"] + '</div>' + '<div>' + tempXHRText["body"] + '</div>';
	tempElement.insertAdjacentHTML("beforeend",tempInsertString);
	// for(i in tempResponseText){
	// 	tempInsertString = '<div>'
	// 	console.log(i + tempResponseText[i]);
	// }
})

elePostion.addEventListener("click",function(evt){
	var tempButton = evt.target;
	//if(tempButton.tagName !== "BUTTON") return false;
	oReq.open("GET", "http://jsonplaceholder.typicode.com/posts/1");
	oReq.send();
});


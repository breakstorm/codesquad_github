var elePostion = document.querySelector("#position");
var eleFriend = document.querySelector("#friend");
var eleTheme = document.querySelector("#theme");
var eleNews = document.querySelector("#news");

var oReqPosition = new XMLHttpRequest()
var oReqFriend = new XMLHttpRequest()
var oReqTheme = new XMLHttpRequest()
var oReqNews = new XMLHttpRequest()

//함수를 리팩토링 하는 방법은 없을까?

oReqPosition.addEventListener("load",function(evt){
	var tempElement = document.querySelector(".eleDisplayShow > ul > li")
	if(tempElement.innerText) return false;
	var tempXHRObj = evt.target.responseText;
	var tempXHRText = JSON.parse(tempXHRObj);
	var tempInsertString = '<div>' + tempXHRText["title"] + '</div>' + '<div>' + tempXHRText["body"] + '</div>';
	tempElement.insertAdjacentHTML("beforeend",tempInsertString);
	// for(i in tempResponseText){
	// 	tempInsertString = '<div>'
	// 	console.log(i + tempResponseText[i]);
	// }
});


elePostion.addEventListener("click",function(evt){
	var tempButton = evt.target;
	//if(tempButton.tagName !== "BUTTON") return false;
	oReqPosition.open("GET", "http://jsonplaceholder.typicode.com/posts/1");
	oReqPosition.send();
});


oReqFriend.addEventListener("load",function(evt){
	var tempElement = document.querySelector("#my_friend > ul > li")
	if(tempElement.innerText) return false;
	var tempXHRObj = evt.target.responseText;
	var tempXHRText = JSON.parse(tempXHRObj);
	var tempInsertString = '<div>' + tempXHRText["title"] + '</div>' + '<div>' + tempXHRText["body"] + '</div>';
	tempElement.insertAdjacentHTML("beforeend",tempInsertString);
	// for(i in tempResponseText){
	// 	tempInsertString = '<div>'
	// 	console.log(i + tempResponseText[i]);
	// }
});


eleFriend.addEventListener("click",function(evt){
	var tempButton = evt.target;
	//if(tempButton.tagName !== "BUTTON") return false;
	oReqFriend.open("GET", "http://jsonplaceholder.typicode.com/posts/2");
	oReqFriend.send();
});


oReqTheme.addEventListener("load",function(evt){
	var tempElement = document.querySelector("#my_theme > ul > li")
	if(tempElement.innerText) return false;
	var tempXHRObj = evt.target.responseText;
	var tempXHRText = JSON.parse(tempXHRObj);
	var tempInsertString = '<div>' + tempXHRText["title"] + '</div>' + '<div>' + tempXHRText["body"] + '</div>';
	tempElement.insertAdjacentHTML("beforeend",tempInsertString);
	// for(i in tempResponseText){
	// 	tempInsertString = '<div>'
	// 	console.log(i + tempResponseText[i]);
	// }
});


eleTheme.addEventListener("click",function(evt){
	var tempButton = evt.target;
	//if(tempButton.tagName !== "BUTTON") return false;
	oReqTheme.open("GET", "http://jsonplaceholder.typicode.com/posts/3");
	oReqTheme.send();
});

oReqNews.addEventListener("load",function(evt){
	var tempElement = document.querySelector("#my_news > ul > li")
	if(tempElement.innerText) return false;
	var tempXHRObj = evt.target.responseText;
	var tempXHRText = JSON.parse(tempXHRObj);
	var tempInsertString = '<div>' + tempXHRText["title"] + '</div>' + '<div>' + tempXHRText["body"] + '</div>';
	tempElement.insertAdjacentHTML("beforeend",tempInsertString);
	// for(i in tempResponseText){
	// 	tempInsertString = '<div>'
	// 	console.log(i + tempResponseText[i]);
	// }
});

eleNews.addEventListener("click",function(evt){
	var tempButton = evt.target;
	//if(tempButton.tagName !== "BUTTON") return false;
	oReqNews.open("GET", "http://jsonplaceholder.typicode.com/posts/4");
	oReqNews.send();
});

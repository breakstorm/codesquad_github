var elePostion = document.querySelector("#position");
var eleFriend = document.querySelector("#friend");
var eleTheme = document.querySelector("#theme");
var eleNews = document.querySelector("#news");

var oReqPosition = new XMLHttpRequest()
var oReqFriend = new XMLHttpRequest()
var oReqTheme = new XMLHttpRequest()
var oReqNews = new XMLHttpRequest()

//함수를 리팩토링 하는 방법은 없을까?

function removeTabContent(){
	var tempElement1 = document.querySelector(".navPosition");
	var tempElement2 = document.querySelector(".navFriend");
	var tempElement3 = document.querySelector(".navTheme");
	var tempElement4 = document.querySelector(".navNews");
	if(tempElement1.firstElementChild){
		for(i=0; i<2; i++){
		tempElement1.removeChild(tempElement1.firstElementChild);
		}	
	}
	if(tempElement2.firstElementChild){
		for(i=0; i<2; i++){
		tempElement2.removeChild(tempElement2.firstElementChild);
		}	
	}
	if(tempElement3.firstElementChild){
		for(i=0; i<2; i++){
		tempElement3.removeChild(tempElement3.firstElementChild);
		}	
	}
	if(tempElement4.firstElementChild){
		for(i=0; i<2; i++){
		tempElement4.removeChild(tempElement4.firstElementChild);
		}	
	}
	// for(i=0; i<2; i++){
	// 	tempElement1.removeChild(tempElement1.firstElementChild);
	// 	tempElement2.removeChild(tempElement2.firstElementChild);
	// 	tempElement3.removeChild(tempElement3.firstElementChild);
	// 	tempElement4.removeChild(tempElement4.firstElementChild);
	// }
}

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
	removeTabContent();
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
	removeTabContent();
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
	removeTabContent();
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
	removeTabContent();
	oReqNews.open("GET", "http://jsonplaceholder.typicode.com/posts/4");
	oReqNews.send();
});

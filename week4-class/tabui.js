var listData = [
	{"id":1, "name":"test1", "content":"fjdlaskfj", "like":99, "comment":"['댓글', '대댓글']"},
	{"id":123, "name":"test2", "content":"fjdlaskfj", "like":3, "comment":"['댓글', '대댓글']"},
	{"id":2323, "name":"test3", "content":"fjdlaskfj", "like":229, "comment":"['댓글', '대댓글']"},
	{"id":55, "name":"test4", "content":"fjdlaskfj", "like":11, "comment":"['댓글',	 '대댓글']"}
]

// document.addEventListener("DOM")
var eleTabTop = document.querySelector(".tabTop");
var elePostion = document.querySelector("#position");
var eleFriend = document.querySelector("#friend");
var eleTheme = document.querySelector("#theme");
var eleNews = document.querySelector("#news");
var oReq = new XMLHttpRequest();
// var oReqPosition = new XMLHttpRequest()
// var oReqFriend = new XMLHttpRequest()
// var oReqTheme = new XMLHttpRequest()
// var oReqNews = new XMLHttpRequest()

//함수를 리팩토링 하는 방법은 없을까?

// (글자를 추가하는 함수) (엘리먼트를 구분하는 값 필요)

eleTabTop.addEventListener("click",function(evt){
	// if(evt.target.innerText == elePostion.innerText)
	// 	console.log(evt.target.innerText);
	removeTabContent();
	switch(evt.target){
		case elePostion:
			oReq.addEventListener("load",function(evt){
				var tempElement = document.querySelector(".navPosition");
				// var tempXHRText = JSON.parse(this.responseText);
				// if(!(tempInsertStringPostion))
				// 	var tempInsertStringPostion = '<div>' + tempXHRText["title"] + '</div>' + '<div>' + tempXHRText["body"] + '</div>';
				// tempElement.insertAdjacentHTML("beforeend",tempInsertStringPostion);
				//insertString(tempElement, this.responseText);
				insertString2(tempElement, this.responseText);
			});
			oReq.open("GET", "http://jsonplaceholder.typicode.com/posts/1");
			oReq.send();
			break;
		case eleFriend:
			oReq.addEventListener("load",function(evt){
				var tempElement = document.querySelector(".navFriend");
				var tempXHRText = JSON.parse(evt.target.responseText);
				// if(!(tempInsertStringFriend))
				// {
				// 	// var tempInsertStringFriend = '<div>' + tempXHRText["title"] + '</div>' + '<div>' + tempXHRText["body"] + '</div>';
				// 	var tempInsertStringFriend = "<div>{{title}}</div><div>{{body}}</div>";
				// 	tempInsertStringFriend.replace('{{title}}',tempXHRText["title"]);
				// 	tempInsertStringFriend.replace('{{body}}',tempXHRText["body"]);
				// }
				insertString(tempElement, this.responseText);
				// tempElement.insertAdjacentHTML("beforeend",tempInsertStringFriend);
			});
			oReq.open("GET", "http://jsonplaceholder.typicode.com/posts/2");
			oReq.send();
			break;
		case eleTheme:
			oReq.addEventListener("load",function(evt){
				var tempElement = document.querySelector(".navTheme");
				var tempXHRText = JSON.parse(evt.target.responseText);
				// if(!(tempInsertStringTheme))
				// 	var tempInsertStringTheme = '<div>' + tempXHRText["title"] + '</div>' + '<div>' + tempXHRText["body"] + '</div>';
				// tempElement.insertAdjacentHTML("beforeend",tempInsertStringTheme);
				insertString(tempElement, this.responseText);
			})
			oReq.open("GET", "http://jsonplaceholder.typicode.com/posts/3");
			oReq.send();
			break;
		case eleNews:
			oReq.addEventListener("load",function(evt){
				var tempElement = document.querySelector(".navNews");
				var tempXHRText = JSON.parse(evt.target.responseText);
				// if(!(tempInsertStringNews))
				// 	var tempInsertStringNews = '<div>' + tempXHRText["title"] + '</div>' + '<div>' + tempXHRText["body"] + '</div>';
				// tempElement.insertAdjacentHTML("beforeend",tempInsertStringNews);
				insertString(tempElement, this.responseText);
			})
			oReq.open("GET", "http://jsonplaceholder.typicode.com/posts/4");
			oReq.send();
			break;
	}

});


// function insertString(element, XHRText){
// 	var tempXHRText = JSON.parse(XHRText);
// 	var tempString = "<div>{{title}}</div><div>{{body}}</div>";
// 	tempString = tempString.replace('{{title}}',tempXHRText["title"]);
// 	tempString = tempString.replace('{{body}}',tempXHRText["body"]);

// 	// var tempString = '<div>' + tempXHRText["title"] + '</div>' + '<div>' + tempXHRText["body"] + '</div>';
// 	element.insertAdjacentHTML("beforeend",tempString);
// }


function insertString(element, XHRText){
	var tempXHRText = JSON.parse(XHRText);
	var tempString = document.querySelector("#listTemplate").innerHTML;
	tempString = tempString.replace('{{title}}',tempXHRText["title"])
	.replace('{{body}}',tempXHRText["body"]);
	// tempString = tempString.replace('{{body}}',tempXHRText["body"]);
	// var tempString = '<div>' + tempXHRText["title"] + '</div>' + '<div>' + tempXHRText["body"] + '</div>';
	element.insertAdjacentHTML("beforeend",tempString);
}

function insertString2(element, XHRText){
	var tempXHRText = listData;
	var tempString = document.querySelector("#listData").innerHTML;
	var tempString2 = '';
	for(i in tempXHRText){
	// tempString = tempString.replace('{{body}}',tempXHRText["body"]);
	// var tempString = '<div>' + tempXHRText["title"] + '</div>' + '<div>' + tempXHRText["body"] + '</div>';
	tempString2 = tempString.replace('{{id}}',tempXHRText[i]["id"]).replace('{{name}}',tempXHRText[i]["name"]).replace('{{content}}',tempXHRText[i]["content"]).replace('{{like}}',tempXHRText[i]["like"]).replace('{{comment}}',tempXHRText[i]["comment"]);
	element.insertAdjacentHTML("beforeend",tempString2);
	}
}

function removeTabContent(){
	var tempElement1 = document.querySelector(".navPosition");
	var tempElement2 = document.querySelector(".navFriend");
	var tempElement3 = document.querySelector(".navTheme");
	var tempElement4 = document.querySelector(".navNews");
	length = tempElement1.children.length;
	if(tempElement1.firstElementChild){
		for(i=0; i<length; i++){
		tempElement1.removeChild(tempElement1.firstElementChild);
		}	
	}
	length = tempElement2.children.length;
	if(tempElement2.firstElementChild){
		for(i=0; i<tempElement2.children.length; i++){
		tempElement2.removeChild(tempElement2.firstElementChild);
		}	
	}
	length = tempElement3.children.length;
	if(tempElement3.firstElementChild){
		for(i=0; i<tempElement3.children.length; i++){
		tempElement3.removeChild(tempElement3.firstElementChild);
		}	
	}
	length = tempElement4.children.length;
	if(tempElement4.firstElementChild){
		for(i=0; i<tempElement4.children.length; i++){
		tempElement4.removeChild(tempElement4.firstElementChild);
		}	
	}
}


//////////////////////////////////////////////////////////////////////////////

// oReqPosition.addEventListener("load",function(evt){
// 	var tempElement = document.querySelector(".eleDisplayShow > ul > li")
// 	if(tempElement.innerText) return false;
// 	var tempXHRText = JSON.parse(evt.target.responseText);
// 	var tempInsertString = '<div>' + tempXHRText["title"] + '</div>' + '<div>' + tempXHRText["body"] + '</div>';
// 	tempElement.insertAdjacentHTML("beforeend",tempInsertString);
// });


// elePostion.addEventListener("click",function(evt){
// 	removeTabContent();
// 	oReqPosition.open("GET", "http://jsonplaceholder.typicode.com/posts/1");
// 	oReqPosition.send();
// });


// oReqFriend.addEventListener("load",function(evt){
// 	var tempElement = document.querySelector("#my_friend > ul > li")
// 	if(tempElement.innerText) return false;
// 	var tempXHRText = JSON.parse(evt.target.responseText);
// 	var tempInsertString = '<div>' + tempXHRText["title"] + '</div>' + '<div>' + tempXHRText["body"] + '</div>';
// 	tempElement.insertAdjacentHTML("beforeend",tempInsertString);
// });


// eleFriend.addEventListener("click",function(evt){
// 	removeTabContent();
// 	oReqFriend.open("GET", "http://jsonplaceholder.typicode.com/posts/2");
// 	oReqFriend.send();
// });


// oReqTheme.addEventListener("load",function(evt){
// 	var tempElement = document.querySelector("#my_theme > ul > li")
// 	if(tempElement.innerText) return false;
// 	var tempXHRText = JSON.parse(evt.target.responseText);
// 	var tempInsertString = '<div>' + tempXHRText["title"] + '</div>' + '<div>' + tempXHRText["body"] + '</div>';
// 	tempElement.insertAdjacentHTML("beforeend",tempInsertString);
// });


// eleTheme.addEventListener("click",function(evt){
// 	removeTabContent();
// 	oReqTheme.open("GET", "http://jsonplaceholder.typicode.com/posts/3");
// 	oReqTheme.send();
// });

// oReqNews.addEventListener("load",function(evt){
// 	var tempElement = document.querySelector("#my_news > ul > li")
// 	if(tempElement.innerText) return false;
// 	var tempXHRText = JSON.parse(evt.target.responseText);
// 	var tempInsertString = '<div>' + tempXHRText["title"] + '</div>' + '<div>' + tempXHRText["body"] + '</div>';
// 	tempElement.insertAdjacentHTML("beforeend",tempInsertString);
// });

// eleNews.addEventListener("click",function(evt){
// 	removeTabContent();
// 	oReqNews.open("GET", "http://jsonplaceholder.typicode.com/posts/4");
// 	oReqNews.send();
// });



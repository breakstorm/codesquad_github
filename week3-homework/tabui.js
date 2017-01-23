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
				insertString(tempElement, this.responseText);
			});
			oReq.open("GET", "http://jsonplaceholder.typicode.com/posts/1");
			oReq.send();
			break;
		case eleFriend:
			oReq.addEventListener("load",function(evt){
				var tempElement = document.querySelector(".navFriend");
				var tempXHRText = JSON.parse(evt.target.responseText);
				if(!(tempInsertStringFriend))
					var tempInsertStringFriend = '<div>' + tempXHRText["title"] + '</div>' + '<div>' + tempXHRText["body"] + '</div>';
				tempElement.insertAdjacentHTML("beforeend",tempInsertStringFriend);
			});
			oReq.open("GET", "http://jsonplaceholder.typicode.com/posts/2");
			oReq.send();
			break;
		case eleTheme:
			oReq.addEventListener("load",function(evt){
				var tempElement = document.querySelector(".navTheme");
				var tempXHRText = JSON.parse(evt.target.responseText);
				if(!(tempInsertStringTheme))
					var tempInsertStringTheme = '<div>' + tempXHRText["title"] + '</div>' + '<div>' + tempXHRText["body"] + '</div>';
				tempElement.insertAdjacentHTML("beforeend",tempInsertStringTheme);
			})
			oReq.open("GET", "http://jsonplaceholder.typicode.com/posts/3");
			oReq.send();
			break;
		case eleNews:
			oReq.addEventListener("load",function(evt){
				var tempElement = document.querySelector(".navNews");
				var tempXHRText = JSON.parse(evt.target.responseText);
				if(!(tempInsertStringNews))
					var tempInsertStringNews = '<div>' + tempXHRText["title"] + '</div>' + '<div>' + tempXHRText["body"] + '</div>';
				tempElement.insertAdjacentHTML("beforeend",tempInsertStringNews);
			})
			oReq.open("GET", "http://jsonplaceholder.typicode.com/posts/4");
			oReq.send();
			break;
	}

});


function insertString(element, XHRText){
	var tempXHRText = JSON.parse(XHRText);
	var tempString = '<div>' + tempXHRText["title"] + '</div>' + '<div>' + tempXHRText["body"] + '</div>';
	element.insertAdjacentHTML("beforeend",tempString);
}


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



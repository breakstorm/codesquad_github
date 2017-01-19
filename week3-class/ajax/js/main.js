var oReq = new XMLHttpRequest();
oReq.addEventListener("load",function(evt){
	oReq.open("GET", "js/data.json");
	oReq.send();
	var parseData = JSON.parse(infoSite);
	console.log(parseData);
});

var eleButton = document.querySelector("button");
eleButton.addEventListener("click",function(evt){
	var btn = evt.target;
	if(btn.tagName !== "BUTTON") return false;
	console.log("hello world");
	var infoSite = new XMLHttpRequest();
	infoSite.open("GET", "js/data.json");
	infoSite.send();
	var parseData = JSON.parse(infoSite);
	console.log(parseData);
});
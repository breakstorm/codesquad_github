// 1. Event 실습1

var getMyTA = document.getElementById("myTA");
var getMyTAnlc = document.getElementById("myTAnlc");

getMyTA.addEventListener("click", function(){
    getMyTAnlc.innerText = "";
    getMyTAnlc.insertAdjacentHTML('afterbegin','<button>취소</button>');
});

getMyTAnlc.addEventListener("click", function(){
        getMyTAnlc.innerText = "";
        getMyTAnlc.insertAdjacentHTML('afterbegin','<button>N</button> <button>L</button> <button>C</button>');
});






// 2. Event 실습2

var getHeadTA = document.getElementById("headTA"); //검색창영역을 변수 'getText'로 가져온다
var getWarningText = document.getElementById("warningText");
var maxLength = 20;

var EROR_MSG = {
    msg : "글자 이상입니다!!"
};

getHeadTA.addEventListener("keyup", function(evt) {
    var bin = evt.target;
    var string = bin.value; //검색창영역에 입력된 값을 변수 'string'에 넣는다
    if(string.length >= maxLength)
    	getWarningText.innerText = maxLength + EROR_MSG.msg;
    else
    	getWarningText.innerText = "";
});

// 위의 코드처럼 getElementById를 사용하여 만들려고 했으나 실패하여 아래 코드로 대체합니다.
// html에 'headTA'안에 onkeyup="letterCount()"를 추가하였습니다.

// function letterCount() {
//     var getText = document.getElementById("headTA"); //검색창영역을 변수 'getText'로 가져온다
//     var getWarningText = document.getElementById("warningText");

//     var string = getText.value; //검색창영역에 입력된 값을 변수 'string'에 넣는다
    
//     if(string.length >= 20) {
//     	getWarningText.innerText = "20글자 이상입니다!!";
//     }
//     else
//     	getWarningText.innerText = "";
// }
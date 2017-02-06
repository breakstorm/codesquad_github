//primitive는 값을 전달하고
//derived는 주소값을 전달한다.
//reference 변수인지 아닌지는 어떻게 구별하는가?

var foo = function(a){
	a++;
	console.log(a);
}

let a = 10;
foo(a);
//call by value

console.log(a);


///////////////////////////////////////////////////////////////

var foo2 = function(a){
	a.push(255);
}

var b = [1,2,3];
console.log(b);
//call by reference
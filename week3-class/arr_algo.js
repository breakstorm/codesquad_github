arr = [1,2,2,1,2,3,4,5443,5,345,43,2,542,314,123,43,4,324,215,435,346,457,567,678,78,5678,657,3,5,345,2345,145,14,5,122,13,12,3,31,24,5,6,743,7,6,78,9,9,0,5,6,45,234,542,5,3,2,41,431,3];
//console.log(arr.length);


//문제1.주어진 배열의 최대값
//풀이방법1. 단순 비교
//풀이방법2. 정렬 이후 선택 비교
//풀이방법1
var temp_max = arr[0];
for(i in arr){
	if(arr[i] > temp_max){
		temp_max = arr[i];
	}
}
//검증함수
Array.prototype.max = function() {
  return Math.max.apply(null, this);
};
temp = arr.max();
console.log(temp);
console.log(temp_max);

//문제2.배열을 뒤집어서 리턴
//풀이방법1. 임시배열에 값을 한개씩 넣는다.
//풀이방법2. 앞,뒤를 바꾸는 방법
//풀이방법1
var temp_arr = [];
var temp_arr_length = 0;
for(i in arr){
	temp_arr_length++;
}
temp_arr_length--;
for(i=0; i < temp_arr_length; i++){
	temp_arr[i] = arr[temp_arr_length-i-1];
}
console.log(temp_arr);

//문제3. 중복된 원소가 찾기
//풀이방법1.값을 한개씩 비교
//풀이방법2.인덱스 표시
for(i=0; i < arr.length; i++){
	for(j=i+1; j < arr.length; j++){
		if(arr[i] === arr[j])
			console.log(arr[i])
			return arr[i];
	}
}

for(i= 0; i < arr.length; i++){
	if(!!arr2[i])
		return arr[i];
	else{
		arr[arr2[i]] = 1;
	}
}
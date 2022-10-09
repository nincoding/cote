
//함수 선언 - 정의 부분
// 이런 함수가 있고 -선언
// 이 함수는 이런일을 합니다. -정의
function divide(num1, num2){
    let result = num1 % num2;

    return result;
};



// 1을 2로 나눈 나머지는?
let result = divide(1, 2); // 함수의 사용부분 호출부분 실제 함수 콜이 일어나는 부분 // 함수를 가져다가 쓰기만 하면 됨
console.log(result);

// 2를 3으로 나눈 나머지는?
result = divide(2, 3);
console.log(result);


// 10을 3으로 나눈 나머지는?
result = divide(10, 3);
console.log(result);
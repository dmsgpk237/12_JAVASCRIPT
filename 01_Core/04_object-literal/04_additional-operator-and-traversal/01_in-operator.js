// in 연산자
// 프로퍼티 존재 여부를 확인할 때 사용

var student = {
    name : '유관순',
    age : 16,
    test : undefined,
};

console.log(student.height === undefined); //존재하지 않아서 true
console.log(student.name === undefined); //존재해서 false

console.log(student.test === undefined); // true -> 존재하지 않는다.

// test 프로퍼티는,
// 프로퍼티는 존재하지만 undefined 값이라 true 라고 나온다. 존재하지 않는다고 판별되는 문제가 생긴다.


console.log("=========================");

// 이 헷갈리는 문제를 해결하는 in 연산자
console.log("name" in student); // name이라는 property가 student 안에 있니?
console.log("height" in student); // false
console.log("test" in student); // true





// [[Prototype]]

const user = {
    activete : true,
    login : function(){
        console.log('로그인이 되었습니다.');
    }
}

const student = {
    passion : true
}

// .__proto__ : [[Prototype]]의 getter, setter이다.(요즘에는 잘 사용하지 않음)
// 요즘에는 이렇게 씀 : 함수 Object.getPrototypeOf or Object.setProtorypeOf
// 이 두 메소드를 통해 get, set 한다.

// student가 user를 상속받게 하는 방법
student.__proto__ = user;

console.log(student.activete);

student.login();

console.log(student.passion);

console.log('--------------프로토 타입 체인----------------');

// 프로토 타입 체인
const greedyStudent = {
    class : 11,
    __proto__: student
}

console.log(greedyStudent.activete); // user
console.log(greedyStudent.passion); // student

/* 
프로토 타입 체이닝은 순환참조가 허용되지 않는다.
__proto__의 값은 객체 또는 null만 가능하며 다른 자료형은 무시된다.
*/





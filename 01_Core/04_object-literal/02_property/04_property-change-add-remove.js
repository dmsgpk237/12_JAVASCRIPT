var dog = {
    name : '구찌'
};

// 이미 존재하는 property에 값을 할당하면 property 값이 갱신된다.
dog.name = '가린';
// dog['name'] = '가린';
console.log(dog);

// peoperty 동적 추가 : 존재하지 않는 property에 값을 할당하면 
// property가 동적으로 생성되어 추가되고 값이 할당된다.
dog.age = 3;
console.log(dog);

// property 삭제 (delete 연산자)
delete dog.age;
console.log(dog);

// 존재하지 않는 프로퍼티를 삭제하면 에러 없이 무시된다.
delete dog.somthing;
console.log(dog);


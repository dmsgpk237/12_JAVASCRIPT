// 스프레드 문법을 이용한 배열, 객체 복사
// 받아온 데이터를 사용할때, 원본을 건들이지 않고, 값만 가져와서 사용하기위해
// 객체 복사를 많이 진행하는데, 이때 스프레드 문법을 통해 편하게 할 수 있다.


let arr = [10, 20, 30]

let arrCopy = [arr[0], arr[1], arr[2]]

let arrCopyS = [...arr];

console.log(arr);
console.log(arrCopyS);

// 값만 복사하는 것이기 때문에 false가 나옴
console.log(arr === arrCopy); // false


// 복사본에 값을 추가
arrCopyS.push(50);
console.log(arrCopyS);


// 스프레드 문법 => 이터러블이어야 하지만, 일반 객체를 대상으로도 허용
let obj = {
    name : '홍길동',
    age : 20,
}

let objCopy = { ...obj};

console.log(obj);
console.log(objCopy);

console.log(obj === objCopy); // false

objCopy.age = 30;
console.log(obj);
console.log(objCopy);


/*
스프레드문법 : 
- 배열을 목록으로 확장함. ...이 호출 시, 배열이나 객체 리터럴 내부에 사용된다.

나머지 매개변수 : 
인수 목록의 나머지를 배열로 모아준다. ...이 함수의 매개변수 끝에 있다
*/
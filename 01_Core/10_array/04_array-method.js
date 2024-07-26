// 배열 메소드

const arr = [];

// 배열의 생성자 함수 = Array
console.log(arr.constructor === Array);

// 배열의 프로토타입 객체 = Array.prototype
console.log(Object.getPrototypeOf(arr) === Array.prototype);

/* 
Array.prototype.indexOf
- indexOf : 배열에서 요소가 위치한 인덱스를 리턴(같은 값이 있다면 앞에 있는 걸 가지고 온다.)
- lastIndexOf : 배열의 요소가 위치한 마지막 인덱스를 리턴
- includes : 배열에 해당 요소 포함 여부를 리턴
*/

const foodList = ['물회', '삼계탕', '냉면', '수박', '물회'];
console.log('-----------indexOf-----------');
console.log(`foodList.indexOf('물회') : ${foodList.indexOf('물회')}`); // 0
//중복값 중 두 번째 위치 반환
console.log(`foodList.indexOf('물회', 1) : ${foodList.indexOf('물회', 1)}`); // 4
console.log(`foodList.indexOf('삼겹살') : ${foodList.indexOf('삼겹살')}`); // -1


console.log('-----------LastIndexOf-----------');
console.log(`foodList.lastIndexOf('물회') : ${foodList.lastIndexOf('물회')}`); // 4
console.log(`foodList.lastIndexOf('물회', 1) : ${foodList.lastIndexOf('물회', 1)}`); // 0
console.log(`foodList.lastIndexOf('삼겹살') : ${foodList.lastIndexOf('삼겹살')}`); // -1


console.log('-----------includes-----------');
console.log(`foodList.includes('물회') : ${foodList.includes('물회')}`); // true
console.log(`foodList.includes('삼겹살') : ${foodList.includes('삼겹살')}`); // false

/* 
Array.prototype.push : 배열의 맨 뒤에 요소를 추가
Array.prototype.pop : 배열의 맨 뒤에 요소를 제거
*/

const chineseFood = ['짜장면', ' 짬뽕', ' 우동'];

console.log('-----------push-----------');
console.log(`push 전 chineseFood : ${chineseFood}`);

// chineseFood.push(' 탕수육');
// chineseFood.push(' 양장피');

chineseFood.push(' 탕수육', ' 양장피');

console.log(`push 후 chineseFood : ${chineseFood}`);

console.log('-----------pop-----------');

console.log(`chineseFood.pop() : ${chineseFood.pop()}`);
console.log(`chineseFood.pop() : ${chineseFood.pop()}`);
console.log(`chineseFood.pop() : ${chineseFood.pop()}`);

console.log(`pop 후 chineseFood : ${chineseFood}`);

// Array.prototype.unshift : 배열의 맨 앞에 요소 추가
// Array.prototype.shift : 배열의 맨 앞 요소 제거 후 반환

const chickenList = ['구도로통닭', '황금올리브', '파닭', '굽네볼케이노'];

console.log('-----------unshift-----------');

console.log(`unshift 전 chickenList : ${chickenList}`);

chickenList.unshift('교촌허니콤보');
chickenList.unshift('교촌레드콤보');

console.log(`unshift 후 chickenList : ${chickenList}`);

console.log('-----------shift-----------');

console.log(`chickenList.shift() : ${chickenList.shift()}`);
console.log(`chickenList.shift() : ${chickenList.shift()}`);
console.log(`chickenList.shift() : ${chickenList.shift()}`);

console.log(`shift 후 chickenList : ${chickenList}`);

console.log('-----------concat-----------');
// Array.prototype.concat : 두 개 이상의 배열을 결합
const idol1 = ['아이브', '오마이걸'];
const idol2 = ['트와이스', '레드벨벳'];
const idol3 = ['블랙핑크', '에스파'];

// 배열명.concat(배열명1, 배열명2, ...)
const mix = idol1.concat(idol2); // idol1 기준으로 합쳐짐
const mix2 = idol3.concat(idol1, idol2); // idol3 기준으로 합쳐짐

console.log(`${mix}`);
console.log(`${mix2}`);

console.log('-----------slice-----------');
// Array.prototype.slice : 배열의 요소 선택 잘라내기

const front = ['HTML', 'CSS', 'JavaScript', 'JQuery'];

// slice(시작인덱스, 종료인덱스)
console.log(`front.slice(1, 3) : ${front.slice(1, 3)}`); // CSS,JavaScript
console.log(`front : ${front}`); // HTML,CSS,JavaScript,JQuery

console.log('-----------join-----------');
// Array.prototype.join : 배열을 구분자로 결합하여 문자열로 반환
const snackList = ['사탕', '초콜릿', '껌', '과자'];

console.log(`snackList.join : ${snackList.join()}`); // 구분자 지정 안 하면 , 로 연결
console.log(`snackList.join : ${snackList.join('/')}`); // 구분자 /

console.log('-----------reverse-----------');
// Array.prototype.reverse : 배열의 순서를 뒤집음.
console.log(`[1, 2, 3, 4, 5].reverse : ${[1, 2, 3, 4, 5].reverse()}`);










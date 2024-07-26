/* 
배열 고차함수
고차함수 : 함수를 인수로 전달받거나 함수를 반환하는 함수
 */

// Array.prototype.sort : 배열을 정렬 기준으로 정렬

let numbers = [];

// 10개의 1-100 까지 정수를 numbers 배열에 담아준다. 
for (let i = 0; i < 10; i ++) {
    numbers[i] = Math.floor(Math.random() * 100) + 1;
    // 반내림처리(int로 형변환을 해주지 않아도 됨.)
}
console.log(`정렬전 numbers : ${numbers}`);

numbers.sort(); // 정렬

// 배열이 기본적으로 문자열 정렬이 되므로, 한 자리수, 세 자리수가 올바르게 정렬되지 않음.
console.log(`정렬 후 numbers : ${numbers}`);

// 오름차순
console.log('-----------오름차순-----------');
function compare(a, b) {
    if( a > b ) return 1; // a를 b보다 뒤에 위치시킴
    if( 1 == b ) return 0; // a와 b의 순서를 변경하지 않음
    if( a < b ) return -1; // a를 b보다 앞에 위치시킴
}

numbers.sort(compare);

console.log(`compare 정렬 후 numbers : ${numbers}`);

console.log('-----------내림차순-----------');
numbers.sort((a,b) => b-a);
console.log(`정렬후 numbers : ${numbers}`);

// Array.prototype.forEach : for 대체할 수 있는 고차함수

/* 
함수형 프로그래밍
순수 함수와 보조 함수의 조합을 통해 로직 내에 존재하는 조건문과 반복문을
제거하여 복잡성을 해결하고 변수의 사용을 억제하여 상태 변경을 피하려는 프로그래밍 패러다임
*/

// numbers = [1, 2, 3, 4, 5];
// for(let i = 0; i < numbers.length; i ++) {
//     // 하나하나 꺼내는 출력
// }
// 이렇게 for문을 많이 사용했을 경우 복잡하니까
// 함수형 프로그래밍에서는 for문을 사용하지 않고 쓸 수 있게 하자 이런 의미에 나왔음.

// 배열.forEach(function(item, index, array) {배열의 각 요소에 실행할 기능 작성})
console.log('-----------forEach-----------');

numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(item, index, array){
    console.log(`item : ${item}`);
    console.log(`index : ${index}`);
    console.log(`array : ${array}`);
})

console.log('-----------Item * 10-----------');

// 각 요소 별로 * 10 한 값을 출력
numbers.forEach(item => console.log(item * 10))

// Array.prototype.map : 배열 요소 전체를 대상으로 콜백 함수 호출 후 
//                       반환 값들로 구성된 새로운 배열 반환

// 콜백함수 : 다른 함수의 내부로 전달되는 함수
const types = [true, 1, 'text'].map(item => typeof item);
console.log(`types : ${types}`);


const length = ['apple', 'banana', 'cat', 'dog', 'egg'].map(item => item.length);
console.log(`length : ${length}`);

// Array.prototype.filter : 배열 요소 전체를 대상으로 콜백 함수 호출 후 
//                          반환값이 true로 구성된 새로운 배열을 반환

// 자바 스크립트에서는 조건문에 % 2 -> 짝수면 0 홀수면 1 (0이면 false 1이면 ture)
const odds = numbers.filter(item => item % 2);
console.log(odds);

const even = numbers.filter(item => !(item % 2));
// const even = numbers.filter(item => item % 2 === 0);
console.log(even);

console.log('-----------some-----------');

// Array.prototype.some : 배열 내 일부 요소가 콜백 함수의 테스트를 통과하는지 확인(Boolean 반환)

// 배열 내 요소 중 1-보다 큰 값이 1개 이상 존재하는지
let result = [1, 6, 4, 2, 3].some(item => item > 10);
console.log(result);

let result2 = [1, 6, 4, 2, 3].some(item => item > 3);
console.log(result2);

arr1 = ['apple', 'banana', 'cat', 'dog']

//이 배열에서 egg가 존재하는지 확인하는 코드
result3 = arr1.some(item => item === 'egg');
console.log(result3);

result3 = arr1.some(item => item === 'dog');
console.log(result3);

console.log('-----------every-----------');

// Array.prototype.every : 배열 내 모든 요소가 콜백함수의 테스트를 통과하는지 확인(Boolean)

// 배열 내 모든 요소가 3보다 큰지 확인
result = [1, 6, 4, 2, 3].every(item => item > 3);
console.log(result);

result = [1, 6, 4, 2, 3].every(item => item > 0);
console.log(result);

// Array.prototype.find : 배열을 순회하며 각 요소에 대해 인자로 주어진
// 콜백함수를 실행하고 그 결과가 참인 첫 번째 요소를 반환한다. 
// 만약, 참인 요소가 존재하지 않으면 undefined를 반환한다.

// Array.prototype.findIndex : 배열을 순회하며 각 요소에 대해 인자로 주어진
// 콜백함수를 실행하고 그 결과가 참인 첫 번째 요소의 인덱스를 반환한다. 
// 만약, 참인 요소가 존재하지 않으면 -1를 반환한다.

console.log('-----------find, findIndex-----------');

const students = [
    {name : '유관순', score : 90},
    {name : '홍길동', score : 80},
    {name : '장보고', score : 70},
];

result = students.find(item => item.name === '유관순');
console.log(result); // { name: '유관순', score: 90 }

result = students.findIndex(item => item.name === '유관순');
console.log(result); // 0(번 인덱스)

console.log('-----------.-----------');

result = students.find(item => item.name === '신사임당');
console.log(result); // undefined

result = students.findIndex(item => item.name === '신사임당');
console.log(result); // -1

/* 
find, findIndex는 일치하는 요소를 찾으면 더 이상 탐색하지 않음 
하나의 요소 또는 하나의 인덱스만 반환함.
60점 이상의 score를 전부 알고 싶으면? filter를 사용하면 됨.
filter는 콜백 함수의 실행결과가 true인 배열 요소 값만 추출해서 배열로 반환해줌.
*/

console.log('-----------filter, find 비교-----------');
result = students.find(item => item.score >= 80);
console.log(result);
result = students.filter(item => item.score >= 80);
console.log(result);








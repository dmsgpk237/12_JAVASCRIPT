/* 
s(dotAll) : 점(.) 문자가 개행 문자를 포함한 모든 문자를 매치하도록 한다.
u(unicode) : 유니코드 전체를 지원하여 유니코드 코드 포인트를 정확히 매치할 수 있게 한다.
y(sticky) : 현재 위치에서만 검색을 수행하며, lastIndex 속성에서 지정한 위치부터 검색을 시작한다. 일치하지 않으면 실패한다.
*/
/* 
s(dotAll) : 점(.) 문자가 개행 문자를 포함한 모든 문자를 매치하도록 한다.
u(unicode) : 유니코드 전체를 지원하여 유니코드 코드 포인트를 정확히 매치할 수 있게 한다.
y(sticky) : 현재 위치에서만 검색을 수행하며, lastIndex 속성에서 지정한 위치부터 검색을 시작한다. 일치하지 않으면 실패한다.
*/

console.log('-----------flag-----------');

let target = 'Java JavaScript'

console.log(target.match(/VA/));
console.log(target.match(/VA/i));
console.log(target.match(/VA/ig));

/* 
Pattern
특별한 의미를 가지는 메타문자 또는 기호로 표현할 수 있다.
*/

console.log('-----------pattern-----------');

// . : 임의의 문자열
target = 'abcdefg';

// 임의의 2자리 문자열 전역 검색
console.log(target.match(/../g));
console.log('----------------------');

//{m,n} : 최소 m번 최대 n번 반복되는 문자열
target = 'a aa aaa b bb bbb ab aab abb';
console.log(target.match(/a{2,3}/g)); // a가 최소 2-3번 반복되는 문자
console.log(target.match(/b{2}/g)); // b가 두 번 반복되는 문자 
console.log(target.match(/b{2,}/g)); // b가 두 번이상 반복되는 문자 

console.log('----------------------');
// +는 {1,} = 최소 1번 이상 반복
console.log(target.match(/b+/g));

console.log('-----------?-----------');
// ? : 앞선 패턴이 최대 한 번(0번 포함) 이상 반복되는 문자열
target = 'soul seoul';

// s를 찾고, 다음 e가 최대 한 번(0번 포함) 이상 반복되고 뒤에 oul이 이어지는 문자열 전역 검색
console.log(target.match(/se?oul/g)); // s를 찾고 e가 있거나 없거나, 그 뒤에 oul을 찾는다.

console.log('-----------|-----------');
// | : or 
target = 'aa bb cc dd 123 456 _@ A BBB';
console.log(target.match(/a|b/g)); // a 또는 b가 포함된 문자를 찾아온다.
console.log(target.match(/a+|b+/g)); // [ 'aa', 'bb' ]

// [] 내의 문자는 or로 동작 : a or b or c
console.log(target.match(/[abc]+/g));

// - 범위를 지정할 때 사용함 : a부터 z까지
console.log(target.match(/[a-z]+/g));

// 대소문자 범위
console.log(target.match(/[A-Za-z]+/g));

// 숫자 범위
console.log(target.match(/[0-9]+/g));

// \d : 숫자
// \D : 숫자가 아닌 문자
console.log(target.match(/\d+/g));
console.log(target.match(/\D+/g));

console.log('-----------\w\W-----------');
// \w : 알파벳, 숫자, 언더스코어
// \W : \W 제외한 나머지

console.log(target.match(/\w+/g));
console.log(target.match(/\W+/g));

console.log('----------- [...] 내의 ^ -----------');
// [...] 내의 ^ : not
console.log(target.match(/[^0-9]+/g)); // 숫자가 아닌
console.log(target.match(/[^a-z]+/g)); // 영어 소문자가 아닌

console.log('-----------시작 위치와 마지막 위치-----------');

// 시작위치 검색 : [...] 밖의 ^
// 마지막 위치 검색 : $

target = 'https://www,google.com';
console.log(/^https/.test(target)); // https로 시작하는지 검사

console.log(/com$/.test(target)); // com으로 끝나는지 검사







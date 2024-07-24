/*
객체는 프로퍼티의 집합이며,
프로퍼티는 키와 값으로 구성
*/

/*
property key

- 빈 문자열을 포함하는 모든 문자열 또는 심벌 값 => property에 접근하기 위한 식별자
- 문자열이기 때문에 따옴표를 사용한다. 
    하지만 식별자 네이밍 규칙을 따르는 경우 사용하지 않아도 된다.
- 단 식별자 네이밍 규칙을 따르지 않으면, 반드시 따옴표를 사용해야 하며, 따르는 것이 권장된다.

property value

- 자바 스크립트에서 사용할 수 있는 모든 값
- 
*/

/*
식별자 네이밍 규칙
1. 식별자는 특수문자를 제외한 문자, 숫자, 언더스코어(_), 달러 기호($)를 포함할 수 있다.
2. 단, 숫자로 시작하는 것은 허용되지 않는다.
3. 예약어는 식별자로 사용할 수 없다.
*/

var obj = {
    normal : 'normal value',
    '@ s p a c e @' : 'space value', // 특수기호를 사용하는 경우, ''따옴표를 써야함.
    '' : '', // 빈 문자열 키도 오류를 발생시키지는 않지만, 권장되지 않음.
    0 : 1, // 숫자로 시작하는 게 안 되기 때문에 숫자 키는 내부적으로 문자열로 변환되어 적용된다.
    var : 'var', // 예약어 키도 오류 발생되지 않지만, 권장하지는 않음.
    normal : 'new Value' // 존재하는 키를 중복해서 선언하면 나중에 선언된 프로퍼티가 적용된다.
};  

console.log(obj);

// 프로퍼티 키 동적 생성
var key = 'test';
obj[key] = 'test value';
console.log(obj);









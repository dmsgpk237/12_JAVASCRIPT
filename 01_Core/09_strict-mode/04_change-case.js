// 변화 상황

// 1. 일반 함수의 this
(function() {
    // 엄격모드에서는 일반 함수의 this 사용을 제한하고 생성자 함수의 this만 허용한다.
    'use strict'
    function test() {
        console.log(this);
        
    }
    test(); // undefined

    new test();  // test{}
}())


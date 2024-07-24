// 재귀 함수
// 함수가 자기 자신을 호출하는 것을 재귀 호출이라고 한다.
// 재기 호출을 수행하는 함수인 재귀 함수는 반복되는 처리를 위해 사용한다.

// n! = 1 * 2 * ... * (n-1) * n;
function facorial(n) {
    if(n <= 1) return 1;

    return 1 * facorial(n-1);
}


console.log(facorial(1));
console.log(facorial(2));
console.log(facorial(3));
console.log(facorial(4));
console.log(facorial(5));

/* 
재귀 함수는 반복되는 처리를 반복문 없이 구현할 수 있는 장점이 있지만
무한 반복에 빠져 스택 오버 플로우 에러를 발생 시킬 수 있으므로 주의해야 한다.
반복문보다 재귀 함수 사용이 더 직관적일 때만 사용하는 것이 바람직하다.
 */
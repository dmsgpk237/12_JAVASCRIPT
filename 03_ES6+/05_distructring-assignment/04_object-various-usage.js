

// 객체에 존재하지 않는 프로퍼티는 기본 값을 설정해서 사용 할 수 있다.
// 또한 콜론과 할당을 동시에 사용 가능하다.
let shirts = {
    productName : '베이직셔츠',
};

let {
    productName: productName2 = '어떤 상품',
    color : color2 = '어떤 색상',
    price : price2 = 0,
} = shirts

console.log(`productName2 : ${productName2}`);
console.log(`color2 : ${color2}`);
console.log(`price2 : ${price2}`);


// 프로퍼티가 많은 객체에서 원하는 정보만 뽑기 가능
let pants = {
    productName : '배기팬츠',
    color: '검정색',
    price: 30000
}

// pants에서 productName만 변수로 뽑아내기
let { productName : productName3} = pants;
console.log(`productName3 : ${productName3}`);

// rest parameter ...로 나머지 요소를 한번에 가져올 수 있다.
let { productName : productName4, ...rest} = pants;

console.log(`productName4 : ${productName4}`);
console.log(`rest : ${rest.color}`);
console.log(`rest : ${rest.price}`);

// let 없이 객체 구조분해 할당을 하는 예시

// 코드블럭으로 인식해 오류 발생
// {
//     productName: productName5 = '어떤 상품',
//     color : color5 = '어떤 색상',
//     price : price5 = 0,
// } = shirts

({
    productName: productName5 = '어떤 상품',
    color : color5 = '어떤 색상',
    price : price5 = 0,
} = shirts) // 소괄호로 감싸주면 오류가 발생하지 않음

console.log(`productName5 : ${productName5}`);
console.log(`color5 : ${color5}`);
console.log(`price5 : ${price5}`);
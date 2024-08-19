// 함수의 매개변수가 많거나, 매개변수 기본값이 필요할때 사용 가능

// function displayProduct(producer = '아무개', width = 0, height= 0, items = []){

// }
// 인수의 순서가 고정되어 순서가 바뀌면 문제가 생기고,
// 기본값 사용시에도 undefined를 이용해서 인수를 넣어줘야한다.
// displayProduct('신사임당', undefined, undefined, ['coffee', 'donut']);


// 구조 분해 할당을 이용하면
// 순서도 무관하고 기본값 활용 시에도 별도의 처리가 필요 없어짐.
function displayProduct({ producer = '아무개', width = 10, height =10, items = []}) {
    console.log(`${producer}, ${width}, ${height}`);
    console.log(items);    
}
// 함수에 전달할 객체
let exampleProduct = {
    items: ['coffee', 'donut'],
    producer : '신사임당'
};

displayProduct(exampleProduct);

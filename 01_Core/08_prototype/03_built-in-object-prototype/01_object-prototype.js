
// const obj = new Object();

// 아무 것도 없는 친구도 Object를 상속받고 있다.
const obj = {};

console.log(obj.__proto__ === Object.prototype);

console.log(obj.toString === obj.__proto__.toString);

console.log(obj.toString === Object.prototype.toString);




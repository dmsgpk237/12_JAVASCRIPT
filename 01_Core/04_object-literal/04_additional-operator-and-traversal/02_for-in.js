// for in 반복문

var student = {
    name : '유관순',
    age : 16,
    getInfo() {
        return `${this.name}(은)는 ${this.age}세 입니다.`;
    }
};

// 안에 있는 property들을 다 반복해서 가지고 나온다.
// 객체의 모든 키를 순회한다 = property 개수만큼 반복한다.
for(var key in student) {
    console.log(`key : ${key}`);
    console.log(`student[key] : ${student[key]}`);
}
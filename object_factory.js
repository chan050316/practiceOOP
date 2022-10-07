// constructor의 필요성
// const kim = {
//   name: "kim",
//   first: 20,
//   second: 30,
//   sum: () => {
//     return this.first + this.second;
//   },
// };

// const lee = {
//   name: "lee",
//   first: 10,
//   second: 10,
//   sum: () => {
//     return this.first + this.second;
//   },
// };
// 이렇게 되면 한 번에 수정하기 까다로워진다

// constructor 사용의 예시
const today = new Date("2022-10-03");
console.log(today.getFullYear());
// new를 적기만 하면 객체가 자동으로 찍어져 나오는 공장과 같다
// 일일히 수정해주지 않아도 됨

// 객체 만들기) 2
// function Person() {
//   this.name = "kim";
//   this.first = 20;
//   this.second = 30;
//   this.sum = () => {
//     return this.first + this.second;
//   };
// }

// console.log(new Person());
// 위처럼 함수를 만든 뒤 new를 이용해 쉽게 객체를 만들 수 있다.
// 이때 Person을 constructor function 라고 한다.

function Person(name, first, second) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.sum = () => {
    return this.first + this.second;
  };
}

const kim = new Person("kim", 20, 30);
const lee = new Person("lee", 10, 10);

console.log(kim.sum(), lee.sum());

// class Person {
//   // how to make method
//   sum() {}

//   // how to make constructor
//   constructor(name, first, second) {
//     // 이름 바꿀 수 없음 / new Person 하면 무조건 실행
//     this.name = name;
//     this.first = first;
//     this.second = second;
//     console.log("----");
//   }
// }

// const kim = new Person("kim", 20, 30);

// console.log(kim);
// method 구현

// Person.prototype.sum = () => {
//   return this.first + this.second;
// };
// 이렇게 따로 해도 되지만 비효율적

class Person {
  constructor(name, first, second) {
    this.name = name;
    this.first = first;
    this.second = second;
    console.log("----");
  }
  sum() {
    return this.first + this.second;
  }
}

const kim = new Person("kim", 20, 30);

console.log(kim.sum());

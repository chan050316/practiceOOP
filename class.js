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

// inheritance
// 위에 Person의 class에 평균을 구하는 method인 avg()를 추가하고 싶다.
// method는 아래의 두가지 방법으로도 추가할 수 있다.
// 1. class 자체에 method를 더해 수정하는 것 => class가 자신이 만든것이 아니라면 불가능
// 2. class 하나를 더 만든다 => 비효율적
// 원래 만들어져 있는 class에 method를 추가하는 것과 동시에, 코드의 중복을 줄이게 해주는 것이 바로 상속

class PersonPlus extends Person {
  // PersonPlus는 Person의 확장판이다 / Person을 상속한다
  avg() {
    return (this.first + this.second) / 2;
  }
}

// 상속했을 때 일어날 수 있는 문제점
// 만약 PersonPlus에서만 third라는 인자를 받고 싶을 때는 어떻게 해야 하는가
// 그러면 부모class를 먼저 작동한 뒤에 부모class가 하지 못하는 일을 자식 class가 하게 할 수 있다.
// super를 사용

class PersonPlus extends Person {
  constructor(name, first, second, third) {
    // 사용할 파라미터를 인자로 모두 넣어준다.
    super(name, first, second); // super()는 부모의 constructor를 그대로 가져와 실행한다.
    this.third = third;
  }
  sum() {
    return super.sum() + this.third;
  }
  avg() {
    return (this.first + this.second + this.third) / 3;
  }
}

// super()는 부모 class의 constructor를 불러와 실행시킨다
// super.은 부모 class 자체를 불러와 부모 class의 method를 실행할 수 있게 한다.

// 다른 객체지향언어와 javascript의 차이점
// javascript는 객체지향언어지만 prototype based language이기에 class와 class로 만들어진 object와의 관계가 다른 객체지향언어들과는 다르게 이루어진다.
// 일반 객체지향언어 === Main class => Sub class => object
// javascript === Main object(prototype object) <(prototype link)= Sub object [javascript는 object에서 상속이 이루어진다.]
// 주의 : 우리가 썼던 class나 super는 javascript 이용자의 편의를 위해 만들어진 명령어일뿐 실행되는 동장은 javascript에 기초되어 있어 다른 객체지향언어들과는 다르게 작동된다.

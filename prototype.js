// prototype === 자바스크립느를 지탱하는 기반
// 자바스크립트를 더 깊이 알기 위해선 거쳐야 하는 단계
// javascript === prototype based language
// 깊게 들어가진 않을 것

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

// Person이라는 constructor function이 만들어질때마다 하나밖에 필요없는 this.sum이 계속 만들어진다 === 메모리 낭비 // 실행 시간 증가

kim.sum = () => {
  return this.first + this.second;
};

// 이렇게 해도 가능함. 하지만 이것은 kim만 바꾸는 것. 이렇게 하면 lee도 해줘야 하고 각각 설정해줘야해 비효율적임
// 이것이 바로 constructor function안에 method를 만들면 안되는 이유

function Person2(name, first, second) {
  this.name = name;
  this.first = first;
  this.second = second;
}

Person2.prototype.sum = () => {
  return this.first + this.second;
};
// 이렇게 method를 constructor function밖에서 선언해 한 번만 실행되게 할 수 있음

const kim2 = new Person2("kim", 20, 30);
const lee2 = new Person2("lee", 10, 10);

console.log(kim2.sum(), lee2.sum());

// 자바스크립트는 kim이라는 객체에서 sum을 찾게 되고 sum이 없다면, 이 객체의 constructor function인 Person의 prototype에서 찾게 됨. 결국 찾아내며 실행시키는 것

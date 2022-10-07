// constuctor function을 이용한 상속

function Person(name, first, second) {
  this.name = name;
  this.first = first;
  this.second = second;
}

Person.prototype.sum = function () {
  return this.first + this.second;
};

function PersonPlus(name, first, second, third) {
  Person.call(this, name, first, second); // PersonPlus의 this에 기반해서 Person이라는 함수 name, first, second라는 인자를 가지고 호출해라
  this.third = third;
}

// 하지만 아직은 상속하지 않는다. Person이라는 함수를 호출만 했기 때문
// 그래서 avg()는 작동하지만 sum()은 작동하지 않는다
// PersonPlus의 prototype의 __proto__ 프로퍼티가 Person의 prototype을 링크하게 하면 된다.
// PersonPlus.prototype.__proto__ = Person.prototype;
// 하지만 이것은 정석이 아니다. 그래서 Object.create()로도 사용할 수 있다.
PersonPlus.prototype = Object.create(Person.prototype);
// 이렇게 하면 Person.prototype을 __proto__로 가지고 있는 PersonPlus.prototype '새로'생겨난다.
// 하지만 이렇게 하면 kim의 constructor가 Person.prototype으로 지정되게 된다. 다시말해 third라는 인자를 받지 못한다는 것이다.
// 그래서 PersonPlus는 Person.protorype을 링크하되 constructor는 PersonPlus의 constructor여야한다.
PersonPlus.prototype.constructor = PersonPlus;

PersonPlus.prototype.avg = function () {
  return (this.first + this.second + this.third) / 3;
};

const kim = new PersonPlus("kim", 10, 20, 30);

console.log(kim.sum());
console.log(kim.avg());

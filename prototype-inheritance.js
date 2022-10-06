// class를 이용하지 않는 javascript에서의 상속과정 ) 1
const superObj = {
  superVal: "super",
};
const subObj = {
  subVal: "sub",
};
// 아직 둘은 아무 관계도 아니다. 하지만 javascript는 쉽게 이 둘을 부모 자식 관계로 만들 수 있다.
// __proto__를 이용해 subObj의 프로토타입 링크(상속 받을 링크)를 지정해주면 된다.

subObj.__proto__ = superObj;
console.log(subObj.subVal); // sub
console.log(subObj.superVal); // super
// 부모자식 관계가 만들어져 subObj에서도 superVal를 가져올 수 있게 되었다.

subObj.superVal = "sub";
console.log(subObj.superVal); // sub
console.log(superObj.superVal); // super
// 그리고 상속된 값을 이후에 바꾼다해도 부모의 값은 바뀌지 않는다.
// 그리고 이 __proto__는 언제든 수정해 링크를 바꿀 수도 있다 (유연하지만 좋은 것만은 아니다)
// 또 __proto__는 생긴게 이상한것 처럼 javascript에선 표준으로 인정하고 있지 않다. == 이것은 정석은 아니다.

// class를 이용하지 않는 javascript에서의 상속과정 ) 2

// const superObj = {
//   superVal: "super",
// };
const subObj = Object.create(superObj);
// superObj 안에 subObj라는 새로운 객체를 만든다. === 자세히 말하자면 subObj의 프로토타입링크를 설정해주는 것
subObj.subVal = "sub";
// 그 이후 객체 안에 값을 넣어준다
// debugger;
// 웹 검사 source에서 본다면 코드를 여기서 멈춘 뒤 실행되는 코드에 대해 자세히 볼 수 있다.
console.log(subObj.subVal); // sub
console.log(subObj.superVal); // super

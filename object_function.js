// 객체 밖에서 함수를 선언한 뒤 실행시키는 방법
const kim = {
  name: "kim",
  first: 10,
  second: 20,
};

function sum() {
  return this.first + this.second;
}
// 서로 관계가 없어 보인다
sum.call(kim);
// sum이라는 함수를 kim이라는 객체에 기반되서 실행시켜라
// 이렇게 하면 sum()안에있는 this가 kim의 값들로 지정된다.

console.log(sum.call(kim)); // 30

// call의 두번째 인자부터는 sum이라는 함수가 가지고 있는 인자의 값을 지정해줄 수 있다

function sum(prefix) {
  return prefix + (this.first + this.second);
}

console.log(sum.call(kim, ": ")); // : 30

// bind
// call과 기능이 비슷하지만 bind는 함수의 this를 아예 고정시켜 새로운 함수를 만든다

const kimSum = sum.bind(kim, "=> ");
// bind도 마찬가지로 두번째 인자부턴 함수를 호출할 때 사용할 인자를 지정할 수 있다
console.log(kimSum()); // => 30

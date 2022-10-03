// 객체 사용의 예시
console.log(Math.PI);
console.log(Math.random());
console.log(Math.floor(3.9));

// 객체 만들기) 1
const MyMath = {
  PI: Math.PI,
  random: () => {
    return Math.random();
  },
  floor: num => {
    return Math.floor(num);
  },
};

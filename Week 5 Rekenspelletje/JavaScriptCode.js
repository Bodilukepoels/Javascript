const plus = "+";
const minus = "-";
const times = "*";
const divide = "/";

const x = 1;
const y = 1;
const z = 1;

const randomOperator = [plus, minus, times, divide];

const random = Math.floor(Math.random() * randomOperator.length);

function load() {
  document.getElementById("p1").textContent += (wins);
  document.getElementById("first").innerText = (Math.floor(Math.random(x) * 100));
  document.getElementById("second").innerText = (random, randomOperator[random]);
  document.getElementById("third").innerText = (Math.floor(Math.random(z) * 100));
  document.getElementById("text").value = (answer);
  return;
}

let wins = 0;
let answer = 0;
let tries = 0;

if (randomOperator = plus) {
  console.log(x + y)
}
else if (randomOperator = minus) {
  console.log(x - y)
}
else if (randomOperator = times) {
  console.log(x * y)
}
else if (randomOperator = divide) {
  console.log(x / y)
}

if (answer === question) {
  wins++;
  tries++;
}
else {
  tries++;
}
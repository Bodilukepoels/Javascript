let score = 0;
let player1Score = 0;
let player2Score = 0;
let tries = 3;

 
function takeOne() { 
    tries--;
    document.getElementById("display").textContent = "tries : " + (tries); 
    return;
} 
const randomDice = [];
randomDice[0] = "images/one.png";
randomDice[1] = "images/two.png";
randomDice[2] = "images/three.png";
randomDice[3] = "images/four.png";
randomDice[4] = "images/five.png";
const random = Math.floor(Math.random() * randomDice.length);

function load() { 
    document.getElementById("dice1").src = (random, randomDice[random]);
    document.getElementById("dice2").src = (random, randomDice[random]);
    document.getElementById("dice3").src = (random, randomDice[random]);
    document.getElementById("dice4").src= (random, randomDice[random]);
    document.getElementById("dice5").src = (random, randomDice[random]);
    return;
}

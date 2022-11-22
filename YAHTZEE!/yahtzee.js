let score = 0;
let diceHold = [false, false, false, false, false];
let player1Score = 0;
let player2Score = 0;
let tries = 3;
let one = 1;


function holdDice(random) {
    diceHold[random] = !diceHold[random];
    if (diceHold[random]) {
        document.querySelector(".dice" + (random + 1)).style.border = "2.5px solid red";
    } else {
        document.querySelector(".dice" + (random + 1)).style.border = "2.5px solid black";
    }
}

function reset() {
    document.location.reload(true)
}
const randomDice = [];
randomDice[0] = "images/one.png";
randomDice[1] = "images/two.png";
randomDice[2] = "images/three.png";
randomDice[3] = "images/four.png";
randomDice[4] = "images/five.png";
randomDice[5] = "images/six.png";

function rollDice() {


    random1 = Math.floor(Math.random() * randomDice.length);
    random2 = Math.floor(Math.random() * randomDice.length);
    random3 = Math.floor(Math.random() * randomDice.length);
    random4 = Math.floor(Math.random() * randomDice.length);
    random5 = Math.floor(Math.random() * randomDice.length);

    ans = [(random1 + 1) + (random2 + 1) + (random3 + 1) + (random4 + 1) + (random5 + 1)];
    diceNumbers = [random1 + 1, random2 + 1, random3 + 1, random4 + 1, random5 + 1];

    document.getElementById("seventeenth").innerHTML = (ans);

    document.getElementById("dice1").src = (randomDice[random1]);
    document.getElementById("dice2").src = (randomDice[random2]);
    document.getElementById("dice3").src = (randomDice[random3]);
    document.getElementById("dice4").src = (randomDice[random4]);
    document.getElementById("dice5").src = (randomDice[random5]);

    return;
}
function takeOne() {
    tries--;
    document.getElementById("display").textContent = "tries : " + (tries);

    if (tries === 0) {
        tries = 3 + 1;
    }
    return;
}

function checkNumbers(number) {
    console.log(diceNumbers)
    let totaal = 0;
    for (let i = 0; i < diceNumbers.length; i++) {
        if (diceNumbers[i] == number) {
            totaal += number;
            
        }
        if (diceNumbers[i] = true){
            tries = 3;
            document.getElementById("display").textContent = "tries : " + (tries);
        }
    }
    document.getElementById("score" + number).textContent = totaal;
}


/* Buttons for player 2 */

function ones2() {

}
function twos2() {

}
function threes2() {

}
function fours2() {

}
function fives2() {

}
function sixes2() {

}
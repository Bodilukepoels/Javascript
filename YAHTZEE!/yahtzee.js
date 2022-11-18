let score = 0;
let diceHold = [false, false, false, false, false];
let player1Score = 0;
let player2Score = 0;
let tries = 3;


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

    document.getElementById("seventeenth").innerHTML = (ans);

    document.getElementById("dice1").src = (randomDice[random1]);
    document.getElementById("dice2").src = (randomDice[random2]);
    document.getElementById("dice3").src = (randomDice[random3]);
    document.getElementById("dice4").src = (randomDice[random4]);
    document.getElementById("dice5").src = (randomDice[random5]);

    diceHold = [false, false, false, false, false];
    return;
}
function takeOne() {
    tries--;
    document.getElementById("display").textContent = "tries : " + (tries);

    if (tries === 0) {
        tries = 3 + 1;
        rollDice = false;
    }

    return;
}


function ones() {
    let target = 1;

    let counter = 0;
    for (value of ans) {
        if (value == target) {
            counter + 1;
        }
    }
    console.log(value);
}
const eventOne = document.getElementById("first").textContent(value);
eventOne.addEventListener("click", ones);

function twos() {
    let target = 2;

    let counter = 0;
    for (value of ans) {
        if (value == target) {
            counter + 2;
        }
    }
    console.log(value);
}
const eventTwo = document.getElementById("second").textContent(value);
eventTwo.addEventListener("click", twos);

function threes() {
    let target = 3;

    let counter = 0;
    for (value of ans) {
        if (value == target) {
            counter + 3;
        }
    }
    console.log(value);
}
const eventThree = document.getElementById("third").textContent(value);
eventThree.addEventListener("click", threes);

function fours() {
    let target = 4;

    let counter = 0;
    for (value of ans) {
        if (value == target) {
            counter + 4;
        }
    }
    console.log(value);
}
const eventFour = document.getElementById("fourth").textContent(value);
eventFour.addEventListener("click", fours);

function fives() {
    let target = 5;

    let counter = 0;
    for (value of ans) {
        if (value == target) {
            counter + 5;
        }
    }
    console.log(value);
}
const eventFive = document.getElementById("fifth").textContent(value);
eventFive.addEventListener("click", fives);

function sixes() {
    let target = 6;

    let counter = 0;
    for (value of ans) {
        if (value == target) {
            counter + 6;
        }
    }
    console.log(value);
}
const eventSix = document.getElementById("sixth").textContent(value);
eventSix.addEventListener("click", sixes);

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
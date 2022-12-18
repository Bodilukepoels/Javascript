let score = 0;
let diceHold = [false, false, false, false, false];
let player1Score = 0;
let player1Wins = 0;
let player2Score = 0;
let player2Wins = 0;
let tries = 3;
let totalBottom = 0;
let turn = 0;
let turns = 1;

document.getElementById("opacity").style.opacity = "0%";

// lets the play area appear
function play() {
    document.getElementById("play").style.visibility = "hidden";
    document.getElementById("opacity").style.opacity = "100%";
    document.getElementById("opacity").style.transition = "opacity 1s ease-in";
}
document.getElementById("try").disabled = false;

// gives you the ability to hold dice
function holdDice(number) {
    diceHold[number] = !diceHold[number];
    if (diceHold[number]) {
        document.querySelector(".dice" + (number + 1)).style.border = "2.5px solid red";

    } else {
        document.querySelector(".dice" + (number + 1)).style.border = "2.5px solid black";
    }
}

const randomDice = [];
randomDice[0] = "images/one.png";
randomDice[1] = "images/two.png";
randomDice[2] = "images/three.png";
randomDice[3] = "images/four.png";
randomDice[4] = "images/five.png";
randomDice[5] = "images/six.png";

// function for rolling your dice
function rollDice() {

    if (!diceHold[0]) {
        dice1 = Math.floor(Math.random() * randomDice.length);
    } else {

    }
    if (!diceHold[1]) {
        dice2 = Math.floor(Math.random() * randomDice.length)
    } else {

    }
    if (!diceHold[2]) {
        dice3 = Math.floor(Math.random() * randomDice.length);
    } else {

    }
    if (!diceHold[3]) {
        dice4 = Math.floor(Math.random() * randomDice.length);
    } else {

    }
    if (!diceHold[4]) {
        dice5 = Math.floor(Math.random() * randomDice.length);
    } else {

    }

    diceNumbers = [dice1 + 1, dice2 + 1, dice3 + 1, dice4 + 1, dice5 + 1];

    document.getElementById("dice1").src = (randomDice[dice1]);
    document.getElementById("dice2").src = (randomDice[dice2]);
    document.getElementById("dice3").src = (randomDice[dice3]);
    document.getElementById("dice4").src = (randomDice[dice4]);
    document.getElementById("dice5").src = (randomDice[dice5]);
    takeOne();
    playerSwitch();
    return;
}
// this is used for the values 1-6 on your yahtzee card
function checkNumbers(number) {
    let total = 0;
    turn++;
    turns++;
    for (let i = 0; i < diceNumbers.length; i++) {
        if (diceNumbers[i] == number) {
            total += number;
        }
        if (diceNumbers[i]) {
            document.getElementById("try").disabled = false;
            document.getElementById("score" + number).disabled = true;
            resetDice();
        }
    }
    if (turns == 1) {
        if (total == 0) {
            document.getElementById("green" + number).textContent = "-";
        }
        document.getElementById("sScore" + number).onclick = "";
        document.getElementById("sScore" + number).textContent = total;
        document.getElementById("sScore" + number).style.color = "black";
    } else if (turns == 2) {
        if (total == 0) {

        }
        document.getElementById("score" + number).onclick = "";
        document.getElementById("score" + number).textContent = total;
        document.getElementById("score" + number).style.color = "black";
    }
}
// this subtracts 1 try every time you roll 
function takeOne() {
    tries--;
    document.getElementById("display").textContent = "tries : " + (tries);

    if (tries === 0) {
        tries = 3 + 1;
        document.getElementById("try").disabled = true;
        diceHold = [false, false, false, false, false];
    }
    return;
}
// this is used to reset the dice to their original state
function resetDice() {
    tries = 3;
    diceHold = [false, false, false, false, false];
    document.getElementById("display").textContent = "tries : " + (tries);

    for (let i = 0; i < 5; i++) {
        document.querySelector(`.dice${i + 1}`).style.border = "2.5px solid black";
        document.querySelector(`.dice${i + 1}`).src = "images/blankspace.png";
    }
    gameOver()
}
// this is used for 3-4 of a kind
function ofKind(number) {
    let same = 0;
    let found = false;
    for (let i = 1; i <= 6; i++) {
        same = 0;
        for (let j = 0; j < diceNumbers.length; j++) {
            if (diceNumbers[j] == i) {
                same++;
            }
        }
        if (same >= number) {
            found = true;
        }
    }
    let total = 0;
    if (found) {
        for (let i = 0; i < diceNumbers.length; i++) {
            total += diceNumbers[i];
        }
        if (turns == 0) {
            document.getElementById("sScoreBottom" + (number - 2)).textContent = total;
            document.getElementById("sScoreBottom" + (number - 2)).onclick = "";
            document.getElementById("sScoreBottom" + (number - 2)).style.color = "black";
            totalBottom += total;
        }
        else if (turns == 1) {
            document.getElementById("scoreBottom" + (number - 2)).textContent = total;
            document.getElementById("scoreBottom" + (number - 2)).onclick = "";
            document.getElementById("scoreBottom" + (number - 2)).style.color = "black";
            totalBottom += total;
        }
    }
    turn++;
    turns++;
    resetDice();
    document.getElementById("try").disabled = false;
}
// this is used to identify the full house
function fullHouse() {
    let counts = {};
    for (let i = 0; i < diceNumbers.length; i++) {
        if (counts[diceNumbers[i]] === undefined) {
            counts[diceNumbers[i]] = 1;
        } else {
            counts[diceNumbers[i]]++;
        }
    }
    let found2 = false;
    let found3 = false;
    for (const [key, value] of Object.entries(counts)) {
        if (value == 2) {
            found2 = true;
        }
        if (value == 3) {
            found3 = true;
        }
    }
    if (found2 && found3) {
        if (turns == 0) {
            document.getElementById("sScoreBottom3").textContent = 25;
            document.getElementById("sScoreBottom3").onclick = "";
            document.getElementById("sScoreBottom3").style.color = "black";
            totalBottom += 25;
        } else if (turns == 1) {
            document.getElementById("scoreBottom3").textContent = 25;
            document.getElementById("scoreBottom3").onclick = "";
            document.getElementById("scoreBottom3").style.color = "black";
            totalBottom += 25;
        }
    }
    turn++;
    turns++;
    document.getElementById("try").disabled = false;
    resetDice();
}

// this checks the order of your dicenumbers to see if they can make a small street
function smallSTR() {
    let count = 0;
    let bool = false;
    for (let i = 1; i <= 6; i++) {
        if (diceNumbers.includes(i)) {
            count++;
        } else {
            count = 0;
        }
        if (count >= 4) {
            bool = true;
            break;
        }
    }
    if (bool) {
        if (turns == 0) {
            document.getElementById("sScoreBottom4").textContent = 30;
            document.getElementById("sScoreBottom4").onclick = "";
            document.getElementById("sScoreBottom4").style.color = "black";
            totalBottom += 30;
        } else if (turns == 1) {
            document.getElementById("scoreBottom4").textContent = 30;
            document.getElementById("scoreBottom4").onclick = "";
            document.getElementById("scoreBottom4").style.color = "black";
            totalBottom += 30;
        }
    }
    turn++;
    turns++;
    document.getElementById("try").disabled = false;
    resetDice();
}

// this checks the order of your dicenumbers to see if they can make a big street
function bigSTR() {
    let count = 0;
    let bool = false;
    for (let i = 1; i <= 6; i++) {
        if (diceNumbers.includes(i)) {
            count++;
        } else {
            count = 0;
        }
        if (count == 5) {
            bool = true;
            break;
        }
    }
    if (bool) {
        if (turns == 0) {
            document.getElementById("sScoreBottom5").textContent = 40;
            document.getElementById("sScoreBottom5").onclick = "";
            document.getElementById("sScoreBottom5").style.color = "black";
            totalBottom += 40;
        } else if (turns == 1) {
            document.getElementById("scoreBottom5").textContent = 40;
            document.getElementById("scoreBottom5").onclick = "";
            document.getElementById("scoreBottom5").style.color = "black";
            totalBottom += 40;
        }
    }
    turn++;
    turns++;
    document.getElementById("try").disabled = false;
    resetDice();
}

// this checks if all 5 dices are the same
function Yahtzee(number) {
    let same = 0;
    let found = false;
    for (let i = 1; i <= 6; i++) {
        same = 0;
        for (let j = 0; j < diceNumbers.length; j++) {
            if (diceNumbers[j] == i) {
                same++;
            }
        }
        if (same >= number) {
            found = true;
        }
    }
    if (found) {
        if (turns == 0) {
            document.getElementById("sScoreBottom6").textContent = 50;
            document.getElementById("sScoreBottom6").onclick = "";
            document.getElementById("sScoreBottom6").style.color = "black";
            totalBottom += 50;
        }
        else if (turns == 1) {
            document.getElementById("scoreBottom6").textContent = 50;
            document.getElementById("scoreBottom6").onclick = "";
            document.getElementById("scoreBottom6").style.color = "black";
            totalBottom += 50;
        }

    }
    turn++;
    turns++;
    document.getElementById("try").disabled = false;
    resetDice();
}
// this adds all of your dice values to eachother
function Chance() {

    let total = 0;
    for (let i = 0; i < diceNumbers.length; i++) {
        total += diceNumbers[i];
    } if (turns == 0) {
        document.getElementById("sScoreBottom7").textContent = total;
        document.getElementById("sScoreBottom7").onclick = "";
        document.getElementById("sScoreBottom7").style.color = "black";
        totalBottom += total;
    }
    else if (turns == 1) {
        document.getElementById("scoreBottom7").textContent = total;
        document.getElementById("scoreBottom7").onclick = "";
        document.getElementById("scoreBottom7").style.color = "black";
        totalBottom += total;

    }
    turn++;
    turns++;
    document.getElementById("try").disabled = false;
    resetDice();
}

function totalPoints() {
    let total = 0;
    if (turns == 1) {
        for (let i = 1; i <= 6; i++) {
            total += parseInt(document.getElementById("sScore" + i).textContent);
        }
        document.getElementById("total2").textContent = total;
    }
    else if (turns == 2) {
        for (let i = 1; i <= 6; i++) {
            total += parseInt(document.getElementById("score" + i).textContent);
        }
        document.getElementById("total").textContent = total;
    }
    bonus(total);
}
// this checks if you have reached a total of at least 63 points in your top chart to grant a bonus
function bonus(total) {
    if (turns == 1) {
        if (total >= 63) {
            document.getElementById("total2").textContent = total + 35;
            document.getElementById("Bonus2").textContent = "Bonus!"
        }
        else {
            document.getElementById("Bonus2").textContent = "None!"
        }
    }
    if (turns == 2) {
        if (total >= 63) {
            document.getElementById("total").textContent = total + 35;
            document.getElementById("Bonus").textContent = "Bonus!"
        }
        else {
            document.getElementById("Bonus").textContent = "None!"
        }
    }
    topTotal(total);
}
function totalPointsBottom() {
    let totalBottom = 0;
    if (turns == 2) {
        for (let i = 1; i <= 7; i++) {
            totalBottom += parseInt(document.getElementById("scoreBottom" + i).textContent);
        }
        document.getElementById("totalBottom").textContent = totalBottom;

        document.getElementById("bottomTotal").textContent = totalBottom;
    }
    else if (turns == 1) {
        for (let i = 1; i <= 7; i++) {
            totalBottom += parseInt(document.getElementById("sScoreBottom" + i).textContent);
        }
        document.getElementById("totalBottom2").textContent = totalBottom;

        document.getElementById("bottomTotal2").textContent = totalBottom;
    }
    grandTotal()
}

// calculations for final score 
function topTotal(total) {
    if (turns == 1) {
        if (total >= 63) {
            document.getElementById("topTotal2").textContent = total + 35;
        }
        else {
            document.getElementById("topTotal2").textContent = total;
        }
    }
    if (turns == 2) {
        if (total >= 63) {
            document.getElementById("topTotal").textContent = total + 35;
        }
        else {
            document.getElementById("topTotal").textContent = total;
        }
    }
    grandTotal();
}

function grandTotal() {
    let total = 0;

    if (turns == 1) {
        total += parseInt(document.getElementById("topTotal2").textContent);
        total += parseInt(document.getElementById("totalBottom2").textContent);
        document.getElementById("grandTotal2").textContent = total;
        total += player1Score;
    }
    else if (turns == 2) {
        total += parseInt(document.getElementById("topTotal").textContent);
        total += parseInt(document.getElementById("totalBottom").textContent);
        document.getElementById("grandTotal").textContent = total;
    }
    gameEnd();
}

function restart() {
    if (confirm("Are you sure you want to reset?")) {
        document.location.reload(true)
    }
}

// this switches the players turns
function playerSwitch() {
    if (turns == 1 || turns == 2) {
        player = turns == 1;
        document.getElementById("player1").disable = !player;
        document.getElementById("player1").style.opacity = player ? "100%" : "40%";
        document.getElementById("player1").style.transition = "opacity 1s ease-out";
        document.getElementById("player2").disable = player;
        document.getElementById("player2").style.opacity = player ? "40%" : "100%";
        document.getElementById("player2").style.transition = "opacity 1s ease-out";
        if (turns == 2) {
            turns = 0;
        }
    }
}
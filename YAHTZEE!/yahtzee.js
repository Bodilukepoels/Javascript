let score = 0;
let diceHold = [false, false, false, false, false];
let player1Score = 0;
let player2Score = 0;
let tries = 3;
let totalBottom = 0;

document.getElementById("opacity").style.opacity = "0%";

function play() {
    document.getElementById("play").style.visibility = "hidden";
    document.getElementById("opacity").style.opacity = "100%";
    document.getElementById("opacity").style.transition = "opacity 1s ease-in";
}
document.getElementById("try").disabled = false;

function holdDice(number) {

    diceHold[number] = !diceHold[number];
    if (diceHold[number]) {
        document.querySelector(".dice" + (number + 1)).style.border = "2.5px solid red";
        console.log("Lock Number:" + diceHold[number]);
    } else {
        document.querySelector(".dice" + (number + 1)).style.border = "2.5px solid black";
        console.log("UnLock Number:" + number);
    }
}

const randomDice = [];
randomDice[0] = "images/one.png";
randomDice[1] = "images/two.png";
randomDice[2] = "images/three.png";
randomDice[3] = "images/four.png";
randomDice[4] = "images/five.png";
randomDice[5] = "images/six.png";

function rollDice() {

    if (!diceHold[0]) {
        random1 = Math.floor(Math.random() * randomDice.length);
    } else {
        console.log("Dice 1 Held")
    }
    if (!diceHold[1]) {
        random2 = Math.floor(Math.random() * randomDice.length)
    } else {
        console.log("Dice 2 Held");
    }
    if (!diceHold[2]) {
        random3 = Math.floor(Math.random() * randomDice.length);
    } else {
        console.log("Dice 3 Held");
    }
    if (!diceHold[3]) {
        random4 = Math.floor(Math.random() * randomDice.length);
    } else {
        console.log("Dice 4 Held");
    }
    if (!diceHold[4]) {
        random5 = Math.floor(Math.random() * randomDice.length);
    } else {
        console.log("Dice 5 Held");
    }

    ans = [(random1 + 1) + (random2 + 1) + (random3 + 1) + (random4 + 1) + (random5 + 1)];
    diceNumbers = [random1 + 1, random2 + 1, random3 + 1, random4 + 1, random5 + 1];

    document.getElementById("dice1").src = (randomDice[random1]);
    document.getElementById("dice2").src = (randomDice[random2]);
    document.getElementById("dice3").src = (randomDice[random3]);
    document.getElementById("dice4").src = (randomDice[random4]);
    document.getElementById("dice5").src = (randomDice[random5]);
    takeOne();

    return;
}

function checkNumbers(number) {
    let totaal = 0;
    for (let i = 0; i < diceNumbers.length; i++) {
        if (diceNumbers[i] == number) {
            totaal += number;
        }
        if (diceNumbers[i] = true) {
            document.getElementById("score" + number).onclick = "";
            document.getElementById("try").disabled = false;
            resetDice();
        }
    }
    document.getElementById("score" + number).textContent = totaal;
}

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

function resetDice() {
    tries = 3;
    diceHold = [false, false, false, false, false];
    document.getElementById("display").textContent = "tries : " + (tries);

    document.querySelector(".dice1").src = "images/blankspace.png";
    document.querySelector(".dice2").src = "images/blankspace.png";
    document.querySelector(".dice3").src = "images/blankspace.png";
    document.querySelector(".dice4").src = "images/blankspace.png";
    document.querySelector(".dice5").src = "images/blankspace.png";

    document.querySelector(".dice1").style.border = "2.5px solid black";
    document.querySelector(".dice2").style.border = "2.5px solid black";
    document.querySelector(".dice3").style.border = "2.5px solid black";
    document.querySelector(".dice4").style.border = "2.5px solid black";
    document.querySelector(".dice5").style.border = "2.5px solid black";
}

function ofKind(number) {
    resetDice();
    document.getElementById("ofKind" + number).onclick = "";
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
        document.getElementById("ofKind" + number).textContent = total;
        document.getElementById("try").disabled = false;
        totalBottom += total;
    }
}

function fullHouse() {
    document.getElementById("fullHouse").onclick = "";
    resetDice();
    let same = 0;
    let found = false;
    for (let i = 1; i <= 6; i++) {
        same = 0;
        for (let j = 0; j < diceNumbers.length; j++) {
            if (diceNumbers[j] == i) {
                same++;
            }
        }
        if (same == 2) {
            found = true;
        }
    }
    let same2 = 0;
    let found2 = false;
    for (let i = 1; i <= 6; i++) {
        same2 = 0;
        for (let j = 0; j < diceNumbers.length; j++) {
            if (diceNumbers[j] == i) {
                same2++;
            }
        }
        if (same2 == 3) {
            found2 = true;
        }
    }
    if (found && found2) {
        document.getElementById("fullHouse").textContent = 25;
        document.getElementById("try").disabled = false;
        totalBottom += 25;
    }
}

function smallSTR() {
    resetDice();
    document.getElementById("SMstreet").onclick = "";
    let order = [0, 0, 0, 0, 0, 0];
    for (let i = 1; i <= 6; i++) {
        for (let j = 0; j <= diceNumbers.length; j++) {
            if (diceNumbers[j] == i) {
                order[i - 1] = 1;

            }
        }
    }
    let count = 0;
    let bool = false;
    for (let i = 0; i < order.length; i++) {
        if (order[i] == 1) {
            count++;
        } else {
            count = 0;
        }
        if (count >= 4) {
            bool = true;
        }
    }
    if (bool) {
        document.getElementById('SMstreet').textContent = 30;
        document.getElementById("try").disabled = false;
        totalBottom += 30;
    }

}

function bigSTR() {
    resetDice();
    document.getElementById("BGstreet").onclick = "";
    let order = [0, 0, 0, 0, 0, 0];
    for (let i = 1; i <= 6; i++) {
        for (let j = 0; j <= diceNumbers.length; j++) {
            if (diceNumbers[j] == i) {
                order[i - 1] = 1;
            }
        }
    }
    let count = 0;
    let bool = false;
    for (let i = 0; i < order.length; i++) {
        if (order[i] == 1) {
            count++;
        } else {
            count = 0;
        }
        if (count == 5) {
            bool = true;
        }
    }
    if (bool) {
        document.getElementById('BGstreet').textContent = 40;
        document.getElementById("try").disabled = false;
        totalBottom += 40;
    }
}
function Yahtzee(number) {
    resetDice();
    document.getElementById("Yahtzee").onclick = "";
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
        document.getElementById("Yahtzee").textContent = 50;
        totalBottom += 50;
    }
}

function Chance() {
    resetDice();
    document.getElementById("Chance").onclick = "";
    let total = 0;
    for (let i = 0; i < diceNumbers.length; i++) {
        total += diceNumbers[i];
    }
    document.getElementById("Chance").textContent = total;
    totalBottom += total;
}

function totalPoints() {
    let total = 0;
    for (let i = 1; i <= 6; i++) {
        total += parseInt(document.getElementById("score" + i).textContent);
    }
    document.getElementById("total").textContent = total;
    bonus(total);
}

function totalPointsBottom() {
    for (let i = 1; i <= 7; i++) {
        totalBottom += parseInt(document.getElementById("scoreBottom" + i).textContent);
    }
    document.getElementById("totalBottom").textContent = totalBottom;
}

function bonus(total) {
    if (total >= 63) {
        document.getElementById("total").textContent = total + 35;
        document.getElementById("Bonus").textContent = "Bonus!";
    }
    else {
        document.getElementById("Bonus").textContent = "No Bonus!"
    }
    topTotal(total);
}

function topTotal(total) {
    document.getElementById("topTotal").textContent = total;
}

function restart() {
    if (confirm("Are you sure you want to reset?")) {
        document.location.reload(true)
    }
}

/* Buttons for player 2 */


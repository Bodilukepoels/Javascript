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
    playerSwitch();
    return;
}

function checkNumbers(number) {
    let total = 0;
    turn++;
    turns++;
    for (let i = 0; i < diceNumbers.length; i++) {
        if (diceNumbers[i] == number) {
            total += number;
        }
        if (diceNumbers[i] = true) {
            document.getElementById("try").disabled = false;
            document.getElementById("score" + number).disabled = true;
            resetDice();
        }
    }
    if (turns == 1) {
        document.getElementById("sScore" + number).onclick = "";
        document.getElementById("sScore" + number).textContent = total;
    } else if (turns == 2) {
        document.getElementById("score" + number).onclick = "";
        document.getElementById("score" + number).textContent = total;
    }

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
    diceNumbers.length = number;
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
            console.log(same);
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
            document.getElementById("sScoreBottom" + number).onclick = "";
            totalBottom += total;
        }
        else if (turns == 1) {
            document.getElementById("scoreBottom" + (number - 2)).textContent = total;
            document.getElementById("scoreBottom" + number).onclick = "";
            totalBottom += total;
        }
        turn++;
        turns++;
    }
    resetDice();
    document.getElementById("try").disabled = false;
}

function fullHouse() {
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
        if (turns == 0) {
            document.getElementById("sScoreBottom3").textContent = 25;
            document.getElementById("sScoreBottom3").onclick = "";
            totalBottom += 25;
        }
        else if (turns == 1) {
            document.getElementById("scoreBottom3").textContent = 25;
            document.getElementById("scoreBottom3").onclick = "";
            totalBottom += 25;
        }
    }
    turn++;
    turns++;
    document.getElementById("try").disabled = false;
    resetDice();
}

function smallSTR() {
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
        if (turns == 0) {
            document.getElementById("sScoreBottom4").textContent = 30;
            document.getElementById("sScoreBottom4").onclick = "";
            totalBottom += 30;
        }
        else if (turns == 1) {
            document.getElementById("scoreBottom4").textContent = 30;
            document.getElementById("scoreBottom4").onclick = "";
            totalBottom += 30;
        }

    }
    turn++;
    turns++;
    document.getElementById("try").disabled = false;
    resetDice();
}

function bigSTR() {
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
        if (turns == 0) {
            document.getElementById("sScoreBottom5").textContent = 40;
            document.getElementById("sScoreBottom5").onclick = "";
            totalBottom += 40;
        }
        else if (turns == 1) {
            document.getElementById("scoreBottom5").textContent = 40;
            document.getElementById("scoreBottom5").onclick = "";
            totalBottom += 40;
        }

    }
    turn++;
    turns++;
    document.getElementById("try").disabled = false;
    resetDice();
}

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
            totalBottom += 50;
        }
        else if (turns == 1) {
            document.getElementById("scoreBottom6").textContent = 50;
            document.getElementById("scoreBottom6").onclick = "";
            totalBottom += 50;
        }

    }
    turn++;
    turns++;
    document.getElementById("try").disabled = false;
    resetDice();

}

function Chance() {

    let total = 0;
    for (let i = 0; i < diceNumbers.length; i++) {
        total += diceNumbers[i];
    } if (turns == 0) {
        document.getElementById("sScoreBottom7").textContent = total;
        document.getElementById("sScoreBottom7").onclick = "";
        totalBottom += total;
    }
    else if (turns == 1) {
        document.getElementById("scoreBottom7").textContent = total;
        document.getElementById("scoreBottom7").onclick = "";
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

/* calculations for final score */

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

}

function restart() {
    if (confirm("Are you sure you want to reset?")) {
        document.location.reload(true)
    }
}

/* Buttons for player 2 */
function playerSwitch() {
    if (turns == 1) {
        player = true;
        document.getElementById("player1").disable = false;
        document.getElementById("player1").style.opacity = "100%";
        document.getElementById("player2").style.transition = "opacity 1s ease-out";
        document.getElementById("player2").disable = true;
        document.getElementById("player2").style.opacity = "40%";
    }
    else if (turns == 2) {
        player = false;
        document.getElementById("player2").disable = false;
        document.getElementById("player2").style.opacity = "100%";
        document.getElementById("player1").disable = true;
        document.getElementById("player1").style.opacity = "40%";
        document.getElementById("player1").style.transition = "opacity 1s ease-out";
        turns = 0;

    }
    console.log(turns);
}

function gameEnd() {
    if (turns == 26) {
        if (player1score > player2score) {
            document.getElementById("player1score").textContent = player1Wins++;
        }
        else {
            document.getElementById("player2score").textContent = player2Wins++;
        }
    }
}
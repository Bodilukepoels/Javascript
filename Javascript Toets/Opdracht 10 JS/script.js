let container = document.querySelector(".container");
let number = 0;
let yes = 0;
let randomNR = [];

function randomNumber() {
    for (let i = 0; i < 1; i++) {
        randomNR[i] = randomInteger(100, 1000);
    }
}

function addDiv() {
    if (number == 48) {
        document.querySelector(".button").onclick = "";
    }
    number++
    const newDiv = document.createElement("div");
    const text = document.createTextNode(yes);
    newDiv.appendChild(text);
    newDiv.className += "container__item";
    newDiv.style.height = "50px";
    newDiv.style.padding = "30px";
    container.appendChild(newDiv);
    console.log(`${document.querySelectorAll(".container__item")}`)
}

function randomInteger(min, max) {
    min = Math.ceil(min);
    max = Math.ceil(max);
    yes = Math.floor(Math.random() * max - min + min);
    addDiv();
}

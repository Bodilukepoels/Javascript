let container = document.querySelector(".container");
let number = 0;

function addDiv() {
    if (number == 48) {
        document.querySelector(".button").onclick = "";
    }
    number++
    const newDiv = document.createElement("div");
    const text = document.createTextNode(number);
    newDiv.appendChild(text);
    newDiv.className += "container__item";
    newDiv.style.height = "50px";
    newDiv.style.padding = "30px";
    container.appendChild(newDiv);
}
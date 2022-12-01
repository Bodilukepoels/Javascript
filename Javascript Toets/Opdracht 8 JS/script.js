let randomNR = [];

function randomNumber(){
    for(let i = 0; i < 49; i++){
        randomNR[i] = randomInteger(100, 1000)
    }
    console.log(randomNR)
}

function randomInteger(min, max){
min = Math.ceil(min);
max = Math.ceil(max);
return Math.floor(Math.random() * max - min + min);
}
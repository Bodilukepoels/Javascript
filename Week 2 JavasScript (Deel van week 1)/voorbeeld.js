

function getPlace(city){
    return (city ? "Koetjekoe" : "Koetjeboeboe");
}
console.log(getPlace(true));
console.log(getPlace(false));
console.log(getPlace(null));
// 10 - Crear un programa que convierta grados Celsius a Fahrenheit y viceversa.

function fahrenheitToCelcius(grados) {
    return (grados - 32) / (9/5);
}
console.log (fahrenheitToCelcius(50) + "° Celcius");

let gradosCelcius = 20;
function celciusToFahrenheit(grados) {
    return (grados * (9/5)) + 32;
}
console.log (`${gradosCelcius} grados Celcius son: ` + celciusToFahrenheit(gradosCelcius) + "° Fahrenheit");
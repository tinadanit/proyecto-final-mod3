// 2 - Crear un algoritmo que invierta un string.

// let stringToReverse = prompt("Introduce una frase para invertir su orden", "dime algo bonito");

function reverseString (string) {
    const strToArr = string.split("");
    const arrReverse = strToArr.reverse();
    const arrToStr = arrReverse.join("");
    console.log(arrToStr);
}
reverseString ("hola ola aloha");
// reverseString (stringToReverse);

function reverseString2 (string) {
    return (string.split("").reverse().join(""));
}

console.log(reverseString2("O_ô 123"));
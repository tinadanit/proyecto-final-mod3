// 1 - Escribir una función que determine si un número es par o impar.

function isNumEven(number) {
    if (typeof number !== "number" || isNaN(number) || number === Infinity){
        console.log("No es un número válido. Vuelve a intentarlo");
    } else if (number % 2 === 0){
        console.log(`${number} es par`);
    } else {
        console.log(`${number} es impar`);
    }
}

isNumEven(44);
isNumEven(77);
isNumEven("a");
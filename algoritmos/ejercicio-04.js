// 4 - Crear un algoritmo que devuelva el factorial de un número.

function calcFactorial(number) {
    if (number === 0) {
        console.log ("0! = 1");
    } else if (number <0) {
        console.log("Para esta operación se necesitan conocimientos de matemáticas avanzadas");
    } else {
        const numReady = Math.floor(number);
        let arrIntegers = [];
        for (let i = 1; i <= numReady; i++) {
            arrIntegers.push(i);
        }
        const numFactorial = arrIntegers.reduce ((acc, curr) => acc * curr);
        console.log(`${numReady}! = ${numFactorial}`);
    }
}

calcFactorial(4);
calcFactorial(5);
calcFactorial(6);
calcFactorial(0);
calcFactorial(1);
calcFactorial(-7);
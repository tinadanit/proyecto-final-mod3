// 13 - Crear un algoritmo que sume todos los números de un array.

function addAll(array) {
    const total = array.reduce((acc, curr) =>
        acc + curr);
    console.log(total);
}

const arrNum1 = [11, 34, 89, 77, 2, -13];
const arrNum2 = [1, 1, 1, 0, 10];

addAll(arrNum1);
addAll(arrNum2);
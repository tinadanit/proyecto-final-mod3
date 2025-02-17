//11 - Encontrar el segundo número más grande en un array.

const arrNum3 = [33, 4, 82, 101, -2, 6];
const arrNum4 = [2, 10, 1];
function findSecond (arrNum) {
    const arraySorted = arrNum.sort((a, b) => a - b).reverse();
    //console.log(arraySorted);
    const [, second, ...rest] = arraySorted;
    return second
}

console.log(findSecond(arrNum3));
console.log(findSecond(arrNum4));
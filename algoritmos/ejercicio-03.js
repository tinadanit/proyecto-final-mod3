// 3 - Escribir una función que encuentre el número mayor en un array.

const arrNumbers1 = [3, 40, -10, 10, 77, -6, 0, 23];
const arrNumbers2 = [2, 70, "hola"];

function findBiggerNum (arrayNum){

    if (arrayNum.some((el) => typeof el !== "number") || arrayNum.some((el) => el === Infinity) || arrayNum.some((el) => el === NaN)){

        return "No es un array de números"
        
    } else if (arrayNum.length === 0) {

        return "El array está vacío"   

    } else {
        
        const arrSort = arrayNum.sort((a, b) => a - b);
        // console.log(arrSort);
        const lastNum = arrSort[arrayNum.length-1];
        console.log(`El número mayor de este array es: ${lastNum}`);
    }
}

findBiggerNum(arrNumbers1);
console.log(findBiggerNum(arrNumbers2));
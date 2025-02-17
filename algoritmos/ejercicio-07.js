// 7 - Ordenar un array de números en orden ascendente (sin usar sort).

const numToSort = [900, 55, 2, 140, -8, 2.1, -1, 16, 244];
const numToSort2 = [30, 0, 90];
const numToSort3 = [1];
const numToSort4 = [];
const numToSort5 = ["hola", "pepe", "abracadabra", "no"];
const numToSort55 = ["z", "c", "p", "a", "o", "A", "b"];
const numToSort6 = [true, false];
const numToSort7 = [22, 2, "hola"];
const numToSort8 = [NaN, Infinity, 3];

function sortArrayNum (array) {

    if (array.some((el) => typeof el !== "number") || array.some((el) => el === Infinity) || array.some((el) => el === NaN)){

        return "No es un array de números"
        
    } else if (array.length === 0) {

        return "El array está vacío"   

    } else /*if (array.length !== 0)*/ {
        
        let arrSorted = [];
        let [firstNum, ...otherNum] = array;
        let bigger = otherNum.some((el) => el > firstNum);
        bigger ? otherNum.push(firstNum) : arrSorted.unshift(firstNum);   
    
        while (otherNum.length > 0) {
            [firstNum, ...otherNum] = otherNum;
            bigger = otherNum.some((el) => el > firstNum);
            bigger ? otherNum.push(firstNum) : arrSorted.unshift(firstNum); 
        }

        return arrSorted
    }    
}
console.log(sortArrayNum (numToSort));
console.log(sortArrayNum (numToSort2));
console.log(sortArrayNum (numToSort3));
console.log(sortArrayNum (numToSort4));
console.log(sortArrayNum (numToSort5));
console.log(sortArrayNum (numToSort55));
console.log(sortArrayNum (numToSort6));
console.log(sortArrayNum (numToSort7));
console.log(sortArrayNum (numToSort8));
// // 1 - Escribir una función que determine si un número es par o impar.

// function isNumEven(number) {
//     if (typeof number !== "number" || isNaN(number) || number === Infinity){
//         console.log("No es un número válido. Vuelve a intentarlo");
//     } else if (number % 2 === 0){
//         console.log(`${number} es par`);
//     } else {
//         console.log(`${number} es impar`);
//     }
// }
// isNumEven(44);
// isNumEven(77);
// isNumEven("a");

// // let numToCheck = Math.floor(prompt("Introduce un número para saber si es par o impar:", "44"));

// // isNumEven(numToCheck);

// // 2 - Crear un algoritmo que invierta un string.

// // let stringToReverse = prompt("Introduce una frase para invertir su orden", "dime algo bonito");

// function reverseString (string) {
//     const strToArr = string.split("");
//     const arrReverse = strToArr.reverse();
//     const arrToStr = arrReverse.join("");
//     console.log(arrToStr);
// }
// reverseString ("hola ola aloha");
// // reverseString (stringToReverse);

// function reverseString2 (string) {
//     return (string.split("").reverse().join(""));
// }

// console.log(reverseString2("O_ô 123"));

// // 3 - Escribir una función que encuentre el número mayor en un array.

// const arrNumbers1 = [3, 40, -10, 10, 77, -6, 0, 23];
// const arrNumbers2 = [2, 70, "hola"];

// function findBiggerNum (arrayNum){

//     if (arrayNum.some((el) => typeof el !== "number") || arrayNum.some((el) => el === Infinity) || arrayNum.some((el) => el === NaN)){

//         return "No es un array de números"
        
//     } else if (arrayNum.length === 0) {

//         return "El array está vacío"   

//     } else {
        
//         const arrSort = arrayNum.sort((a, b) => a - b);
//         // console.log(arrSort);
//         const lastNum = arrSort[arrayNum.length-1];
//         console.log(`El número mayor de este array es: ${lastNum}`);
//     }
// }

// findBiggerNum(arrNumbers1);
// console.log(findBiggerNum(arrNumbers2));

// // 4 - Crear un algoritmo que devuelva el factorial de un número.

// function calcFactorial(number) {
//     if (number === 0) {
//         console.log ("0! = 1");
//     } else if (number <0) {
//         console.log("Para esta operación se necesitan conocimientos de matemáticas avanzadas");
//     } else {
//         const numReady = Math.floor(number);
//         let arrIntegers = [];
//         for (let i = 1; i <= numReady; i++) {
//             arrIntegers.push(i);
//         }
//         const numFactorial = arrIntegers.reduce ((acc, curr) => acc * curr);
//         console.log(`${numReady}! = ${numFactorial}`);
//     }
// }

// calcFactorial(4);
// calcFactorial(5);
// calcFactorial(6);
// calcFactorial(0);
// calcFactorial(1);
// calcFactorial(-7);

// // 5 - Determinar si una palabra es un palíndromo.

// // function checkPalindrome(wordToCheck) {
// //     const wordReverse = (wordToCheck.toUpperCase().split("").reverse().join(""));
// //     if (wordToCheck.toUpperCase() === wordReverse) {
// //         console.log(`${wordToCheck} es un palíndromo`);
// //     } else {
// //         console.log(`${wordToCheck} no es un palíndromo`);
// //     }
// // }

// // checkPalindrome ("pepe");
// // checkPalindrome ("luzazul");
// // checkPalindrome ("Nolemonsnomelon");

// function checkPalindrome(word) {
//     const wordReady = (word.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f],/g, "").split(/\s/).join(""));
//     //console.log(wordReady);

//     const wordReverse = (wordReady.split("").reverse().join(""));
//     // console.log(wordReverse);

//     if (wordReady === wordReverse) {
//         console.log(`${word} es un palíndromo`);
//     } else {
//         console.log(`${word} no es un palíndromo`);
//     }
// }
// checkPalindrome ("Ana");
// checkPalindrome ("Palíndromo");
// checkPalindrome ("Ana lleva al oso la avellana");
// checkPalindrome ("Pepe lleva al oso la avellana");
// checkPalindrome ("Lo sé, Dama de Sol");

// function palindromo(palabra) {
//     let palabraInversa = palabra.split("").reverse().join("");
//     console.log(palabraInversa);
    
//     return palabra === palabraInversa ? "Es un palíndromo" : "No es un palíndromo";
// }
// console.log(palindromo("luzazul"));
// console.log(palindromo("arepera"));
// console.log(palindromo("yosoy"));


// // 6 - Crear un programa que calcule el número Fibonacci en la posición (n).

// function calcFibonacci (n) {
//     let fibSequence = [0, 1];

//     for (let i = 2; i <= n; i++) {
//         let adding = fibSequence [i - 1] + fibSequence [i - 2];
//         fibSequence.push(adding);
//     }
//     console.log(fibSequence);
// }
// calcFibonacci (9);

// // 7 - Ordenar un array de números en orden ascendente (sin usar sort).

// const numToSort = [900, 55, 2, 140, -8, 2.1, -1, 16, 244];
// const numToSort2 = [30, 0, 90];
// const numToSort3 = [1];
// const numToSort4 = [];
// const numToSort5 = ["hola", "pepe", "abracadabra", "no"];
// const numToSort55 = ["z", "c", "p", "a", "o", "A", "b"];
// const numToSort6 = [true, false];
// const numToSort7 = [22, 2, "hola"];
// const numToSort8 = [NaN, Infinity, 3];

// function sortArrayNum (array) {

//     if (array.some((el) => typeof el !== "number") || array.some((el) => el === Infinity) || array.some((el) => el === NaN)){

//         return "No es un array de números"
        
//     } else if (array.length === 0) {

//         return "El array está vacío"   

//     } else /*if (array.length !== 0)*/ {
        
//         let arrSorted = [];
//         let [firstNum, ...otherNum] = array;
//         let bigger = otherNum.some((el) => el > firstNum);
//         bigger ? otherNum.push(firstNum) : arrSorted.unshift(firstNum);   
    
//         while (otherNum.length > 0) {
//             [firstNum, ...otherNum] = otherNum;
//             bigger = otherNum.some((el) => el > firstNum);
//             bigger ? otherNum.push(firstNum) : arrSorted.unshift(firstNum); 
//         }

//         return arrSorted
//     }    
// }
// console.log(sortArrayNum (numToSort));
// console.log(sortArrayNum (numToSort2));
// console.log(sortArrayNum (numToSort3));
// console.log(sortArrayNum (numToSort4));
// console.log(sortArrayNum (numToSort5));
// console.log(sortArrayNum (numToSort55));
// console.log(sortArrayNum (numToSort6));
// console.log(sortArrayNum (numToSort7));
// console.log(sortArrayNum (numToSort8));


// // 8 - Crear una función que cuente cuántas veces aparece un carácter en un string.

// function countCharacter (string, character) {
//     const stringToArr = string.split("");
//     //console.log(stringtoArr);
//     const timesFound = stringToArr.filter((element) =>
//         element === character).length;
//     console.log(`"${character}" aparece ${timesFound} veces en "${string}"`);
// }
// countCharacter ("bonobo", "o");
// countCharacter ("\u00ab\Las cosas no tienen propósitos, como si el universo fuera una máquina en la que cada pieza tiene una función útil. ¿Cuál es la función de una galaxia? No sé si nuestra vida tiene una finalidad y no veo que importe. Lo que sí importa es que somos una parte. Como un hilo en una tela o una brizna de hierba en un campo. Es y somos. Lo que hacemos es como el viento que sopla en la hierba.\u00bb\ Ursula K. Le Guin", ".")

// // 9 - Escribir un algoritmo que determine si un año es bisiesto.
// ES5
// function isLeap(year) {
//     return new Date(year, 1, 29).getDate() === 29;
//   }
// // ES6
// const isLeap = year => new Date(year, 1, 29).getDate() === 29;

// function leapYear(year)
// {
//   return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
// }

// // 10 - Crear un programa que convierta grados Celsius a Fahrenheit y viceversa.

// function fahrenheitToCelcius(grados) {
//     return (grados - 32) / (9/5);
// }
// console.log (fahrenheitToCelcius(50) + "° Celcius");

// let gradosCelcius = 20;
// function celciusToFahrenheit(grados) {
//     return (grados * (9/5)) + 32;
// }
// console.log (`${gradosCelcius} grados Celcius son: ` + celciusToFahrenheit(gradosCelcius) + "° Fahrenheit");

// // 11 - Encontrar el segundo número más grande en un array.

// const arrNum3 = [33, 4, 82, 101, -2, 6];
// const arrNum4 = [2, 10, 1];
// function findSecond (arrNum) {
//     const arraySorted = arrNum.sort((a, b) => a - b).reverse();
//     //console.log(arraySorted);
//     const [, second, ...rest] = arraySorted;
//     return second
// }

// console.log(findSecond(arrNum3));
// console.log(findSecond(arrNum4));


// // 12 - Escribir una función que elimine los elementos duplicados de un array.

// const arrFrutas = ["peras", "manzanas", "peras", "plátanos", "melocotones"];
// const arrNumbers2 = [22, 45, 4, 56, 22, 80, 3, 4, 7];

// function deleteDuplicated (array) {
//     let arrFiltered = array.filter((element, i) => array.indexOf(element) === i);
//     console.log(arrFiltered);    
// }

// deleteDuplicated(arrFrutas);
// deleteDuplicated(arrNumbers2);

// PROBAR CON ARRAY.SOME() VER SINTAXIS MDN


// // 13 - Crear un algoritmo que sume todos los números de un array.

// function addAll(array) {
//     const total = array.reduce((acc, curr) =>
//         acc + curr);
//     console.log(total);
// }

// const arrNum1 = [11, 34, 89, 77, 2, -13];
// const arrNum2 = [1, 1, 1, 0, 10];

// addAll(arrNum1);
// addAll(arrNum2);

// // 14 - Escribir un programa que verifique si dos strings son anagramas.

// function checkAnagrams (string1, string2) {
//     const arrReady1 = string1.toString().
//     toUpperCase().
//     normalize("NFD").
//     replaceAll(/ /g, "").
//     replace(/[\u0300-\u036f]/g, "").
//     split("");

//     const arrReady2 = string2.toString().
//     toUpperCase().
//     normalize("NFD").
//     replaceAll(/ /g, "").
//     replace(/[\u0300-\u036f]/g, "").
//     split("");
//     // console.log(arrReady1);
//     // console.log(arrReady2);
//     if (arrReady1.length !== arrReady2.length) {
//         console.log(`${string1} y ${string2} no son anagramas`);
//     } else {
//         const sorted1 = arrReady1.sort().join("");
//         //console.log(sorted1);
//         const sorted2 = arrReady2.sort().join("");
//         //console.log(sorted2);
//         if (sorted1 === sorted2) {
//             console.log(`${string1} y ${string2} son anagramas`);
//         } else {
//             console.log(`${string1} y ${string2} no son anagramas`);
//         }
//     }
// }
// //  REVISION: ver si lo puedo escribir con op ternario

// checkAnagrams("Tom Marvolo Riddle", "I am Lord Voldemort");
// checkAnagrams(1234, 4231);
// checkAnagrams("hola", "Pepe");

// // 15 - Crear un programa que devuelva los números primos hasta el número (n).

function listPrimeNumbers(numN) {
    // for (let i = 2; i < numN; i++) {
    //     if(isPrime()) {
    //         console.log(numN)
    //     }
    // }
    // function isPrime() {
    //     for (let i = 2;  i < numN; i++) {
    //         return numN % i === 0 ? true : false;
    //     }
    // }
}


listPrimeNumbers(10);

// for (let i = 0; i <=10; i++) {
//     if (i % 2 === 0) {
//         continue;
//     }
//     console.log(i);
// }



// // 16 - Escribir una función que convierta un número romano a número arábigo.

// function romanToArabic(romanStr) {

//     if (typeof romanStr !== "string" | romanStr === null) {
//         console.log("Por favor, introduce un número romano válido");     

//     } else {
        
//         romanReady = romanStr.toUpperCase();

//         //comprobamos que el string introducido contenga los caracteres de romans, con la condición de que I, X, C y M no pueden formar grupos de más de tres, y V, L y D no forman grupos:

//         const romans = /(?<!I)I{1,3}|(?<!X)X{1,3}|(?<!C)C{1,3}|(?<!M)M{1,3}|(?<!V)V|(?<!L)L|(?<!D)D/g
//         const romanLeftRules = /V[XLCDM]|L[CDM]|D[M]|I{1,3}[LDCM]|I{2,}[VX]|X{1,3}[DM]|X{2,}[LC]|C{2,}[DM]|I(.{2,}I)|X(.{2,}X)|C(.{2,}C)/g
//         const romanSubstRules = /I[VX]|X[LC]|C[DM]/g

//         // https://regex101.com/
//         // REGLAS
//         // -  Las letras romanas que son múltiplos de cinco (V=5, L=50 o D=500) siempre suman y NUNCA pueden estar a la izquierda de un símbolo de un valor superior.
//         // RESTA:
//         // Los símbolos romanos cuya conversión empieza por 1 (I=1, X=10, C=100 o M=1000) solo puede restar si a derecha tiene el siguiente mayor que empieza por uno (ej: I solo puede restar a X) o es un múltiplo de cinco (V=5, L=50 o D=500).
//         // El I solo resta a los símbolos romanos V y a X.
//         // El X solo resta a los símbolos romano L y a C.
//         // El C solo resta a los símbolos romano D y a M.
    
//         romanChecked = romanReady.match(romans);
//         romanCheckedLeft = romanLeftRules.test(romanChecked.join(""));
//         romanCheckedSubst = romanSubstRules.test(romanChecked.join(""));
//         // console.log(romanReady.split(""))
//         // console.log(romanCheckedLeft);
//         romanCheckedReady = romanChecked.join("").split("");

//         //romanCheckedReady es un array con las coincidencias, por lo tanto, si no es igual su longitud del string introducido, es que hay algún caracter que no está entre los números romanos:
    
//         if (romanCheckedReady.length !== romanReady.length | romanCheckedLeft === true) {

//             console.log("Por favor, introduce un número romano válido"); 

//         } else {
//             console.log(romanCheckedReady);

//             if (romanCheckedSubst) {

//                 const arabicArr = romanChecked.map((el) => {
//                     switch(el){
//                         case "I": return -1;
//                         case "II": return 2;
//                         case "III": return 3;
//                         case "V": return 5;
//                         case "X": return -10;
//                         case "XX": return 20;
//                         case "XXX": return 30;
//                         case "L": return 50;
//                         case "C": return -100;
//                         case "CC": return 200;
//                         case "CCC": return 300;
//                         case "D": return 500;
//                         case "M": return 1000;
//                         case "MM": return 2000;
//                         case "MMM": return 3000;
//                         default: return 0;
//                     }
//                 })

//                 const arabicRed = arabicArr.reduce((acc, curr)=>
//                     acc + curr
//                 );

//                 console.log(`${romanReady} es ${arabicRed}`); 

//             } else {
                
//                 let arabicArr2 = romanCheckedReady.map((el) => {
//                     switch(el) {
//                         case "I": return 1;
//                         case "V": return 5;
//                         case "X": return 10;
//                         case "L": return 50;
//                         case "C": return 100;
//                         case "D": return 500;
//                         case "M": return 1000;
//                         default: return 0;
//                     }
//                 })
    
//                 console.log(arabicArr2);
    
//                 const arabicRed2 = arabicArr2.reduce((acc, curr)=>
//                     acc + curr
//                 );
    
//                 console.log(`${romanReady} es ${arabicRed2}`); 
//             }
//         }
//     } 
// }

// romanToArabic("MMxxvI");
// // romanToArabic("Ixvi");
// // romanToArabic("xhi");
// // romanToArabic("vvv");
// romanToArabic("MMXXIV");

// // 17 - Crear un algoritmo que valide si un string tiene paréntesis balanceados.

// function isBalanced(string) {

//     // const brackets = /[\{\}\(\)\<\>\[\]]/g;
//     const parenthesis = /[()]/g;
//     const parenthesis2 = /(\(\))/g;
//     // const parenthesis3 = //g;
//     // const brackets = /\(+/g;
//     const recurseEntirePattern= /\((?:())+\)/g;

//     const bracketsToCheck = string.match(parenthesis).join("");
//     const bracketsToCheck2 = string.match(parenthesis2).join("");
//     console.log(string.match(recurseEntirePattern).join(""));
    

//     console.log(bracketsToCheck, bracketsToCheck.length);
//     console.log(bracketsToCheck2, bracketsToCheck2.length);


//     // if (bracketsToCheck.length % 2 !== 0) {
//     //     console.log("Los paréntesis no están balanceados");   
//     // }

        
// }

// // isBalanced("(word.to<UpperCase().normal<ize(.r>eplace(/[\u0300-\u036f],/g, )");
// isBalanced("(elemento())(");
// // isBalanced("(=(elemento)");
// // isBalanced(")}][}");

// // 18 - Crear un programa que transforme una frase en "notación hacker" (leet speak).

// function writeLeet (string) {
//     let leetString = string.replace(/[aá]/gi, "4").
//         replace(/[eé]/gi, "3").
//         replace(/[ií]/gi, "1").
//         replace(/[oó]/gi, "0").
//         replace(/[t]/gi, "7").
//         replace(/[s]/gi, "5").
//         replace(/[l]/gi, "1").
//         replace(/[b]/gi, "8").
//         replace(/[g]/gi, "6").
//         replace(/[w]/gi, "vv").
//         replace(/[z]/gi, "2");
//     console.log(leetString);
// }

// let initialString = "nuevo capítulo de tu serie favorita, en leet speak";
// writeLeet (initialString);

// // 19 - Dado un año como parámetro (número), devuelve el número del siglo al que pertenece.

// function getCentury(year) {
//     const yearStr = year.toString();

//     const yearFirst = year.toString().substring(0, 2);
//     const yearLast = year.toString().substring(2, 4);

//     if (yearLast === "00") {
//         let century = parseInt(yearFirst);
//         return year +  " pertencece al siglo " + century
        
//     } else {
//         century = parseInt(yearFirst) + 1;
//         return year + " pertenece al siglo " + century
//     }
    
//     // if (typeof year !== "number"){
//     //     return "Escribe un año en formato de cuatro cifras"
//     // } 
// }
// console.log(getCentury(1999));
// console.log(getCentury(2000));
// console.log(getCentury(2001));


// 20 - Un reloj muestra:
// -> la hora (0 <= h <= 23)
// -> los minutos (0 <= m <= 59)
// -> y los segundos (0 <= s <= 59).
// Escribe una funcion que calcule los millisegundos que han pasado desde media noche 00:00:00 hasta la hora actual teniendo en cuenta que:
// – Hay 1000 millisegundos en un segundo
// – Podemos obtener la hora, minutos y segundos con la función "getTime"

getMilliseconds = () => {

    //estableciendo la fecha de hoy:
    const today = new Date();
    // console.log(today);
    
    //construyendo el reloj para mostrar:

    const hours = today.getHours()<9 ?"0"+today.getHours():today.getHours();
    const minutes = today.getMinutes()<9 ?"0"+today.getMinutes():today.getMinutes();
    const seconds = today.getSeconds()<9 ?"0"+today.getSeconds():today.getSeconds();
    console.log(`${hours}:${minutes}:${seconds}`);
    const millisecons = today.getMilliseconds();

    //calculando milisegundos (Método 1):

    todayTime = today.getTime();
    // console.log(todayTime);
    midnightToday = today.setHours(0, 0, 0, 0);
    // console.log(midnightToday); 
    const milliseconsPast = todayTime - midnightToday;
    console.log(`Han pasado ${milliseconsPast} milisegundos desde la medianoche`);    


    // calculando milisegundos (Método 2):

    const hoursToMin = hours * 60;
    const minToSeconds = (hoursToMin + minutes) * 60;
    const secondsToMilliseconds = (minToSeconds + seconds) * 1000;
    const milliseconsPast2 = secondsToMilliseconds + millisecons;
    console.log(`Han pasado ${milliseconsPast2} milisegundos desde esta medianoche`);
}

getMilliseconds();
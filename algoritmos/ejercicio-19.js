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
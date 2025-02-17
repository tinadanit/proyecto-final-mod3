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
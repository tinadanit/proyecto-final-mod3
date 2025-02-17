// 5 - Determinar si una palabra es un palíndromo.

// function checkPalindrome(wordToCheck) {
//     const wordReverse = (wordToCheck.toUpperCase().split("").reverse().join(""));
//     if (wordToCheck.toUpperCase() === wordReverse) {
//         console.log(`${wordToCheck} es un palíndromo`);
//     } else {
//         console.log(`${wordToCheck} no es un palíndromo`);
//     }
// }

// checkPalindrome ("pepe");
// checkPalindrome ("luzazul");
// checkPalindrome ("Nolemonsnomelon");

function checkPalindrome(word) {
    const wordReady = (word.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f],/g, "").split(/\s/).join(""));
    //console.log(wordReady);

    const wordReverse = (wordReady.split("").reverse().join(""));
    // console.log(wordReverse);

    if (wordReady === wordReverse) {
        console.log(`${word} es un palíndromo`);
    } else {
        console.log(`${word} no es un palíndromo`);
    }
}
checkPalindrome ("Ana");
checkPalindrome ("Palíndromo");
checkPalindrome ("Ana lleva al oso la avellana");
checkPalindrome ("Pepe lleva al oso la avellana");
checkPalindrome ("Lo sé, Dama de Sol");

function palindromo(palabra) {
    let palabraInversa = palabra.split("").reverse().join("");
    console.log(palabraInversa);
    
    return palabra === palabraInversa ? "Es un palíndromo" : "No es un palíndromo";
}
console.log(palindromo("luzazul"));
console.log(palindromo("arepera"));
console.log(palindromo("yosoy"));
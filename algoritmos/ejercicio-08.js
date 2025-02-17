// 8 - Crear una función que cuente cuántas veces aparece un carácter en un string.

function countCharacter (string, character) {
    const stringToArr = string.split("");
    //console.log(stringtoArr);
    const timesFound = stringToArr.filter((element) =>
        element === character).length;
    console.log(`"${character}" aparece ${timesFound} veces en "${string}"`);
}
countCharacter ("bonobo", "o");
countCharacter ("\u00ab\Las cosas no tienen propósitos, como si el universo fuera una máquina en la que cada pieza tiene una función útil. ¿Cuál es la función de una galaxia? No sé si nuestra vida tiene una finalidad y no veo que importe. Lo que sí importa es que somos una parte. Como un hilo en una tela o una brizna de hierba en un campo. Es y somos. Lo que hacemos es como el viento que sopla en la hierba.\u00bb\ Ursula K. Le Guin", ".")
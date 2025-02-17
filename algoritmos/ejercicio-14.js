// 14 - Escribir un programa que verifique si dos strings son anagramas.

function checkAnagrams (string1, string2) {
    const arrReady1 = string1.toString().
    toUpperCase().
    normalize("NFD").
    replaceAll(/ /g, "").
    replace(/[\u0300-\u036f]/g, "").
    split("");

    const arrReady2 = string2.toString().
    toUpperCase().
    normalize("NFD").
    replaceAll(/ /g, "").
    replace(/[\u0300-\u036f]/g, "").
    split("");
    // console.log(arrReady1);
    // console.log(arrReady2);
    if (arrReady1.length !== arrReady2.length) {
        console.log(`${string1} y ${string2} no son anagramas`);
    } else {
        const sorted1 = arrReady1.sort().join("");
        //console.log(sorted1);
        const sorted2 = arrReady2.sort().join("");
        //console.log(sorted2);
        if (sorted1 === sorted2) {
            console.log(`${string1} y ${string2} son anagramas`);
        } else {
            console.log(`${string1} y ${string2} no son anagramas`);
        }
    }
}
// REVISION: ver si lo puedo escribir con op ternario

checkAnagrams("Tom Marvolo Riddle", "I am Lord Voldemort");
checkAnagrams(1234, 4231);
checkAnagrams("hola", "Pepe");
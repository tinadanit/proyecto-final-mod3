// 12 - Escribir una función que elimine los elementos duplicados de un array.

const arrFrutas = ["peras", "manzanas", "peras", "plátanos", "melocotones"];
const arrNumbers2 = [22, 45, 4, 56, 22, 80, 3, 4, 7];

function deleteDuplicated (array) {
    let arrFiltered = array.filter((element, i) => array.indexOf(element) === i);
    console.log(arrFiltered);    
}

deleteDuplicated(arrFrutas);
deleteDuplicated(arrNumbers2);
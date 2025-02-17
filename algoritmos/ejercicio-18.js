// 18 - Crear un programa que transforme una frase en "notación hacker" (leet speak).

function writeLeet (string) {
    let leetString = string.replace(/[aá]/gi, "4").
        replace(/[eé]/gi, "3").
        replace(/[ií]/gi, "1").
        replace(/[oó]/gi, "0").
        replace(/[t]/gi, "7").
        replace(/[s]/gi, "5").
        replace(/[l]/gi, "1").
        replace(/[b]/gi, "8").
        replace(/[g]/gi, "6").
        replace(/[w]/gi, "vv").
        replace(/[z]/gi, "2");
    console.log(leetString);
}

let initialString = "nuevo capítulo de tu serie favorita, en leet speak";
writeLeet (initialString);
// 16 - Escribir una función que convierta un número romano a número arábigo.

function romanToArabic(romanStr) {

    if (typeof romanStr !== "string" | romanStr === null) {
        console.log("Por favor, introduce un número romano válido");     

    } else {
        
        romanReady = romanStr.toUpperCase();

        //comprobamos que el string introducido contenga los caracteres de romans, con la condición de que I, X, C y M no pueden formar grupos de más de tres, y V, L y D no forman grupos:

        const romans = /(?<!I)I{1,3}|(?<!X)X{1,3}|(?<!C)C{1,3}|(?<!M)M{1,3}|(?<!V)V|(?<!L)L|(?<!D)D/g
        const romanLeftRules = /V[XLCDM]|L[CDM]|D[M]|I{1,3}[LDCM]|I{2,}[VX]|X{1,3}[DM]|X{2,}[LC]|C{2,}[DM]|I(.{2,}I)|X(.{2,}X)|C(.{2,}C)/g
        const romanSubstRules = /I[VX]|X[LC]|C[DM]/g

        // https://regex101.com/
        // REGLAS
        // -  Las letras romanas que son múltiplos de cinco (V=5, L=50 o D=500) siempre suman y NUNCA pueden estar a la izquierda de un símbolo de un valor superior.
        // RESTA:
        // Los símbolos romanos cuya conversión empieza por 1 (I=1, X=10, C=100 o M=1000) solo puede restar si a derecha tiene el siguiente mayor que empieza por uno (ej: I solo puede restar a X) o es un múltiplo de cinco (V=5, L=50 o D=500).
        // El I solo resta a los símbolos romanos V y a X.
        // El X solo resta a los símbolos romano L y a C.
        // El C solo resta a los símbolos romano D y a M.
    
        romanChecked = romanReady.match(romans);
        romanCheckedLeft = romanLeftRules.test(romanChecked.join(""));
        romanCheckedSubst = romanSubstRules.test(romanChecked.join(""));
        // console.log(romanReady.split(""))
        // console.log(romanCheckedLeft);
        romanCheckedReady = romanChecked.join("").split("");

        //romanCheckedReady es un array con las coincidencias, por lo tanto, si no es igual su longitud del string introducido, es que hay algún caracter que no está entre los números romanos:
    
        if (romanCheckedReady.length !== romanReady.length | romanCheckedLeft === true) {

            console.log("Por favor, introduce un número romano válido"); 

        } else {
            console.log(romanCheckedReady);

            if (romanCheckedSubst) {

                const arabicArr = romanChecked.map((el) => {
                    switch(el){
                        case "I": return -1;
                        case "II": return 2;
                        case "III": return 3;
                        case "V": return 5;
                        case "X": return -10;
                        case "XX": return 20;
                        case "XXX": return 30;
                        case "L": return 50;
                        case "C": return -100;
                        case "CC": return 200;
                        case "CCC": return 300;
                        case "D": return 500;
                        case "M": return 1000;
                        case "MM": return 2000;
                        case "MMM": return 3000;
                        default: return 0;
                    }
                })

                const arabicRed = arabicArr.reduce((acc, curr)=>
                    acc + curr
                );

                console.log(`${romanReady} es ${arabicRed}`); 

            } else {
                
                let arabicArr2 = romanCheckedReady.map((el) => {
                    switch(el) {
                        case "I": return 1;
                        case "V": return 5;
                        case "X": return 10;
                        case "L": return 50;
                        case "C": return 100;
                        case "D": return 500;
                        case "M": return 1000;
                        default: return 0;
                    }
                })
    
                console.log(arabicArr2);
    
                const arabicRed2 = arabicArr2.reduce((acc, curr)=>
                    acc + curr
                );
    
                console.log(`${romanReady} es ${arabicRed2}`); 
            }
        }
    } 
}

romanToArabic("MMxxvI");
// romanToArabic("Ixvi");
// romanToArabic("xhi");
// romanToArabic("vvv");
romanToArabic("MMXXIV");
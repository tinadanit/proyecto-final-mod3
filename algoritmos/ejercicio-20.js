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
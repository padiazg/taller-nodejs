/*
    setInterval: ejecuta una función repetídamente, con unintérvalo mínimo
    entre ejecuciones.

    var timerId = setInterval(función, intérvalo[, arg1, arg2...])

    función: es la función a ejecutar
    intérvalo: es el intérvalo de tiempo a esperar
*/

var a=0;

var id = setInterval(function() {
    console.log('tarea repetitiva, a=', a);
    a++;
    if (a>=10)
        clearInterval(id);
}, 1000);

console.log('nivel raiz');

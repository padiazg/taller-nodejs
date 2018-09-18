
var tiempoAgendado = 3000; // en milisegundos

// inicializamos una tarea que esperará 5s para ejecutarse
var id0 = setTimeout(function() {
    console.log('Tarea culminada con éxito');
    // si pudimos ejecutar nuestro bloque de código, paramos los timers
    clearInterval(id1); // interval, que intentará matar este timer si llega
                        // hasta cierta cuenta
    clearTimeout(id0);  // este timeout
}, tiempoAgendado);

// ejecutamos otra tarea cada 1s, y contamos las veces que se ejecuta
var t0 = 1;
var id1 = setInterval(function() {
    console.log('tick ', t0++);
    if (t0>=5) {
        // si llegamos hasta aquí, no se pudo terminar la tarea agendada en el
        // tiempo establecido
        clearTimeout(id0);  // el timeout que tiene agendada la tarea
        clearInterval(id1); // este interval
        console.log('tiempo agotado después de', t0, 'seg. (aproximádamente)');
    }
}, 1000)

// la tarea repetitiva se ejecutará indefinidamente, hasta que "matemos" nuestra
// aplicación

console.log('nivel raíz');

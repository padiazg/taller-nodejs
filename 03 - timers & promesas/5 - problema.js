/*
	Ejecutar una taréa asincrona usando callbacks
	Buscar en internet artículos sobre "callback hell"
*/

const resolve = function() {
    console.log('Todo ok');
}

const reject = function() {
    console.log('Todo mal');
}

const tareaAsincrona = function(condicion) {
    setTimeout(function() {
        console.log("Proceso asincrono terminado");
		if (condicion) {
			resolve();
		} else {
			reject();
		}
    }, 1300);
}

tareaAsincrona();

console.log("Código sencuencial");

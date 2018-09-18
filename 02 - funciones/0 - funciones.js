/*
function nombre(parametro1, parametro2, ...) {
    bloque de código
}
*/


// una función simple
function saludar_mundo() {
    console.log('Hola mundo!');
}

saludar_mundo();

// las funciones pueden recibir parámetros
function saludar_alquien(quien) {
    console.log('Hola ' + quien + '!');
}
saludar_alquien('Pedro');

// las funciones pueden retornar valores
function sumar(a, b) {
    return a + b;
}

console.log('2 + 3 = ' + sumar(2,3));

// las funciones tienen tipo y pueden asignarse a variables
console.log('\nFunciones tienen tipo y son asignables');
var saludo = saludar_alquien;
console.log('typeof:', typeof saludo);
console.log('saludo instanceof Function:', saludo instanceof Function);

saludo('Ana');

// las funciones pueden recibir otras funciones como parámetro
console.log('\nFunciones como parámetros');
function saludar_varios(my_saludo) {
    if (!(my_saludo instanceof Function)) {
        console.log('Debe especificar una función como parámetro');
        return;
    }
    my_saludo('Lucio');
    my_saludo('Aristides');
}

saludar_varios('hola');
saludar_varios(saludo);

// podemos declarar funciones anónimas
saludar_varios(function(persona) {
    console.log('Saludos ' + persona);
});

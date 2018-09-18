
var numeros = [31, 25, 3, 54, 16, 14, 98, 76, 34, 65, 23];
console.log('numeros:', numeros);

var ordenado = numeros.sort((a,b) => b-a );
console.log('ordenado:', ordenado);

console.log('\nsin rest');
function procesa0() {
    var a = arguments[0];
    var b = arguments[1];
    var c = arguments[2];
    var resto  = [];
    var suma   = 0;
    var conteo = 0

    console.log('a=', a);
    console.log('b=', b);
    console.log('c=', c);

    if (arguments.length>3) {
        for(var i=3; i<arguments.length; i++) {
            resto.push(arguments[i]);
            suma += arguments[i];
            conteo++;
        } // for ...
        console.log('resto => suma=', suma, 'conteo=', conteo, 'promedio=', (suma/conteo));
    } // if ...
}

/*
El método apply() invoca una determinada función asignando explícitamente el
objeto this y un array o similar (array like object) como parámetros
(argumentos) para dicha función.
*/
procesa0.apply(null, numeros);
//procesa0(...numeros);

console.log('\ncon rest');
function procesa1(a, b, c, ...resto) {
    console.log('a=', a);
    console.log('b=', b);
    console.log('c=', c);
    if (resto.length>0) {
        var suma = resto.reduce((suma, valor) => suma + valor );
        console.log('resto => suma=', suma, 'conteo=', resto.length, 'promedio=', (suma/resto.length));
    }
}
//procesa1.apply(null, numeros);
procesa1(...numeros);

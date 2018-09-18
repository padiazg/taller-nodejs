/*
La sintaxis de los parámetros rest nos permiten representar un número
indefinido de argumentos como un arreglo.

Sintaxis
function(a, b, ...restoArgumentos) {
  // ...
}

Si el ultimo argumento definido de una función se le antepone con ...,
éste se convierte en un arreglo cuyos elementos desde el 0 (inclusivo) hasta
restoArgumentos.length (exclusivo) son pasados a la función.

En el ejemplo superior, restoArgumentos debería recolectar el tercer argumento
de la función (debido a que el primero esta asignado a 'a' y el segundo a 'b')
y todos los argumentos consecutivos


Diferencia entre los parámetros rest y el objeto arguments

Hay 3 principales diferencias entre los parámetros rest y el objeto arguments:

    * Los parámetros rest son sólo los que no se les ha asignado un nombre,
      mientras que el objeto arguments contiene todos los argumentos pasados
      a la función;

    * El objeto arguments no es un arreglo real, mientras los parámetros rest
      son instancias de  Array , lo que significa que lo los metodos como sort,
      map, forEach o pop pueden aplicarse directamente;

    * El objeto arguments tiene una funcionalidad adicional específica para
      ella misma (como la propiedad callee).
*/

var concatenar0 = function(separador) {
    var concatenado = "";
    if (arguments.length>1) {
        for(var i=1; i<arguments.length-1; i++) {
            concatenado += arguments[i] + separador;
        }
        concatenado += arguments[arguments.length-1];
    }
    return concatenado;
}
console.log('\nsin operador rest: ', concatenar0('-', 'abcd', 'efgh', 'ijkl'));

var concatenar1 = function(separador, ...palabras) {
    var concatenado = "";
    // solo tiene sentido hacer algo si se hay algo a concatenar
    if (palabras.length>0) {
        palabras.forEach(function(elemento, indice, arreglo) {
            concatenado += elemento + (indice < arreglo.length-1 ? separador : "");
            // no agregamos el separador si estamos agregando el último elemento
        }); // forEach ...
    } // if ...
    return concatenado;
}
console.log('\ncon operador rest: ', concatenar1('*', 'abcd', 'efgh', 'ijkl'));

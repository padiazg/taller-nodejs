/*

  LET

La sentencia let declara una variable de alcance local, la cual, opcionalmente,
puede ser inicializada con algún valor.

let permite declarar variables limitando su alcance (scope) al bloque,
declaración, o expresión donde se está usando. Lo anterior diferencia la
expresión let de la palabra reservada var, la cual define una variable global
o local en una función sin importar el ámbito del bloque.

Sintaxis
let var1 [= valor1] [, var2 [= valor2]] [, ..., varN [= valorN]];


var1, var2, …, varN
    Nombre de la variable. Puede ser cualquier identificador de variable legal.
valor1, valor2, …, valorN
    Valor inicial de la variable. Puede ser cualquier expresión legal.
*/

/*
Reglas de alcance

Variables declaradas por let tienen por alcance el bloque en el que se han
definido, así mismo, como en cualquier bloque interno. De esta manera, let
trabaja muy parecido a var. La más notable diferencia es que el alcance de
una variable var es la función contenedora.
*/

function varTest() {
    console.log('varTest');
    var x = 31;
    if (true) {
        var x = 71;  // misma variable!
        console.log('x interna', x);    // 71
        x += 1;
        console.log('x interna +1', x); // 72
    } // if (true) ...
    console.log('x externa',x);         // 72
    x += 1;
    console.log('x externa +1', x);     // 73

} // varTest ...

function letTest() {
    console.log('\nletTest');
    let x = 31;
    if (true) {
        let x = 71;  // variable diferente
        console.log('x interna', x);  // 71
        x += 1;
        console.log('x interna +1', x); // 72

    } // if (true) ...
    console.log('x externa', x);  // 31
    x += 1;
    console.log('x externa +1', x); // 32
} // letTest ...

varTest();
letTest();


/*
let vs var

Cuando usamos let dentro de un bloque, podemos limitar el alcance de la
variable a dicho bloque. Notemos la diferencia a con var, cuyo alcance reside
dentro de la función donde ha sido declarada la variable.
*/

console.log('\nlet vs var')
var a = 5;
var b = 10;

if (a === 5) {
  let a = 4; // El alcance es dentro del bloque if
  var b = 1; // El alcance es global

  console.log('a en el bloque if:', a);  // 4
  console.log('b en el bloque if:', b);  // 1
}

console.log('a en nivel superior:', a); // 5
console.log('b en nivel superior:', b); // 1

/*
La redeclaración de la misma variable bajo un mismo ámbito de bloque terminaría
en un error de tipo TypeError.
*/
// if (true) {
//     let a=1;
//     let a=2;
// }


/*Symbol es un tipo de datos cuyos valores son únicos e immutables. Dichos
valores pueden ser utilizados como identificadores (claves) de las propiedades
de los objetos.  Cada valor del tipo Symbol tiene asociado un valor del tipo
String o Undefined que sirve únicamente como descripción del símbolo.

La función Symbol primitive data type es el constructor de valores del tipo
Symbol. Cuando Symbol es llamado como función nos devuelve una nuevo valor del
tipo Symbol. El constructor Symbol no debe ser usado con el operador new.
Tampoco debe ser extendido mediante clases.

Sintaxis
let variable = Symbol([description])

Parametros
description Optional
    Es un valor opcional de tipo String. Unicamente sirve como descripción del
    símbolo que puede ser útil para depurar. No permite el acceso al símbolo
    que describe.
*/

// Para crear un nuevo símbolo, simplemente escribimos  Symbol(), opcionalmente
// con un argumento de tipo String que constituiría la descripción del símbolo:

var sym1 = Symbol();
var sym2 = Symbol("foo");
var sym3 = Symbol("foo");

// El código anterior crea tres símbolos nuevos. Hay que destacar que
// Symbol("foo") no convierte la cadena "foo" en un símbolo, sino que crea un
// símbolo nuevo que tiene la misma descripción.

console.log('Symbol("foo") === Symbol("foo") => ', sym2 === sym3); // false

// La siguiente sintaxis con el operador new lanzará un TypeError:
//var sym = new Symbol(); // TypeError

// Esto evita la creación de un objeto envolvente explícito de Symbol en lugar
// de un nuevo valor de tipo símbolo.

/* Conversión de tipos para Symbol
Algunas cosas a tener en cuenta cuando trabajamos con conversión de tipos y
objetos Symbol

* Cuando tratemos de convertir un Symbol a numero, se lanzará un TypeError
    Ej: +sym
        sym | 0

* Cuando usamos igualdad lijera (loose equality), Object(sym) == sym retorna true.

* Symbol("foo") + "bar" lanza un TypeError (can't convert symbol to string).

*/

console.log('\nAunque las descripciones sean iguales, cada Symbol es único');
let foo = Symbol('baz');
let bar = Symbol('baz');

console.log('foo === bar', foo === bar);
// <-- false
console.log(foo);
// <-- Symbol(baz)

console.log('\nSymbol y objetos');
let user = {};
let email = Symbol('email');

user.name = 'Fred';
user.age = 30;
user[email] = 'fred@example.com';

console.log('Object.keys(user) =>', Object.keys(user));
// <-- Array [ "name", "age" ]

console.log('Object.getOwnPropertyNames(user) =>', Object.getOwnPropertyNames(user));
// <-- Array [ "name", "age" ]

console.log('JSON.stringify(user) =>', JSON.stringify(user));
// <-- "{"name":"Fred","age":30}"

console.log('Object.getOwnPropertySymbols(user) =>', Object.getOwnPropertySymbols(user));
// <-- Array [ Symbol() ]

console.log('Reflect.ownKeys(user) =>', Reflect.ownKeys(user));
// <-- Array [ "name", "age", Symbol() ]
console.log('user[email] =', user[email]);

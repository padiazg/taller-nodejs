/*
La expresión de función flecha tiene una sintaxis más corta que una expresión
de función convencional y no vincula sus propios this, arguments, super, o
new.target. Las funciones flecha siempre son anónimas. Estas funciones son
funciones no relacionadas con métodos y no pueden ser usadas como
constructores.

Sintaxis Básica

(param1, param2, paramN) => {declaraciones}
(param1, param2, paramN) =>expresion
// Equivalente a: () => { return expresion; }

// Los paréntesis son opcionales cuando sólo dispone de un argumento: singleParam => { statements }
singleParam => expresion

// Una función sin argumentos requiere paréntesis:
() => { declaraciones }
*/

const f0 = () => {
    console.log('Hola mundo0!');
}
f0();

// esta definición es igual a la anterior
const f1 = () => console.log('Hola mundo1!');
f1();

// parámetros
const f2 = (quien) => console.log('Hola ', quien, '!');
f2('Walter');

// se admiten parámetros por defecto
const f3 = (a=2, b=3) => a*b;
console.log('sin parametros:', f3());
console.log('un solo parametro:', f3(4));
console.log('dos parametros:', f3(4,5));

// así como destructuracion
var o = {p: 42, q: true};
const f4 = ({p}) => console.log('p:', p);
f4(o);

const promesa = payload => new Promise((resolve, reject) => {
    resolve("texto =>"+payload);
})

promesa("Promesa anonima")
.then(texto => console.log(texto))
;

(async function() {
    console.log(await promesa("Otra promesa"));
})()

// main();

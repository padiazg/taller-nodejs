/*
En ES6, let no eleva la variable a la parte supertior del bloque. Si se hace
una referencia a la variable antes de declarar la misma variable con let
terminaríamos con un error de tipo ReferenceError, esto porque la variables
vive en una "zona muerta temporal" desde el inicio del bloque hasta que la
declaración ha sido procesada.
*/

function do_something() {
  console.log('bar:', bar); // undefined
  // console.log('foo', foo); // ReferenceError: foo is not defined
  var bar = 1;
  let foo = 2;
}

do_something();

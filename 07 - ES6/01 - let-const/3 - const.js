/*

   CONST

Las constantes presentan un ámbito de bloque tal y como lo hacen las variables
definidas usando la instrucción let, con la particularidad de que el valor de
una constante no puede cambiarse a través de la reasignación, y no se puede
redeclarar.

Sintaxis
const varname1 = value1 [, varname2 = value2 [, varname3 = value3 [, ... [, varnameN = valueN]]]];

varnameN
    Nombre de la constante. Puede ser un identificador legal.

valueN
    Valor de la constante. Puede ser cualquier expresión legal.

Esta declaración crea una constante que puede ser global o local a la función
en la que se declara. Es necesario inicializar la constante, es decir, se debe
especificar su valor en la misma sentencia en la que se declara, lo que tiene
sentido, dado que no se puede cambiar posteriormente.

La declaración de una constante crea una referencia de sólo lectura. No
significa que el valor que tiene sea inmutable, sino que el identificador de
variable no puede ser reasignado, por lo tanto, en el caso de que la asignación
a la constante sea un objeto, el objeto si que puede ser alterado.

Una constante no puede compartir su nombre con una función o variable en el
mismo ámbito.
*/

const a = 7;
console.log("a es " + a + ".");

// Las constantes pueden ser declaradas en mayusculas o minusculaas,
// pero por convencion se escribe todo en mayusculas

// definimos MY_FAV como constante y le damos un valos de 7
const MY_FAV = 7;

// lanzara un error
// MY_FAV = 20;

// imprimira 7
console.log('mi número favorito es:', MY_FAV);

// lanzara un error
// const MY_FAV = 20;

// el nombre MY_FAV esta reservado para la constante anterior, por lo que también fallara
// var MY_FAV = 20;

// esto tambien nos lanzara un error
// let MY_FAV = 20;

// es importante tener en cuenta como funciona el alcance de bloque
if (MY_FAV === 7) {
    // esto esta bien y crea una variable MY_FAV de alcance/ambito de bloque
    // (funciona igual de bien con let para declarar un bloque de alcance/ambito de variable no-constante)
    let MY_FAV = 20;

    // MY_FAV ahora es 20
    console.log('mi número favorito dentro del if es:', MY_FAV);

    // este se alza en el contexto global y lanza un error
    //var MY_FAV = 20;
}

// MY_FAV todavia es 7
console.log('mi número favorito todavia es:', MY_FAV);

// lanza error, falta el inicializador en la declaracion de const
//const FOO;

// const tambien funciona en objetos
const MY_OBJECT = {'clave': 'valor'};
console.log('MY_OBJECT:', MY_OBJECT);

// Intentando sobrescribir el objecto nos lanza un error
//MY_OBJECT = {'OTRA_CLAVE': 'valor'};

// Sin embargo, los atriibutos de los objetos no estan protegidas,
// por lo que la siguiente sentencia se ejecutara sin problema
MY_OBJECT.key = 'otroValor'; // podemos usar Object.freeze() para hacer un objeto inmutable
console.log('MY_OBJECT:', MY_OBJECT);

// Lo mismo se aplica a los arrays
const MY_ARRAY = [];
// es posible empujar elementos en el array
MY_ARRAY.push('A'); // ["A"]
console.log('MY_ARRAY:', MY_ARRAY);

// Sin embargo, asignar un nuevo array a la variable lanza error
//MY_ARRAY = ['B'];

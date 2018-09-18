/*
Las plantillas de cadena de texto (template strings) son literales de texto que
habilitan el uso de expresiones incrustadas. Es posible utilizar cadenas de
texto de más de una línea, y funcionalidades de interpolación de cadenas de
texto con ellas.

Las plantillas de cadena de texto se delimitan con el caracter de comillas o
tildes invertidas (` `), en lugar de las comillas simples o dobles. Las
plantillas de cadena de texto pueden contener marcadores, indentificados por el
signo de pesos, y envueltos en llaves (${expresión}). Las expresiones contenidas
en los marcadores, junto con el texto entre ellas, son enviados como argumentos
a una función. La función por defecto simplemente concatena las partes para
formar una única cadena de texto. Si hay una expresión antes de la plantilla de
cadena de texto (i.e. tag),  llamamos a esta plantilla de cadena de texto
"plantilla de cadena de texto con etiqueta". En este caso, la expresión de
etiqueta (típicamente una función) es llamada a partir de la cadena resultante
de procesar la plantilla de cadena de texto, que luego puede ser manipulada
antes de ser devuelta.
*/

//Cadenas de más de una línea
console.log('Cadenas de más de una línea');

//ES5
console.log('En ES5');
console.log("línea 1 de cadena de texto\n\
línea 2 de cadena de texto");
// "línea 1 de cadena de texto
// línea 2 de cadena de texto"

console.log('\nEn ES6');
//ES6
// Para obtener el mismo efecto con cadenas de texto multilínea, con ES6 es posible escribir:
console.log(`línea 1 de la cadena de texto
línea 2 de la cadena de texto`);
// "línea 1 de la cadena de texto
// línea 2 de la cadena de texto"

//Interpolación de expresiones
console.log('\nInterpolación de expresiones');
var a = 5;
var b = 10;
console.log("Quince es " + (a + b) + " y no " + (2 * a + b) + ".");
// "Quince es 15 y no 20."

console.log(`Quince es ${a + b} y no ${2 * a + b}.`);
// "Quince es 15 y no 20."

// Plantillas de cadena de texto con postprocesador

/*
Una forma más avanzada de plantillas de cadenas de texto son aquellas que
contienen una función de postprocesado . Con ellas es posible modificar la
salida de las plantillas, usando una función. El primer argumento contiene un
array con las cadenas de texto de la plantilla ("Hola" y "mundo" en el ejemplo).
El segundo y subsiguientes argumentos con los valores procesados (ya cocinados)
de las expresiones de la plantilla (en este caso "15" y "50"). Finalmente, la
función devuelve la cadena de texto manipulada. El nombre "tag" de la función
no es nada especial, se puede usar cualquier nombre de función en su lugar.
*/

const plural = (textos, ...valores) => {
    console.log(`\n> textos = > ${textos} / valores = > ${valores}`);
    const [v] = valores;
    // const v = valores[0];

    let texto;
    switch(v) {
        case 0:
            texto = 'no existen cuotas';
            break;
        case 1:
            texto = `${textos[0]} 1 ${textos[1]}`;
            break;
        default:
            texto = `${textos[0].trim()}n ${v} ${textos[1].trim()}s`;
    }

    return texto;
};

let j=0;
console.log( plural`existe ${j} cuota`);

j=1;
console.log( plural`existe ${j} cuota`);

j=10;
console.log( plural`existe ${j} cuota`);

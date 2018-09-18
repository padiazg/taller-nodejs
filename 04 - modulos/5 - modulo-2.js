function suma(a,b) { 
	return a+b;
}

function mult(a,b) {
	return a*b;
}

function div(a,b){
	// verificamos no dividir por cero
	return b != 0 ? a/b : 0
}

module.exports = { suma, mult, div }


// version ES6, veremos eso mas adelante
/*
const suma = (a,b) => a+b
const mult = (a,b) => a*b
const div  = (a,b) => b != 0 ? a/b : 0

module.exports = { suma, mult, div }
*/

// version ES6 aún mas compacta
/*
module.exports = {
    suma: (a,b) => a+b,
    mult: (a,b) => a*b,
    div: (a,b) => b != 0 ? a/b : 0
}
*/
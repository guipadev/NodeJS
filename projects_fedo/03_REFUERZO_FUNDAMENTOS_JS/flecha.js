/*
Funciones tradicionales como son function manipulan el valor a la que apunta this
Y las Funciones Flechas No
*/

function sumar(a, b) {
    return a + b;
}

console.log(sumar(1, 2));

// Arrow functions
const sumar2 = (a, b) => {
    return a + b;
}

console.log(sumar2(41, 52));

// Cuando el return solo se da en una sola linea, se puede representar de esta forma
const sumar3 = (a, b) => a + b;
console.log(sumar3(55, 55));

const saludar = () => 'Hello';
console.log(saludar());

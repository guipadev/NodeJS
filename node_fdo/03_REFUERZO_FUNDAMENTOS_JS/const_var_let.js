// Uso var
var nombre = 'Wolverine';

if (true) {
    var nombre = 'Magneto';
}

console.log(nombre); // Magneto


// Uso let
let nombre1 = 'Wolverine';

if (true) {
    let nombre1 = 'Magneto';
}

console.log(nombre1); // Wolverine

// Uso const
const nombre2 = 'Wolverine';

if (true) {
    const nombre2 = 'Magneto';
}

console.log(nombre2); // Wolverine
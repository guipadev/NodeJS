const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    //edad: 30,
    getNombre: function() { 
        return `${this.nombre} ${this.apellido}`; 
    },
}

console.log(deadpool.getNombre()); 

// En vez de esto
// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;

// Destructuración
const { nombre, apellido, poder, edad = 0 } = deadpool;
console.log(nombre, apellido, poder);

// Esta funcion tambien se puede destructurar
/*
function imprimeHeroe(heroe) {
    const { nombre, apellido, poder, edad = 0 } = heroe;
    console.log(nombre, apellido, poder, edad);
}
*/

function imprimeHeroe({ nombre, apellido, poder, edad = 0 }) {
    nombre = 'Fercho'; // En el anterior al ser const no se podria cambiar
    console.log(nombre, apellido, poder, edad);
}

imprimeHeroe(deadpool);

// Este arreglo tambien se puede destructurar
const heroes = ['Hulk', 'Iron', 'Thor'];
const heroes2 = ['Hulk', 'Iron', 'Thor'];

// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];

// Destructuración arreglo
const [h1, h2, h3] = heroes;
console.log(h1, h2, h3);

const [, , p3] = heroes2;
console.log(p3);
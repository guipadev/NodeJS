const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

// const colors = require('colors');
require('colors');

console.clear();

/*
console.log(argv);
console.log(process.argv);
console.log('base: yargs', argv.base);
const base = 6;
*/

crearArchivo(argv.b, argv.l, argv.h)        // rainbow para colorear
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));
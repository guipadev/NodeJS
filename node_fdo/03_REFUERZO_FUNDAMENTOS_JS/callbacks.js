/*
Cuando se dice esta función recibe un callback 
No es más que una función que se va a ejecutar después de cierto punto del tiempo
*/

setTimeout(function(){  
    console.log('Hola Mundo');
}, 1000); 

// Ejemplo modo flecha
setTimeout(() => {  
    console.log('Hola 3 Seg');
}, 3000); 

// Otro ejemplo callback forma tradicional
const getUsuarioById = (id) => {
    const usuario = {
        id,
        nombre: 'Marcos'
    }

    setTimeout(() => {
        console.log(usuario)
    }, 4000);
}

getUsuarioById(10);

// Ejemplo callback forma nueva
// El parametro callback puede tener cualquier nombre
// Los callback no son mas que una funcion que se enviar como argumento
const getUsuarioByNit = (id, callback) => {
    const user = {
        id,
        nombre: 'Banco Mundo Mujer S.A.'
    }

    setTimeout(() => {
        callback(user)
    }, 6000);
}

// Tambien se podria destructurar
getUsuarioByNit(900768933, () => {
    console.log('Hola BMM');
});

getUsuarioByNit(900768933, (usuario) => {
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
});
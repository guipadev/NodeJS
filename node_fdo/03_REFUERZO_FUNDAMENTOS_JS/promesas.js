/*
Las promesas ayudan a trabajar con el callback hell
Pero si no se usa bien, resulta más confuso que el callback hell
*/

const empleados = [
    {
        id: 1,
        nombre: 'Ferney'
    },
    {
        id: 2,
        nombre: 'Amanda'
    },
    {
        id: 3,
        nombre: 'Liliana'
    }
];

const salarios = [
    {
        id: 1,
        salario: 3000
    },
    {
        id: 2,
        salario: 2500
    }
];


/*
const getEmpleado = (id) => {
    
    const promesa = new Promise((resolve, reject) => {

        const empleado = empleados.find((persona) => persona.id === id)?.nombre;

        if (empleado) {
            resolve(empleado);
        } else {
            reject(`No existe empleado con id ${id}`);
        }
    });

    return promesa;
}
*/

// Mejora codigo
const getEmpleado = (id) => {
    
    return new Promise((resolve, reject) => {

        const empleado = empleados.find((persona) => persona.id === id)?.nombre;

        (empleado)
            ? resolve(empleado)
            : reject(`No existe empleado con id ${id}`);
    });
}

const getSalario = (id) => {

    return new Promise((resolve, reject) => {

        const salario = salarios.find(pesos => pesos.id === id)?.salario;

        (salario)
            ? resolve(salario)
            : reject(`No existe salario para la persona con id ${id}`);
    })
}

/*
const id = 2;

getEmpleado(id)
    .then(empleado => console.log(empleado))
    .catch((err) => console.error(err));


getSalario(id)
    .then(salario => console.log(salario))
    .catch(err => console.log(err));
*/

// Si empleado existe, lanza el salario
// Estoy es otro callback hell de promesas
/*
getEmpleado(id)
    .then(empleado => {

        getSalario(id)
            .then(salario => {
                console.log('El empleado:', empleado, 'tiene una salario de: ', salario);
            })
            .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
*/

// La mejor forma es las promesas en cadena
const id = 10;
let nombre;

getEmpleado(id)
    .then(empleado => {
         nombre = empleado;
         return getSalario(id)
    })
    .then(salario => console.log('El empleado:', nombre, 'tiene un salario de:', salario))
    .catch(err => console.log(err));

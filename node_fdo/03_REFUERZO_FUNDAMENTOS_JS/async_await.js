/*
async await se utiliza en las promesas
await le dice ok JS quedate aqui hasta que tengas la rta de la promesa
cuando tenga rta de la promesa, se asigna a donde yo la necesite

el unico inconveniente de usar el await es que tiene que esar dentro de 
una funcion o metodo async (asincrono)
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

/**
 * async 
 */
const getInfoUsuario = async(id) => {

    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);

        return `El salario del empleado: ${empleado} es de ${salario}`;

    } catch (error) {
        // return error;
        // Si queremos frenar por el error y de inmediatamente se llama el reject de la funcio async
        throw error;
    }
}

const id = 3;

getInfoUsuario(id) 
    .then(msg => {
        console.log('TODO BIEN :)');
        console.log(msg); 
    })
    .catch(err => {
        console.log('TODO MAL :(');
        console.log(err);
    })
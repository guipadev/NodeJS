/*
Termino conocido como el infiernos de los callback
cuando un callback dentro de otro callback y asi sucesivamente
Y eso se hace imposible de idenficar en que parte esta que cosa
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
    const funcionario = empleados.find((persona) => persona.id === id);
    if (funcionario) {
        return funcionario;
    } else {
        return `Empleado con id ${id} no existe`;
    }
}

console.log(getEmpleado(5));
*/

// Uso callback
const getEmpleado = (id, callback) => {
    const empleado = empleados.find((persona) => persona.id === id)?.nombre;
    
    if (empleado) {
        callback(null, empleado);
    } else {
        callback(`Empleado con id ${id} no existe`);
    }
}

// Ejercicio salario
const getSalario = (id, ejecute) => {
    const salario = salarios.find((pesos) => pesos.id === id)?.salario; // ? si existe salario
    
    if (salario) {
        ejecute(null, salario);
    } else {
        ejecute(`No existe salario para el id ${id}`);
    }
}

// ID a buscar salario
const id = 2;

getEmpleado(id, (err, empleado) => {

    if(err){
        console.log('ERROR!');
        return console.log(err);
    }

    getSalario(id, (err, salario) => {

        if (err) {
            return console.log(err);
        }
        
        console.log('El empleado:', empleado, 'tiene un salario de:', salario);
    })
});



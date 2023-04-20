import { DataTypes } from "sequelize";
import db from '../db/connection';

// Modelo BD, se encarga saniamiento de los querys, realizando inserciones de forma segura, evita inyección sql o borbadear con info que no es
const Usuario = db.define('usuario', {
    nombre: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.BOOLEAN
    },
});


export default Usuario;
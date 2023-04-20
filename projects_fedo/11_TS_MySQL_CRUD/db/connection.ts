import { Sequelize } from "sequelize";

const db = new Sequelize('node', 'root', 'Nataly89', { 
    host: 'localhost',
    dialect: 'mysql',
    // loggin: false,  // Muestra sentencias de script sql ejecutadas

});

export default db;
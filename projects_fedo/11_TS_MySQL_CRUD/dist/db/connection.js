"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize('node', 'root', 'Nataly89', {
    host: 'localhost',
    dialect: 'mysql',
    // loggin: false,  // Muestra sentencias de script sql ejecutadas
});
exports.default = db;
//# sourceMappingURL=connection.js.map
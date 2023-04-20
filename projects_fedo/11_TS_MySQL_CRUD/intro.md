### Iniciar proyecto node
npm init -y

### Instalar TS global e instalarlo de forma local
sudo npm i -g typescript
npm i typescript --save-dev

### Validar version
tsc --version

### Crear el archivo de configurar archivo TS
tsc --init

### Habilitar las configuracion tsconfig.json
"outDir": "./dist",
"sourceMap": true, 
"moduleResolution": "node",

### Instalar depedencia de desarrollo para buenas practicas
npm i tslint --save-dev

### Inicializar archivo tslint
./node_modules/.bin/tslint --init

### Configurar tslint.json para que no arroje errores uso del console
"no-console": false

### Ejecutar el resultado, primero compilar a TS y luego ejecutar
tsc

node dist/app.js

### Instalar depdencias necesarias
npm i express cors dotenv

### Poder importar express ts
npm i --save-dev @types/express

### cors ts
npm i --save-dev @types/cors

### Instalar nodemon para ejecutar servidor y tome cambios auto
npm i nodemon --save-dev

### Iniciar con nodemon
nodemon dist/app.js

### Prueba contenido estatico
Navegador: http://localhost:8000/
"Acceso denegado"

## Base de datos MySQL

### Crear DB
CREATE DATABASE node;

### Crear tabla
CREATE TABLE node.usuarios (
  id INT NOT NULL,
  nombre VARCHAR(65) NOT NULL,
  email VARCHAR(65) NOT NULL,
  estado VARCHAR(45) NOT NULL DEFAULT '1',
  PRIMARY KEY (id));

### Id debe ser autoincremental
ALTER TABLE node.usuarios 
CHANGE COLUMN id id INT NOT NULL AUTO_INCREMENT ,
CHANGE COLUMN estado estado VARCHAR(45) NULL DEFAULT '1' ;

### El correo debe ser unico e irrepetible
alter table node.usuarios
  add constraint UQ_usuarios_email
  unique (email);

### Modificar nombre tabla
ALTER TABLE node.usuarios 
RENAME TO  node.Usuarios;

### Registrar usuarios
INSERT INTO node.usuarios (id, nombre, email, estado) VALUES ('1', 'Erika', 'e@gmail.com', '1');
INSERT INTO node.usuarios (id, nombre, email, estado) VALUES ('2', 'Oscar', 'o@gmail.com', '0');
INSERT INTO node.usuarios (id, nombre, email, estado) VALUES ('3', 'Bianca', 'b@gmail.com', '1');
INSERT INTO node.usuarios (id, nombre, email, estado) VALUES ('4', 'Ermes', 'er@gmail.com', '0');

### Adicionar campos para funcionamiento del ORM correctamente
ALTER TABLE node.usuarios 
ADD COLUMN createdAt timestamp NULL AFTER estado,
ADD COLUMN updatedAt timestamp NULL AFTER createdAt;


### Buscar e instalar Sequelize ORM
Parecido a Mongoose solo que trabaja con Postgress, MySQL, MariaDB, SQLite, SQL Server...

npm i --save sequelize

Buscamos la última versión y buscamos el comado para instalar driver de acuerdo a BD utilizada

npm i --save mysql2

## Consultas end point

### Actualizar
PUT - http://localhost:8000/api/usuarios/1
JSON
{"nombre":"Melissa"}

### Eliminar
DELETE - http://localhost:8000/api/usuarios/5
### Consulta usuario especifico
GET - http://localhost:8000/api/usuarios/3
### Consulta todos los usuarios
GET - http://localhost:8000/api/usuarios
### Crear un usuario
POST - http://localhost:8000/api/usuarios
JSON
{
  "nombre": "Edwar Flimen",
  "email": "e@gmail.com"
}
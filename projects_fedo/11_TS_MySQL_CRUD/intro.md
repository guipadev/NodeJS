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
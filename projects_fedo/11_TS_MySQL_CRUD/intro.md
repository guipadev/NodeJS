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

### Compilar todo nuevamente
tsc

### Ejecutar el resultado en la carpeta dist
node dist/app.js
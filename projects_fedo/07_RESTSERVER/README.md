# WebServer + RestServer

En primera instancia ejecutar ```npm instal``` para reconstruir los modulos node necesarios para el funcionamiento de la aplicación.

## Consultas endpoint
GET - http://localhost:8082/api/users?cc=12&nombre=jose&apikey=123456

POST - http://localhost:8082/api/users
{
    "id": 123,
    "nombre": "Juliana",
    "apellido": "Camargo",
    "edad": 30
}

PUT - http://localhost:8082/api/users/45

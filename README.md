# NestJS - Prueba Sermaluc

API REST para la creación y obtención de usuarios usando NestJS, TypeORM y PostgreSQL.

## Requisitos previos

- Docker (https://www.docker.com/ )
- Node.js (v16 o superior) (https://nodejs.org/ )
- npm (https://www.npmjs.com/ )

## Iniciar el Proyecto

### 1. Levantar la base de datos con Docker

El proyecto ya incluye un archivo .env, no es necesario una configuracion adicional.

Ejecuta el siguiente comando para levantar PostgreSQL:

docker-compose up -d

Esto iniciará una instancia de PostgreSQL con los datos iniciales definidos en ./docker/db/entrypoint.sql.

### 2. Instalar dependencias

npm install

### 3. Ejecutar la aplicación en modo desarrollo

npm run start:dev

La API estará disponible en: http://localhost:3000

## Endpoints Disponibles

### POST /users
Registra un nuevo usuario.

Body requerido:
```json
{
  "name": "Juan Rodriguez",
  "email": "juan@example.com",
  "password": "hunter2"
}
```

Respuesta exitosa (201):
```json
{
  "id": 1,
  "name": "Juan Rodriguez",
  "email": "juan@example.com",
  "createdAt": "2025-07-04T14:00:00Z"
}
```

Correo ya existente (409):
```json
{ "mensaje": "El correo ya está registrado" }
```

### GET /users
Devuelve todos los usuarios registrados.

Respuesta ejemplo:
```json
[
  {
    "id": 1,
    "name": "Epidemia",
    "email": "epidemia@cachureos.com",
    "createdAt": "2025-07-04T14:00:00Z"
  },
    {
    "id": 2,
    "name": "Señor Lapiz",
    "email": "slapiz@cachureos.com",
    "createdAt": "2025-07-04T14:00:00Z"
  }
]
```

## En caso de prescindir de docker y tener una base de datos

### 1. Ejecutar script sql de carga inicial a base de datos ubicado en
```txt
docker/db/entrypoint.sql
```
### 2. Modificar variables de entorno de acuerdo a lo necesitado

```env
PORT=3000
DB_TYPE=postgres
DB_HOST=url_del_host
DB_PORT=puerto_db
DB_USERNAME=usuario_db
DB_PASSWORD=contraseña_db
DB_DATABASE=nombre_db
DB_SYNCHRONIZE=false
DB_LOGGING=false
```

## Tecnologías usadas

- NestJS
- TypeORM
- PostgreSQL (con Docker)
- class-validator
- class-transformer


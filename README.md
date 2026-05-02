# Micro Aplicación — Reseñas de Restaurantes

## Descripción general
Esta es una microaplicación desarrollada en TypeScript con Express, MongoDB Atlas y Handlebars, cuyo objetivo es permitir que los usuarios registrados puedan consultar restaurantes, ver sus reseñas y crear una sola reseña por restaurante.

El proyecto integra un micro frontend básico con Handlebars para visualizar la información, y toda la lógica de negocio se ejecuta desde el backend.

## Tecnologías utilizadas

- TypeScript
- Node.js / Express
- MongoDB Atlas (Mongoose)
- Express-Handlebars
- Dotenv

## Arquitectura modular (modelo / controlador / rutas / middlewares)

    Estructura del proyecto
    src/
    ├── app/
    │   ├── usuario/
    │   │   ├── model.ts
    │   │   ├── controller.ts
    │   │   ├── routes.ts
    │   ├── restaurante/
    │   │   ├── model.ts
    │   │   ├── controller.ts
    │   │   ├── routes.ts
    │   ├── review/
    │   │   ├── model.ts
    │   │   ├── controller.ts
    │   │   ├── routes.ts
    │   ├── middlewares/
    │   │   └── validateReview.ts
    │   └── routes.ts
    ├── database/
    │   └── database.ts
    ├── views/
    │   ├── index.handlebars
    │   ├── reviews.handlebars
    │   ├── usuarios.handlebars
    │   ├── restaurante.handlebars
    │   ├── restaurantes.handlebars
    │   └── layouts/
    │       └── main.handlebars
    ├── index.ts
    └── .env

## Varibables de entorno

PORT
MONGO_URL=mongodb+srv://<db_username>:<db_password>@myapp.b3sl1up.mongodb.net/

## Instalar dependencias de package.json

    npm install

## Scripts

Compilar archivos typescript

    npm run scripts

Inicia servidor

    npm run scripts

## Endpoints principales

    GET	    /usuarios	                    Muestra la lista de usuarios registrados (vista Handlebars).
    GET	    /restaurantes	                Lista todos los restaurantes registrados.
    GET	    /restaurantes?nombre=<nombre>   Busca restaurantes por nombre y muestra sus reseñas.
    GET	    /reviews	                    Muestra todas las reseñas (vista Handlebars).
    GET	    /reviews/json	                Devuelve todas las reseñas en formato JSON.
    POST	/reviews	                    Crea una nueva reseña (solo si el usuario no ha reseñado ese restaurante antes).

## Pruebas con SonarQube

**Recursos necesarios**     
docker --version

Abrir docker

**Iniciar Servidor**     
```
docker run -d --name sonarqube -e SONAR_ES_BOOTSTRAP_CHECKS_DISABLE=true -p 9000:9000 sonarqube:latest
```

**Login to http://localhost:9000**   
```
login: admin
password: admin
```

**Crear local project**          
Asignarle Display name y Project key
Follows the instance’s default

**Seleccionar Analisis Method**        
With github actions

Generar token

sqp_1502176a23e4d58400308b9a1d59e3b33f677bc0

**Configurar Secret en Github**     
SONAR_TOKEN
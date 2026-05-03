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

**Configurar Secrets en Github**  
Repositorio → Settings → Secrets and variables → Actions → New repository secret

- `SONAR_TOKEN`: token de análisis generado en tu instancia (SonarCloud o SonarQube Server).
- `SONAR_HOST_URL` (opcional en GitHub si usas SonarQube Cloud): si no lo defines, el workflow usa `https://sonarcloud.io`. Si usas **SonarQube Server** en internet, define este secreto con la URL base pública. **No uses** `http://localhost:9000`: los runners no ven tu PC.

**Crear archivo YAML para Workflow**      
JS/TS & Web

**Archivo sonar-project.properties** (en la raíz del repo)  
Incluye `sonar.projectKey` y `sonar.sources`, etc. Para **SonarQube Cloud** debes añadir también `sonar.organization=<clave de tu organización>` (la ves en SonarCloud al crear o abrir el proyecto). Sin esa propiedad, el scanner asume SonarQube Server y acaba intentando `localhost:9000`. El token va en `SONAR_TOKEN`; la URL del host en CI va en el secreto opcional o en el valor por defecto del workflow.

**Crear .github/workflows/build.yml**    
Copiar codigo de Sonarqube y pegarlo en el yml

**Instalar SonarScanner**  
npm install -g sonar-scanner

sonar-scanner --version

Análisis en local contra Docker en `localhost:9000`:

```
$env:SONAR_HOST_URL="http://localhost:9000"
$env:SONAR_TOKEN="tu_token"
sonar-scanner
```

El scanner usa `SONAR_TOKEN` y `SONAR_HOST_URL` del entorno (equivalente a las opciones de la acción de GitHub).
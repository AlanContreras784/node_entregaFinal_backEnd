Template Server Layers
=====================

License: MIT | Node.js 18.x | Express 5.1 | Firebase Firestore

Plantilla de servidor con arquitectura por capas para Node.js, integrando Express, Firebase Firestore y JWT para autenticación.

Tabla de Contenidos
------------------
- Descripción
- Requisitos
- Instalación
- Variables de Entorno
- Uso
- Tecnologías
- Estructura del Proyecto
- API Endpoints
- Autenticación JWT
- Contribución
- Licencia
- Contacto

Descripción
-----------
Este proyecto sirve como plantilla de servidor por capas, con separación clara entre:

- Routes → Definición de endpoints
- Controllers → Lógica de manejo de requests/responses
- Services → Lógica de negocio y conexión con modelos
- Models → Acceso a la base de datos Firestore

Incluye autenticación con JWT y configuración segura de Firebase mediante variables de entorno.

Requisitos
----------
- Node.js v18 o superior
- npm o yarn
- Cuenta de Firebase para Firestore
- Postman, Insomnia o similar para probar endpoints

Instalación
-----------
1. Clonar el repositorio:
   git clone https://github.com/tuusuario/template-server-layers.git
   cd template-server-layers

2. Instalar dependencias:
   npm install

3. Crear archivo `.env` en la raíz del proyecto con las variables necesarias.

4. Ejecutar servidor en modo desarrollo:
   npm run dev

5. Ejecutar servidor en modo producción:
   npm start

Servidor escuchando en http://localhost:3000 (o el puerto definido en `.env`).

Variables de Entorno
-------------------
PORT=3000

JWT_SECRET_KEY=tu_secreto_jwt

FIREBASE_API_KEY=tu_firebase_api_key

FIREBASE_AUTH_DOMAIN=tu_firebase_auth_domain

FIREBASE_STORAGE_BUCKET=tu_firebase_storage_bucket

FIREBASE_APP_ID=tu_firebase_app_id

Uso
---
- Inicia el servidor y prueba los endpoints usando Postman, Insomnia o tu front-end.
- Ejemplo de respuesta de /api/products:

{
  "message": "Lista de productos",
  "payload": [
    {
      "id": "abc123",
      "name": "Producto 1",
      "price": 100
    }
  ]
}

Tecnologías
-----------
- Node.js
- Express 5
- Firebase Firestore
- JSON Web Token (JWT)
- CORS
- dotenv
- Nodemon (desarrollo)
- Faker.js (datos de prueba)

Estructura del Proyecto
----------------------
template-server-layers/
├── index.js
├── package.json
├── .env
├── .gitignore
├── assets/
│   └── demo.gif
├── src/
│   ├── config/
│   │   └── firebase.js
│   ├── routes/
│   │   ├── auth.route.js
│   │   └── products.route.js
│   ├── controllers/
│   │   └── products.controller.js
│   ├── services/
│   │   └── products.service.js
│   └── models/
│       └── products.model.js
└── README.md

API Endpoints
-------------
### Productos
GET /api/products → Lista todos los productos  
GET /api/products/:id → Obtiene un producto por ID  
POST /api/products → Crea un nuevo producto  
PUT /api/products/:id → Actualiza un producto existente  
DELETE /api/products/:id → Elimina un producto  

### Autenticación
POST /api/login → Genera un token JWT válido

Autenticación JWT
-----------------
- Middleware `authentication` protege rutas  
- Verifica header Authorization: Bearer <token>  
- Devuelve 401 o 403 si el token es inválido  

Contribución
------------
1. Haz un fork del proyecto  
2. Crea una rama: git checkout -b feature/nueva-funcionalidad  
3. Haz commit: git commit -m "Agrega nueva funcionalidad"  
4. Haz push: git push origin feature/nueva-funcionalidad  
5. Abre un Pull Request

Licencia
--------
MIT

Contacto
--------
Alan Contreras – alancontreras784@gmail.com  
GitHub: https://github.com/AlanContreras784

Badges y GIFs
--------------
- Badges dinámicos: shields.io  
- GIFs: assets/demo.gif mostrando funcionamiento del servidor o endpoints

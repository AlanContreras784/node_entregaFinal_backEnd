# 🚀 Back-end — API REST (Node.js + Express) — Plantilla por capas

Un back-end minimalista pero completo, pensado como plantilla para proyectos educativos o MVPs. Incluye rutas para productos, autenticación JWT y capa de servicios para separar responsabilidades.

💡 Resumen rápido
--------------------------------
- Lenguaje: Node.js (ES Modules)
- Framework: Express 5
- Autenticación: JWT (archivo `src/config/token.js`)
- Persistencia: soporta Firebase y ficheros JSON de ejemplo (`src/data`)

📄 Índice
--------------------------------
- 📌 Descripción
- 🚀 Requisitos
- ⚙️ Instalación
- 🔐 Variables de entorno
- ▶️ Scripts útiles
- 🧭 Rutas / Endpoints
- 🔒 Autenticación JWT
- 🧩 Estructura del proyecto
- 🛠️ Uso y ejemplos
- 🤝 Contribuir
- 📄 Licencia y contacto

📌 Descripción
--------------------------------
Este proyecto organiza el servidor en capas claras:
- `routes` → definición de endpoints
- `controllers` → parseo/validación de requests y respuestas
- `services` → lógica de negocio
- `models` → acceso a datos (Firestore o JSON local)

Es ideal como punto de partida para aprender separación de responsabilidades o para arrancar rápidamente un prototipo.

🚀 Requisitos
--------------------------------
- Node.js v18 o superior
- npm o yarn
- (Opcional) Cuenta de Firebase para conectar Firestore

Tecnologías
---------------------------------
- Node.js
- Express 5
- Firebase Firestore
- JSON Web Token (JWT)
- CORS
- dotenv
- Nodemon (desarrollo)
- Faker.js (datos de prueba)


⚙️ Instalación rápida
------------------------------------
Abre PowerShell y ejecuta:

```powershell
cd "c:/CERO-HUELLA-Talent Tech/BackEnd-EntregaFinal/back-end"
npm install
```

Ejecutar en desarrollo:

```powershell
npm run dev
```

Ejecutar en producción:

```powershell
npm start
```

🔐 Variables de entorno (ejemplo)
------------------------------------------------
Crea un archivo `.env` en la raíz de `back-end` con (no subir al repositorio):

```
PORT=3000
JWT_SECRET_KEY=tu_secreto_jwt
FIREBASE_ADMIN_EMAIL=admin@example.com
FIREBASE_ADMIN_PASSWORD=adminpass
# Otras variables de Firebase si se usan (API keys, etc.)
```

Nota: `src/config/token.js` usa `JWT_SECRET_KEY` para firmar tokens.

▶️ Scripts útiles (desde `back-end`)
-------------------------------------------------
- `npm run dev` — ejecuta `nodemon index.js` (desarrollo)
- `npm start` — ejecuta `node index.js` (producción)

🧭 Rutas / Endpoints (principales)
------------------------------------------------
Las rutas están en `src/routes` y los controladores en `src/controllers`.

- Autenticación
----------------
  - `POST /login` — recibe `{ email, password }` y devuelve `{ token }` si las credenciales coinciden. Las credenciales válidas por defecto son:
    - `test@gmail.com` / `123456`
    - o las definidas por `FIREBASE_ADMIN_EMAIL` y `FIREBASE_ADMIN_PASSWORD` en `.env`.


Estructura del Proyecto (recomendada)
------------------------------------
Aquí tienes una estructura de proyecto sugerida, lista para reemplazar la actual. Está pensada para mantener claridad entre capas y facilitar pruebas, scripts y documentación.

back-end/
├── index.js                     # Entrada del servidor
├── package.json
├── package-lock.json
├── README.md                    # Documentación (este archivo)
├── vercel.json
├── .env                         # Variables de entorno (no commitear)
├── .gitignore
├── scripts/
│   └── seed.js                  # Script para seed de datos (opcional)
├── src/
│   ├── config/
│   │   ├── db.js                # Conexión a base de datos / Firebase
│   │   ├── firebase.productos.js
│   │   └── token.js             # Generación/validación JWT
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── products.controller.js
│   │   └── user.controller.js
│   ├── data/
│   │   ├── products.json        # Datos de ejemplo
│   │   └── users.json
│   ├── middleware/
│   │   └── authentication.js
│   ├── models/
│   │   ├── products.model.js
│   │   └── user.model.js
│   ├── routes/
│   │   ├── auth.route.js
│   │   ├── products.route.js
│   │   └── user.route.js
│   ├── services/
│   │   ├── products.service.js
│   │   └── user.service.js
│   └── utils/
│       ├── index.js
│       └── seedUser.js
└──README.md(este archivo)

Notas:
- Mantén `.env` fuera del repo; incluye `.env.example` con claves dummy.  


Uso
------
- Inicia el servidor y prueba los endpoints usando Postman, Insomnia o tu front-end.
- Ejemplo de respuesta de /api/products:

{
  "message": "Lista de productos",
  "payload": [
    {
      "name": "Producto 1",      
      "price": 100,
      "category": "biodegradable",
      "description": "producto reciclado"      
    }
  ]
}
-Nota: El ID del produco se genera automaticamente cuando se crea un producto:

- Productos
----------------
  - `GET /products` — lista todos los productos ✅
  - `GET /products/:id` — obtiene producto por `id` ✅
  - `POST /products/create` — crea producto (PROTEGIDO) ✅
  - `PUT /products/:id` — actualiza producto (PROTEGIDO) ✅
  - `DELETE /products/:id` — elimina producto (PROTEGIDO) ✅

> Observación: El prefijo global (por ejemplo `/api`) puede definirse en `index.js` — revisa ese archivo si esperas rutas con `/api`.

🔒 Autenticación y middleware
----------------------------
El middleware `authentication` (en `src/middleware/authentication.js`) protege las rutas de modificación. Debes enviar el header:

```
Authorization: Bearer <TOKEN>
```

El token se obtiene con `POST /login` y es creado por `src/config/token.js` usando `JWT_SECRET_KEY`.

🛠️ Ejemplos prácticos (curl / PowerShell)
------------------------------------------------------
1) Obtener token (login):

```powershell
curl -X POST http://localhost:3000/login -H "Content-Type: application/json" -d '{"email":"test@gmail.com","password":"123456"}'
```

Respuesta:

```json
{ "token": "eyJhbGciOi..." }
```

2) Crear producto (ejemplo con token):

```powershell
curl -X POST http://localhost:3000/products/create -H "Content-Type: application/json" -H "Authorization: Bearer <TOKEN>" -d '{"name":"Zapatos","price":59.99}'
```

3) Listar productos:

```powershell
curl http://localhost:3000/products
```

🧩 Archivos y flujo interno
-----------------------------------------
- `index.js` — punto de entrada del servidor (configura express, middlewares y routes).
- `src/routes/*.route.js` — define endpoints y enlaza con los controladores.
- `src/controllers/*.controller.js` — maneja las requests/responses.
- `src/services/*.service.js` — lógica de negocio y llamadas a modelos.
- `src/models/*.model.js` — acceso a datos (ej.: Firebase o funciones que manipulan JSON local en `src/data`).
- `src/config/token.js` — generación de JWT.
- `src/middleware/authentication.js` — valida token en peticiones protegidas.
- `src/data/` — ficheros JSON de ejemplo: `products.json`, `users.json`.
- `src/utils/seedUser.js` — utilidades para sembrar datos de prueba.

💾 Notas sobre persistencia
------------------------------------------
El proyecto soporta dos modos principales:
- Uso de Firebase (comentar/ajustar en `src/models/*` según tu configuración)
- Uso de datos locales (los archivos en `src/data`) para pruebas rápidas sin Firebase.

🔧 Buenas prácticas y recomendaciones
---------------------------------------------------
- Nunca dejes `JWT_SECRET_KEY` en el repositorio; usa `.env` y variables de entorno en producción.
- Añade validaciones (p. ej. con `Joi` o `express-validator`) en los controladores antes de persistir datos.
- Considera añadir tests unitarios y de integración cuando escales la API.

✨ Guía  para usar en Postman
---------------------------------------------------
Bienvenido a la documentación oficial de tu API. Acá vas a encontrar los pasos para autenticarte, probar cada endpoint y estructurar correctamente las solicitudes en Postman.

🧩 Estructura real de un producto
----------------------------------
{
  "name": "Producto 1",
  "price": 100,
  "category": "biodegradable",
  "description": "producto reciclado"
}

🔐 Autenticación (JWT)
------------------------
Las rutas protegidas requieren enviar un token en el header:
Authorization: Bearer <TOKEN>

Este token se obtiene mediante:
POST {{base_url}}/api/login

🚀 Endpoints de la API
------------------------------
🔑 1) Login — Obtener Token
      ------------------------------
  POST {{base_url}}/api/login

  🔸 Body (JSON)
  {
    "email": "test@gmail.com",
    "password": "123456"
  }

  🔸 Respuesta esperada:
  { "token": "eyJhbGciOi..." }

🛍️ Productos
--------------
📄 2) Listar todos los productos (No requiere autenticación)
      ------------------------------------------------------------
  GET {{base_url}}/api/products

🎯 3) Obtener un producto por ID (No requiere autenticación)
      ------------------------------------------------------------
  GET {{base_url}}/api/products/:id 

➕ 4) Crear un producto (PROTEGIDO requiere autenticación)
      ------------------------------------------------------------
✔️ Ruta correcta según tu backend:
  POST {{base_url}}/api/products/create

  🔸 Headers en Postman
  Authorization: Bearer <TOKEN>
  Content-Type: application/json

  🔸 Body (JSON)
  {
    "name": "Producto 1",
    "price": 100,
    "category": "biodegradable",
    "description": "producto reciclado"
  }

✏️ 5) Actualizar un producto (PROTEGIDO requiere autenticación)
      ------------------------------------------------------------
  PUT {{base_url}}/api/products/:id

  🔸 Headers
  Authorization: Bearer <TOKEN>
  Content-Type: application/json

  🔸 Body (ejemplo)
  {
    "name": "Producto actualizado",
    "price": 150,
    "category": "biodegradable",
    "description": "detalle actualizado"
  }

🗑️ 6) Eliminar un producto (PROTEGIDO requiere autenticación)
      ------------------------------------------------------------
  DELETE {{base_url}}/api/products/:id

  🔸 Headers
  Authorization: Bearer <TOKEN>

🧪 Guía rápida para Postman
------------------------------------------
🔵 Paso 1 — Hacer login

Ejecutá POST {{base_url}}/api/login
Copiá el token del campo "token".

🔵 Paso 2 — Agregar token en Postman

En cada request protegida:
Ir a Headers
Agregar:
Authorization: Bearer <TOKEN>

🔵 Paso 3 — Probar endpoints

Crear → POST /api/products/create
Listar → GET /api/products
Ver uno → GET /api/products/:id
Actualizar → PUT /api/products/:id
Eliminar → DELETE /api/products/:id

🤝 Contribuir
----------------------------
1. Crea una rama: `git checkout -b feature/nombre-feature`
2. Implementa cambios y añade tests si aplica.
3. `git commit -m "feat: descripción corta"` y `git push`.
4. Abre un Pull Request describiendo los cambios.

📄 Licencia
--------------------------
MIT — revisa el archivo `LICENSE` del repositorio.

✉️ Contacto
---------------------------
- Autor: Alan Contreras  
- Email: `alancontreras784@gmail.com`  
- GitHub: https://github.com/AlanContreras784


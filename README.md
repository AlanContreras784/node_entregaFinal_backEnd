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
- 🔒 Autenticación
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
Crea un archivo `.env` en la raíz de `back-end` con:

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


// import jwt from 'jsonwebtoken';
// import 'dotenv/config';

//   const secret_key =  process.env.JWT_SECRET_KEY  // ||"ecvdgdfgfh12345" 
//   // Middleware para verificar el token JWT
//   export const authentication = (req, res, next) => {
//     const token = req.headers['authorization'].split(" ")[1];
//     if (!token) return res.sendStatus(401);
//     jwt.verify(token, secret_key, (err) => {
//         if (err) return res.sendStatus(403);
//         next();
//     });
//   }

import jwt from 'jsonwebtoken';
import 'dotenv/config';

const secret_key = process.env.JWT_SECRET_KEY;

// Middleware moderno para verificar el token JWT
export const authentication = (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];

    // No llega el header Authorization
    if (!authHeader) {
      return res.status(401).json({
        ok: false,
        message: "No se proporcionó el token."
      });
    }

    // Extraer token: "Bearer <token>"
    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        ok: false,
        message: "Token no válido."
      });
    }

    // Verificar el token
    const decoded = jwt.verify(token, secret_key);

    // Guardamos la info del user (uid, email, etc.)
    req.user = decoded;

    next();

  } catch (error) {

    // Token expirado
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        ok: false,
        message: "Tu sesión ha expirado. Volvé a iniciar sesión."
      });
    }

    // Cualquier otro error de token
    return res.status(403).json({
      ok: false,
      message: "Token inválido."
    });
  }
};

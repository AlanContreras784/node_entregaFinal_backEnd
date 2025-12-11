import jwt from 'jsonwebtoken';
import 'dotenv/config';

const secret_key = process.env.JWT_SECRET_KEY //|| "ecvdgdfgfh12345";
//console.log(secret_key)

export const generateToken = (userData) => {
  const user = {id: userData.id, email: userData.email};
  const expiration = { expiresIn: '5h' };
  return jwt.sign(user, secret_key, expiration);
}

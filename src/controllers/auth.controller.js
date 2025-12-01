import { generateToken } from "../config/token.js";
import 'dotenv/config';
export const login = async (req, res) => {
    console.log(req.body)
    const { email, password } = req.body;
    if( (email === "test@gmail.com" && password === "123456") || (email === process.env.FIREBASE_ADMIN_EMAIL && password === process.env.FIREBASE_ADMIN_PASSWORD) ) {
        const user = {email: email, id: "123"}
        const token = await generateToken(user);
        res.json({ token });
    } else {
        res.sendStatus(401);
    }
}
import { generateToken } from "../config/token.js";

export const login = async (req, res) => {
    console.log(req.body)
    const { email, password } = req.body;
    if( (email === "test@gmail.com" && password === "123456") || (email === "admin@gmail.com" && password === "test12") ) {
        const user = {email: email, id: "123"}
        const token = await generateToken(user);
        res.json({ token });
    } else {
        res.sendStatus(401);
    }
}
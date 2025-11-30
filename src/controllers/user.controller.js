// // CONTROLLERS

// import userService from '../services/user.service.js'

// const getUsers = async (req, res) => {
//   try {
//     const users = await userService.getAll();
//     if (users.length === 0) return res.status(200).json({ message: "No hay datos disponibles" });
//     res.status(200).json({message: "Lista de usuarios", payload: users});
//   } catch (error) {
//     res.status(500).json({ message: "Error Interno del Servidor", error: error.message });
//   }
// };

// const findById = async (req, res) =>{
//   try {
//     const user = await userService.findById(req.params.id);
//     if (!user) return res.status(404).json({ message: "Usuario no encontrado" });
//     res.status(200).json({ message: "Usuario encontrado", payload: user });
//   } catch (error) {
//     res.status(500).json({message: "Error Interno del Servidor", error: error.message});
//   }
// }

// const createUser = async (req, res) => {
//   const { name, email } = req.body;
//   try {
//     if (!name || !email) {
//       return res.status(400).json({ message: "Faltan datos obligatorios" });
//     }
//     const newUser = await userService.create({ name, email });
//     res.status(201).json({ message: "Usuario creado con éxito", payload: newUser });
//     console.log("Usuario creado");
//   } catch (error) {
//     res.status(500).json({ message: "Error Interno del Servidor", error: error.message });
//   }
// };

// export default { getUsers, findById, createUser };

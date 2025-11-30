// // SERVICES
// import User from '../models/user.model.js'
// import db from '../config/db.js';

// const getAll = async () => {
//   return await db.getAllUsers();
// };


// const findById = async (id) => {
//   const users = await db.getAllUsers();
//   return  users.find((user) => user.id === id);
// };

// const create = async (user) => {
//   const users = await db.getAllUsers();
//   let id= `user${users.length + 1}`;
//   const newUser = { 
//     id, 
//     name: user.name,
//     email: user.email,
//   };
//   users.push(newUser);
//   await db.saveUsers(users);
//   return newUser;
// }
// export default { getAll, findById, create };

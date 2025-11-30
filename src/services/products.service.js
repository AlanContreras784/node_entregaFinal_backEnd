// services
import {getAllProducts, saveProduct, deleteProduct, updateProduct} from '../models/products.model.js'
//import db from '../config/db.js';

const getAll = async () => {
  return await getAllProducts();
};

const findBYId =  async (id) => {
  const products = await getAllProducts();
  return products.find((product) => product.id === id);

}

const update = async (id, product) => {
  return await updateProduct(id, product);
}

const create = async (product) => {
   const newProduct = await saveProduct(product);
   return newProduct;
}

const deletePorId = async (id) => {
  return await deleteProduct(id);
}
export default { getAll, create, findBYId, update, deletePorId };
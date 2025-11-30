//router
import { Router } from "express";
import productController from '../controllers/products.controller.js'
import {authentication} from '../middleware/authentication.js'

const router = Router()

//se declara router + el metodo (la ruta + el controlador + la funcion) en algunas peticiones agregamos autenticacion
router.get('/products', productController.getProducts);
router.get('/products/:id', productController.findById);
router.post('/products/create',authentication, productController.createProduct);
router.delete('/products/:id', authentication, productController.deleteProduct);

//router.put('/products/:id', authentication, productController.updateProduct);




export default router

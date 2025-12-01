// controller
 import productsService from '../services/products.service.js'
 
const getProducts = async (req, res) => {
  try {
    const products = await productsService.getAll();
    if (products.length === 0) return res.status(200).json({ message: "No hay datos disponibles" });
    res.status(200).json({message: "Lista de productos", payload: products});
  } catch (error) {
    res.status(500).json({ message: "Error Interno del Servidor", error: error.message });
  }
};

const findById = async (req, res) =>{
  try {
    const product = await productsService.findBYId(req.params.id);
    if (!product) return res.status(404).json({ message: "Producto no encontrado" });
    res.status(200).json({ message: "Producto encontrado", payload: product });
  } catch (error) {
    res.status(500).json({message: "Error Interno del Servidor", error: error.message});
  }
}

const createProduct = async (req, res) => {
  try {
    const newProduct = req.body;
    console.log("🔥 RECIBIDO DESDE EL FRONT --->", JSON.stringify(req.body, null, 2));

    const product = await productsService.create(newProduct);
    console.log("🔥 CREADO EN LA BD --->", JSON.stringify(product, null, 2));
    
    res.status(201).json({ message: "Producto creado con éxito", payload: product });
    console.log("Producto creado con éxito:", product);
  } catch (error) {
    res.status(500).json({ message: "Error Interno del Servidor", error: error.message });
  }
};

const updateProduct = async (req, res) => {
    try{
        const id = req.params.id
        const product = req.body
        console.log("🔥 BODY RECIBIDO EN UPDATE:", req.body);
        console.log("🔥 ID:", req.params.id);
        if (id && product){
            const newProduct = await productsService.update(id, product)
            res.status(200).json({ message: "Producto actualizado", payload: newProduct });
        }else{
            res.status(400).json({ message: "Faltan datos obligatorios" });
        }
    }catch(error){
        res.status(500).json({ message: "Error Interno del Servidor", error: error.message });
    }
}



const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productsService.findBYId(id);
    if (!product) return res.status(404).json({ message: "Producto no encontrado porq fue eloiminado" });
    await productsService.deletePorId(id);
    res.status(200).json({ message: "Producto eliminado con éxito" , payload: product });
  } catch (error) {
    res.status(500).json({ message: "Error Interno del Servidor", error: error.message });
  }
}

export default { getProducts, createProduct, findById, updateProduct, deleteProduct };

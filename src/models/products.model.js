import {db} from '../config/firebase.productos.js';
import {collection,doc, addDoc, getDocs, updateDoc, deleteDoc, getDoc} from "firebase/firestore"

const productsCollection = collection(db, "productos");

export const getAllProducts = async () => {
    try {
        const productsList = await getDocs(productsCollection);
        const products=[];
        productsList.forEach(doc => 
            products.push({ id: doc.id, ...doc.data()})
        );
        return products;
    } catch (error) {
        throw new Error("Error",error.message);
    }
};

export async function saveProduct(product) {
    try {
        const docRef = await addDoc(collection(db, "productos"), product);

        console.log("Doc ID: ", docRef.id);

        // 🔥 devolver el producto creado
        return {id: docRef.id, ...product};

    } catch (error) {
        console.error("Error al guardar producto:", error);
        throw error;
    }
}
  


export const updateProduct = async (id, product) => {
  try {
    const ref = doc(db, "productos", id);

    // 🔥 1. Actualizar en Firestore
    await updateDoc(ref, product);

    // 🔥 2. Obtener datos actualizados
    const snap = await getDoc(ref);

    if (!snap.exists()) {
      throw new Error("Producto no encontrado después de actualizar");
    }

    // 🔥 3. Devolver el producto actualizado
    return {
      id: snap.id,
      ...snap.data()
    };

  } catch (error) {
    throw new Error("Error actualizando producto: " + error.message);
  }
};


export const deleteProduct = async (id) => {
    try {
        const productDelete = doc(db, "productos", id);
        await deleteDoc(productDelete);
    } catch (error) {
        console.error("Error borrando el producto:", error.message);
    }               
};

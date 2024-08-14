// routes/productRoutes.js
import express from 'express';
import {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
} from '../controller/controller-loja.js';

const router = express.Router();

router.post('/product', createProduct);

router.get('/product', getAllProducts);

router.get('/product/:id', getProductById);

router.put('/product/:id', updateProduct);

router.delete('/product/:id', deleteProduct);

export default router;

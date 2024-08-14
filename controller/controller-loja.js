import Product from '../models/model-loja.js';

export const createProduct = async (req, res) => {
    try {
        const product = req.body;
        const newProduct = await Product.create(product);
        return res.json(newProduct);
    } catch (error) {
        return res.status(500).json({ message: "Ocurreu um erro!", error });
    }
};

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        return res.json(products);
    } catch (error) {
        return res.status(500).json({ message: "Ocurreu um erro!", error });
    }
};

export const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id); 
        if (!product) {
            return res.status(404).json({ message: "Produto não encontrado!" });
        }
        return res.json(product);
    } catch (error) {
        return res.status(500).json({ message: "Ocurreu um erro!", error });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const putData = req.body;
        const putProduct = await Product.findByIdAndUpdate( id, putData, { new: true } );
        if (!putProduct) {
            return res.status(404).json({ message: "Produto não encontrado!" });
        }
        return res.json({ message: "Produto atualizado com sucesso!", product: putProduct });
    } catch (error) {
        return res.status(500).json({ message: "Ocurreu um erro!", error });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const delProduct = await Product.findByIdAndDelete(id);
        if (!delProduct) {
            return res.status(404).json({ message: "Produto não encontrado!" });
        }
        return res.json({ message: "Produto deleteado com sucesso!" });
    } catch (error) {
        return res.status(500).json({ message: "Ocurreu um erro!", error });
    }
};

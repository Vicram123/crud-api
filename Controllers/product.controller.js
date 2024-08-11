const Product = require("../Models/product.model.js");


const getAllProducts =  async (req, res) => {
    try {
        const products = await Product.find({}); // Fetch all products
        res.status(200).send(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).send({ error: error.message });
    }
};
const getProductById = async (req, res) => {
    try {
        const { id } = req.params; // Get the ID from the request parameters
        const product = await Product.findById(id); // Fetch the product by ID

        if (!product) {
            return res.status(404).send({ message: 'Product not found' });
        }

        res.status(200).send(product);
    } catch (error) {
        console.error('Error fetching product by ID:', error);
        res.status(500).send({ error: error.message });
    }
};

const updateProductById = async (req, res) => {
    try {
        const { id } = req.params; // Get the ID from the request parameters
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

        if (!updatedProduct) {
            return res.status(404).send({ message: 'Product not found' });
        }

        res.status(200).send({ message: 'Product updated successfully', product: updatedProduct });
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).send({ error: error.message });
    }
};

 
const createProduct = async (req, res) => {
    try {
        // Check if the required 'name' field is present in the request body
        if (!req.body.name) {
            return res.status(400).json({ error: "Product name is required" });
        }

        // Create a new product using the data in the request body
        const product = await Product.create(req.body);

        // Send a 201 status with the created product
        res.status(201).json(product);
    } catch (error) {
        console.error(error);

        // Handle Mongoose validation errors specifically
        if (error.name === 'ValidationError') {
            return res.status(400).json({ error: error.message });
        }

        // Handle other possible errors
        res.status(500).json({ error: "An error occurred while creating the product" });
    }
};



const deleteProductById = async (req, res) => {
    try {
        const { id } = req.params; // Get the ID from the request parameters
        const deletedProduct = await Product.findByIdAndDelete(id); // Delete the product by ID

        if (!deletedProduct) {
            return res.status(404).send({ message: 'Product not found' });
        }

        res.status(200).send({ message: 'Product deleted successfully', product: deletedProduct });
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).send({ error: error.message });
    }
};

module.exports= {
    getAllProducts, getProductById, createProduct, updateProductById, deleteProductById
}
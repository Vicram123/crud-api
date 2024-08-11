const express = require('express'); // Import express
const  {
    createProduct,
    getAllProducts,
    getProductById,
    updateProductById,
    deleteProductById
} = require('../Controllers/product.controller.js');

const router = express.Router(); // Create a router instance


// Define routes
router.post('/', createProduct);
router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.put('/:id', updateProductById);
router.delete('/:id', deleteProductById);



module.exports = router;
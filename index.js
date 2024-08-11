require('dotenv').config();

const express = require('express');
const app = express();

const Product = require('./Models/product.model.js');
const productRoute = require("./Routes/product.route.js")

const mongoose = require('mongoose');


const PORT = process.env.PORT || 3000; // Default to port 3000 if not specified  

// Connect to MongoDB  
const dbURI = process.env.MONGODB_URI;  
mongoose.connect(dbURI)  
    .then(() => {  
        console.log('Connected to MongoDB successfully.');  
    })  
    .catch(err => {  
        console.error('MongoDB connection error:', err);  
    });  


app.use(express.json());

// GET endpoint to retrieve all products from router
app.use('/api/products', productRoute);

// GET endpoint to retrieve a product by ID
//app.use('/:id', );

// PUT endpoint to update a product by ID
//app.put('/api/products/:id', );


//app.post('/api/products', );
// DELETE endpoint to remove a product by ID
//app.delete('/api/products/:id', );

// Default home route
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the CRUD API</h1><p>Use /api/products for product operations.</p>');
});

// Start the server  
app.listen(PORT, () => {  
    console.log(`Server is listening on port ${PORT}`);  
})
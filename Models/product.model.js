const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name required"]
  },
  quantity:{
    type: Number,
    required: true,
    default: 0
  },
  price:{
    type: Number,
    required: true,
    default: 0
  },
  image:{
    type: String,
    required: false // Change to true if you want to enforce image requirement
  },
}, {
    timestamps: true
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
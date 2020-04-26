const express = require('express');
const Product = require('../model/productSchema');

const router = express.Router();

router.post('/', async (req, res) => {
    console.log("data received")
    const product = req.body.product_data;
    console.log(product);

    try {
        const new_product = new Product(product);
        const saved_product = await new_product.save();
        res.status(201).json(saved_product);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

module.exports = router;
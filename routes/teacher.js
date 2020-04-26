const express = require('express');
const Teacher = require('../model/teacherSchema');

const router = express.Router();

router.post('/', async (req, res) => {

    const product = req.body;

    console.log(product);

    try {
        const new_product = new Teacher(product);
        const saved_product = await new_product.save();
        res.status(201).json(saved_product);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})


module.exports = router;
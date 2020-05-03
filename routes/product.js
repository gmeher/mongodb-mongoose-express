const { getPaginatedIndex, createPageMeta } = require("../lib/paginated.lib");

const express = require('express');
const Product = require('../model/productSchema');

const router = express.Router();

router.post('/', async(req, res) => {
    console.log("data received")
    console.log(req.body);

    // try {
    //     const new_product = new Product(product);
    //     const saved_product = await new_product.save();
    //     res.status(201).json(saved_product);
    // } catch (err) {
    //     res.status(500).json({ message: err.message })
    // }
})


router.get('/', async(req, res) => {

    const limit = parseInt(req.query.limit) || 12;
    const page = parseInt(req.query.page) || 1;

    let query = {};
    if (req.query.filter) {
        const filter = JSON.parse(req.query.filter)
        if (filter.search) {
            query = {...query, $text: { $search: searchQuery } }
        }
        if (filter.in_stock) {
            query = {...query, 'in_stock': true }
        }
        if (filter.brands) {
            query = {...query, brand: { $in: [...filter.brands] } }
        }
        if (filter.price_min && filter.price_max) {
            query = {...query,
                { $and: [{ rental_plans[3]: { $gte: filter.price_min } }, { rental_plans[3]: { $gte: filter.price_min } }] }
            }
        }
    }
    ///////trying to add all filters ........check at motning feeling sleepy
    if (req.query.search)
        const searchQuery = req.query.search || ;
    const [startIndex] = getPaginatedIndex(page, limit);

    try {
        const total_items = await Product.find(query).countDocuments().exec();
        const products = await Product.find(query, { score: { $meta: "textScore" } }).sort({ score: { $meta: "textScore" } }).select('frontname brand').limit(limit).skip(startIndex);
        const page_meta = createPageMeta(total_items, page, limit);
        res.json({ result: products, meta: page_meta });
    } catch (err) {
        res.status(500).json({ message: err.message })
    }

})

module.exports = router;
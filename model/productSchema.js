const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const productSchema = new Schema({

    id: {
        type: Number,
        required: true,
        unique: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    short_description: {
        type: String
    },
    core_attribute: {
        type: String
    },
    image_urls: {
        mini: String,
        small: String,
        dashboard: String,
        medium: String,
        large: String,
        x_large: String,
        x2_large: String
    },
    frontname: {
        type: String,
        required: true,

    },
    isnew: {
        type: Boolean
    },
    sku: {
        type: String
    },
    brand: {
        type: String
    },
    category_name: String,
    sub_category_name: String,
    specifications: {
        type: Schema.Types.Mixed,
    },
    accessories: {
        type: [String]
    },
    market_price_int: Number,
    market_price_string: String,
    rental_plans: [Schema.Types.Mixed],
    core_attribute: String,
    variants: [Schema.Types.Mixed],
    category: {
        permalink: String,
        title: String
    },
    parent_category: {
        permalink: String,
        title: String
    }
})

const Product = mongoose.model('product', productSchema);

module.exports = Product;
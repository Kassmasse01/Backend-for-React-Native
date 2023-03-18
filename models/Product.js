const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true }
    // price: { type: Number, required: true },
    // long_description: { type: String, required: true },
    // short_description: { type: String, required: true },
    // category: { type: String, required: true },
})

exports.Product = mongoose.model('Product', productSchema);

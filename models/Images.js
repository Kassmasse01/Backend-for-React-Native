const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true }
})

exports.Images = mongoose.model('Images', imageSchema);

const express = require('express');
const { Product } = require('../models/Product');
const router = express.Router();

router.get(`/`, async (req,res) =>{
    const productList = await Product.find();

    if(!productList) {
        res.status(500).json({success: false})
    }

    res.send(productList);
})

router.post(`/`, (req,res) =>{
    const product = new Product({
        title : req.body.title,
        image : req.body.image
    })

    product.save().then((createdProduct=>{
        res.status(201).json(createdProduct)
    })).catch((err)=>{
        res.status(500).json({
            error: err,
            success: false
        })
    })
})

module.exports = router;
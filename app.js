const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');


//middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));

const productSchema = mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true }
    // price: { type: Number, required: true },
    // long_description: { type: String, required: true },
    // short_description: { type: String, required: true },
    // category: { type: String, required: true },
})

const Product = mongoose.model('Product', productSchema);

require('dotenv/config');

const api = process.env.API_URL;

//http://localhost:3000/api/v1/products
app.get(`${api}/products`, async (req,res) =>{
    const productList = await Product.find();

    if(!productList) {
        res.status(500).json({success: false})
    }

    res.send(productList);
})

app.post(`${api}/products`, (req,res) =>{
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

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log('Database connection is ready...');
})
.catch(()=>{
    console.log(err);
})

app.listen(3000, ()=>{
   
    console.log('server is running http://localhost:3000');
})
 
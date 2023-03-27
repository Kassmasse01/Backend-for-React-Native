const express = require('express');
const { Images } = require('../models/Images');
const router = express.Router();

router.get(`/`, async (req,res) =>{
    const imageList = await Images.find();

    if(!imageList) {
        res.status(500).json({success: false})
    }

    res.send(imageList);
})

router.post(`/`, (req,res) =>{
    const image = new Images({
        title : req.body.title,
        image : req.body.image
    })

    image.save().then((createdImage=>{
        res.status(201).json(createdImage)
    })).catch((err)=>{
        res.status(500).json({
            error: err,
            success: false
        })
    })
})

module.exports = router;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv/config');

app.use(cors());
app.options('*', cors());

const api = process.env.API_URL;
const prouductsRouter = require('./routers/products');
const imagesRouter = require('./routers/images');
const PORT = process.env.PORT || 3000;

//middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));

//Routers
app.use(`${api}/products`, prouductsRouter);
app.use(`${api}/images`, imagesRouter);

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log('Database connection is ready...');
})
.catch((error)=>{
    console.log(error);
})

app.listen(PORT, ()=>{
   
    console.log(`server started on port ${PORT}`);
})
 
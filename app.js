const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv/config');

app.use(cors());
app.options('*', cors())

const api = process.env.API_URL;
const prouductsRouter = require('./routers/products');

//middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));

//Routers
app.use(`${api}/products`, prouductsRouter);

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
 
const express = require('express');
const app = express();

app.get('/', (req,res) =>{
<<<<<<< HEAD
    res.send('hello API!');
=======
    res.send('hello API!')
>>>>>>> 4c3ecbf (video-15-creating-the-backend-server-with-express)
})

app.listen(3000, ()=>{
    console.log('server is running http://localhost:3000');
})
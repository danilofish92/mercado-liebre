const express = require('express');
const app = express ();
const path = require('path')

app.use(express.static('public'));

app.get('/register',(req, res) =>{
    res.sendFile(path.join(__dirname, './views/register.html'))
})

app.get('/',(req, res) =>{
    res.sendFile(path.join(__dirname, './views/home.html'))
})

app.listen(3000,()=>{
    console.log('servidor corriendo en el puerto 3000');
})

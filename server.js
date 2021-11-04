const express = require ('express')
const app = express()

//
app.get('/', (req, res) => {
    res.send('Hola Mundo')
})

//
app.get('/about', (req, res) => { 
    res.send('Devuelve esto')
})

//
app.get('/producto', (req, res) => { 
    res.send('Listado de Productos: <br><br/><br>Producto 1<br/><br>Producto 2<br/>')
})

//
app.get('/producto/:id', (req, res) => { 
    res.send('El ID de este producto es ' + req.params.id)
})

//
app.listen(3000, () =>{
    console.log('Servidor Online');
})
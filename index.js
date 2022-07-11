import express from 'express'

const app = express()

// Definir puerto
const port = process.env.PORT || 4000

app.get('/', (req, res) => {
    res.send('Inicio')
})

// Arrancar el servidor
app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})
import express from 'express'
import router from './routes/routes.js'

const app = express()

// Definir puerto
const port = process.env.PORT || 4000

// Agregar router
app.use('/', router)

// Habilitar PUG
app.set('view engine', 'pug')

// Definir la carpeta pública
app.use(express.static('public'))

// Arrancar el servidor
app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})
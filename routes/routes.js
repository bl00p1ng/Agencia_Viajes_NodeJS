import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.render('inicio')
})
router.get('/nosotros', (req, res) => {
    const travels = 'Viaje a Japón'

    res.render('nosotros', {
        travels
    })
})
router.get('/contacto', (req, res) => {
    res.send('Contacto')
})

export default router
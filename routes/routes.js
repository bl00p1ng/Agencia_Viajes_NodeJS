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

export default router
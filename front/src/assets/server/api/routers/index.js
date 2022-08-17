const express = require('express')
const router = express.Router()

//TODO: Ruta de orders

router.use('/orders', require('./orders'));
router.use('/users', require('./users'));


module.exports = router
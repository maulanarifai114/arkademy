const express = require('express')
const router = express.Router()
const serverControl = require('../controllers/app')

router.get('/', serverControl.getServer)
module.exports = router
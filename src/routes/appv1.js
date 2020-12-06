const express = require('express')
const router = express.Router()
const serverControl = require('../controllers/appv1')

router.get('/', serverControl.getServer)
module.exports = router
const express = require('express')
const router = express.Router()
const transControl = require('../controllers/transaction')

router
    .get('/', transControl.getAllTrans)
// .post('/', transControl.insertUser)
// .put('/:id', transControl.updateUser)
// .delete('/:id', transControl.deleteUser)
module.exports = router
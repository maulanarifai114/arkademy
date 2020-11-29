const express = require('express')
const router = express.Router()
const transControl = require('../controllers/transaction')

router
  .get('/', transControl.getAllTrans)
  .post('/', transControl.insertTrans)
  .delete('/:id', transControl.deleteTrans)
  .put('/:id', transControl.transferAmount)
module.exports = router

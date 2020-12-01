const express = require('express')
const router = express.Router()
const routerUsers = require('../routes/v2/users')
const routerTransaction = require('../routes/v2/transaction')

router
  .use('/users', routerUsers)
  .use('/transaction', routerTransaction)
module.exports = router

// appv2.use('/users', routerUsers)
// appv2.use('/transaction', routerTransaction)
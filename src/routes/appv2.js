const express = require('express')
const router = express.Router()
const routerUsers = require('./users')
const routerTransaction = require('./transaction')

router
  .use('/users', routerUsers)
  .use('/transaction', routerTransaction)
module.exports = router

// appv2.use('/users', routerUsers)
// appv2.use('/transaction', routerTransaction)
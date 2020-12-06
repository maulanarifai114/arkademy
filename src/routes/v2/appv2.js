const express = require('express')
const router = express.Router()
const routerUsers = require('./users')
const routerTransaction = require('./transaction')
const routerServer = require('../../controllers/v2/appv2')

router
  .use('/users', routerUsers)
  .use('/transaction', routerTransaction)
  .use('/', routerServer.getServer)
module.exports = router

// appv2.use('/users', routerUsers)
// appv2.use('/transaction', routerTransaction)

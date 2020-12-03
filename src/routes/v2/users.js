const express = require('express')
const router = express.Router()
const usersControl = require('../../controllers/v2/users')
const usersLog = require('../../controllers/v2/auth')
const middleware = require('../../middleware/v2/auth')

router
  .post('/register', usersLog.signUpUser)
  .post('/login', usersLog.loginUser)
  .get('/', middleware.verifyAccess, usersControl.getAllUsers)
  .put('/:id', usersControl.updateUser)
  .delete('/:id', usersControl.deleteUser)
  .delete('/phone/:id', usersControl.deletePhone)
// .post('/', usersControl.insertUser)
module.exports = router
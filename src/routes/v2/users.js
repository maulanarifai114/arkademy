const express = require('express')
const router = express.Router()
const usersControl = require('../../controllers/v2/users')
const usersLog = require('../../controllers/v2/auth')

router
  .get('/', usersControl.getAllUsers)
  // .post('/', usersControl.insertUser)
  .post('/register', usersLog.signUpUser)
  .post('/login', usersLog.loginUser)
  .put('/:id', usersControl.updateUser)
  .delete('/:id', usersControl.deleteUser)
  .delete('/phone/:id', usersControl.deletePhone)
module.exports = router
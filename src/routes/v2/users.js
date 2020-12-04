const express = require('express')
const router = express.Router()
const usersControl = require('../../controllers/v2/users')
const usersLog = require('../../controllers/v2/auth')
const {
  verifyAccess
} = require('../../middleware/v2/auth')
const {
  uploadMulter
} = require('../../middleware/v2/upload')

router
  .post('/register', uploadMulter.single('image'), usersLog.signUpUser)
  // .post('/register', usersLog.signUpUser)
  .post('/login', usersLog.loginUser)

  // Verify First For Get, Post, Put, Delete
  .get('/', verifyAccess, usersControl.getAllUsers)
  .post('/', uploadMulter.single('image'), usersControl.insertUser)
  .put('/', verifyAccess, uploadMulter.single('image'), usersControl.updateUser)
  .delete('/:id', verifyAccess, usersControl.deleteUser)
  .delete('/phone/:id', verifyAccess, usersControl.deletePhone)
module.exports = router
const express = require('express')
const router = express.Router()
const usersControl = require('../../controllers/v2/users')
const usersLog = require('../../controllers/v2/auth')
const {
  verifyAccess,
  verifyRole
} = require('../../middleware/v2/auth')
const {
  uploadMulter
} = require('../../middleware/v2/upload')
const {
  validation
} = require('../../middleware/v2/validation')

router
  .post('/register', uploadMulter.single('image'), usersLog.signUpUser)
  .post('/login', usersLog.loginUser)

  // Verify First For Get, Post, Put, Delete
  .get('/', verifyAccess, usersControl.getAllUsers)
  .post('/', uploadMulter.single('image'), validation, usersControl.insertImage)
  .put('/', verifyAccess, uploadMulter.single('image'), validation, usersControl.updateUser)
  .delete('/', verifyRole, usersControl.deleteUser)
  .delete('/phone/:id', verifyAccess, usersControl.deletePhone)
module.exports = router
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
  .post('/register', usersLog.signUpUser)
  .post('/login', usersLog.loginUser)
  .get('/', verifyAccess, usersControl.getAllUsers)
  .post('/', uploadMulter.single('avatar'), usersControl.insertUser)
  .put('/:id', verifyAccess, usersControl.updateUser)
  .delete('/:id', verifyAccess, usersControl.deleteUser)
  .delete('/phone/:id', verifyAccess, usersControl.deletePhone)
// .post('/', usersControl.insertUser)
module.exports = router
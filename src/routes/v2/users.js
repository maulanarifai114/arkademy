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
const redis = require('../../middleware/v2/redis')

router
  .post('/register', usersLog.signUpUser)
  .post('/login', usersLog.loginUser)
  .post('/confirm/:token', usersLog.sendEmailer)

  // Verify First For Get, Post, Put, Delete
  .get('/', verifyAccess, redis.cacheAllUsers, usersControl.getAllUsers)
  .post('/', uploadMulter.single('image'), validation, usersControl.insertImage)
  .put('/', verifyAccess, uploadMulter.single('image'), validation, usersControl.updateUser)
  .delete('/', verifyRole, usersControl.deleteUser)
  .delete('/phone/:id', verifyAccess, usersControl.deletePhone)
module.exports = router
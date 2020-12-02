const express = require('express')
const router = express.Router()
const usersControl = require('../../controllers/v2/users')
const usersCheck = require('../../controllers/v2/auth')

router
  .get('/', usersControl.getAllUsers)
  // .post('/', usersControl.insertUser)
  .post('/register', usersCheck.signUpUser)
  .post('/login', usersCheck.loginUser)
  .put('/:id', usersControl.updateUser)
  .delete('/:id', usersControl.deleteUser)
  .delete('/phone/:id', usersControl.deletePhone)
module.exports = router

// .get('/', productController.getProducts)
// .get('/:id', productController.detailProducts)
// .post('/', productController.insertProduct)
// .patch('/:id', productController.updateProduct)
// .delete('/:iduser', productController.deleteProduct)
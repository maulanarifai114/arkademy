const express = require('express')
const router = express.Router()
const usersControl = require('../controllers/users')

router
  .get('/', usersControl.getAllUsers)
  .post('/', usersControl.insertUser)
  .put('/:id', usersControl.updateUser)
  .delete('/:id', usersControl.deleteUser)
module.exports = router

// .get('/', productController.getProducts)
// .get('/:id', productController.detailProducts)
// .post('/', productController.insertProduct)
// .patch('/:id', productController.updateProduct)
// .delete('/:iduser', productController.deleteProduct)
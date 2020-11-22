const modelUser = require('../models/users')
const helper = require('../helpers/help')
const users = {

  // getAllUsers, getUserByName, getUserByPhone
  getAllUsers: (req, res) => {
    const name = req.query.name
    const phone = req.query.phone
    const page = req.query.page
    const limit = req.query.limit
    const offset = (page - 1) * limit

    modelUser.getAllUsers(name, phone, offset, limit)
      .then(result => {
        const resultAllUsers = result
        if (resultAllUsers.length == 0 && name) {
          helper.reject(res, resultAllUsers, 404, {
            message: 'name not found'
          })
        } else if (name == '') {
          helper.reject(res, [], 404, {
            message: 'type name first'
          })
        } else if (resultAllUsers.length == 0 && phone) {
          helper.reject(res, resultAllUsers, 404, {
            message: 'phone not found'
          })
        } else if (name == '') {
          helper.reject(res, [], 404, {
            message: 'type phone first'
          })
        } else if (resultAllUsers.length == 0) {
          helper.reject(res, resultAllUsers, 404, {
            message: 'users not found'
          })
        }
        helper.response(res, resultAllUsers, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  // Masukan User Baru
  insertUser: (req, res) => {
    const {
      name,
      phone,
      username,
      email,
      password,
      balance
    } = req.body

    const data = {
      name,
      phone,
      username,
      email,
      password,
      balance
    }

    if (data.name == '' || data.phone == '' || data.username == '' || data.email == '' || data.password == '' || data.balance == '') {
      return helper.reject(res, data, 400, {
        message: `can't add data, some or all data is empty`
      })
    }

    modelUser.insertUser(data)
      .then(result => {
        const resultInsertUser = result
        helper.response(res, {
          message: 'success add data'
        }, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  // Update User
  updateUser: (req, res) => {
    const id = req.params.id
    const {
      name,
      phone,
      username,
      email,
      password,
      balance
    } = req.body

    const data = {}

    if (name) {
      data.name = name
    }
    if (phone) {
      data.phone = phone
    }
    if (username) {
      data.username = username
    }
    if (email) {
      data.email = email
    }
    if (password) {
      data.password = password
    }
    if (balance) {
      data.balance = balance
    }

    modelUser.updateUser(id, data)
      .then((result) => {
        const resultUpdateUser = result
        if (resultUpdateUser.affectedRows == 0) {
          helper.reject(res, resultUpdateUser, 404, {
            message: 'id not found, can\'t update data'
          })
        }
        helper.response(res, {
          message: 'data has been updated'
        }, 200, null)
      })
      .catch((error) => {
        console.log(error)
      })
  },

  // Delete User
  deleteUser: (req, res) => {
    const id = req.params.id
    modelUser.deleteUser(id)
      .then(result => {
        const resultDeleteUser = result
        if (resultDeleteUser.affectedRows == 0) {
          helper.reject(res, resultDeleteUser, 404, {
            message: 'id not found, can\'t be deleted'
          })
        }
        helper.response(res, {
          message: 'data has been deleted'
        }, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  }

}
module.exports = users

// if (name != "") {
// 	data.name
// }
// if (phone != "") {
// 	data.phone
// }
// if (username != "") {
// 	data.username
// }
// if (email != "") {
// 	data.email
// }
// if (password != "") {
// 	data.password
// }
// if (balance != 0) {
// 	data.balance
// }

// const modelUser = require('../models/users')
// module.exports = users
// const users = {

// }
// const helper = require('../helpers/helpers')
// const products = {
//     getProducts: (req, res) => {
//         modelUser.getProduct()
//             .then(result => {
//                 const resultProdcut = result
//                 // res.send(resultProdcut)
//                 helper.response(res, resultProdcut, 200, null)
//                 // res.json(resultProdcut)
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//     },
//     detailProducts: (req, res) => {
//         const id = req.params.id
//         modelUser.getProductById(id)
//             .then(result => {
//                 const resultProdcut = result
//                 // res.send(resultProdcut)
//                 helper.response(res, resultProdcut, 200, null)
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//     },
//     insertProduct: (req, res) => {
//         const {
//             name,
//             description,
//             price
//         } = req.body
//         const data = {
//             name,
//             description,
//             price,
//             createdAt: new Date(),
//             updatedAt: new Date()
//         }
//         modelUser.insertProduct(data)
//             .then(result => {
//                 const resultProdcut = result
//                 // res.send(resultProdcut)
//                 helper.response(res, resultProdcut, 201, null)
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//     },
//     updateProduct: (req, res) => {
//         const id = req.params.id
//         const name = req.body.name || null
//         const description = req.body.description || null
//         const price = req.body.price || 0
//         const data = {
//             name,
//             description,
//             price,
//         }
//         modelUser.updateProduct(id, data)
//             .then((result) => {
//                 const dataResult = result
//                 dataResult.hello = "helo world"
//                 helper.response(res, dataResult, 200, null)
//             })
//             .catch((error) => {
//                 console.log(error)
//             })
//     },
//     updateProduct2: (req, res) => {
//         const id = req.params.id

//         const name = req.body.name
//         const description = req.body.description
//         const price = req.body.price
//         const data = {}
//         if (name) {
//             data.name = name
//         }
//         if (description) {
//             data.description = description
//         }
//         if (price) {
//             data.price = price
//         }

//         modelUser.updateProduct(id, data)
//             .then((result) => {
//                 const dataResult = result
//                 helper.response(res, dataResult, 200, null)
//             })
//             .catch((error) => {
//                 console.log(error)
//             })
//     },
//     deleteProduct: (req, res) => {
//         const id = req.params.iduser
//         modelUser.deleteProduct(id)
//             .then(result => {
//                 const resultProdcut = result
//                 helper.response(res, resultProdcut, 200, null)
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//     }
// }
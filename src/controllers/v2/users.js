const modelUser = require('../../models/v2/users')
const helper = require('../../helpers/help')
const users = {

  // getAllUsers, getUserByName, getUserByPhone
  getAllUsers: (req, res) => {
    const id = req.query.id
    const name = req.query.name
    const phone = req.query.phone
    const page = req.query.page
    const limit = req.query.limit
    const offset = (page - 1) * limit
    modelUser.getAllUsers(name, phone, offset, limit, id)
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
        } else if (phone == '') {
          helper.reject(res, [], 404, {
            message: 'type phone number first'
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
    modelUser.insertUser(data)
      .then(result => {
        // const resultInsertUser = result
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
  },

  deletePhone: (req, res) => {
    const id = req.params.id
    modelUser.deletePhone(id)
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
  },
}
module.exports = users
// module.exports = users
const modelUser = require('../../models/v2/users')
const helper = require('../../helpers/help')
const bcrypt = require('bcryptjs')
const {
  v4: uuidv4
} = require('uuid');


const users = {
  signUpUser: (req, res) => {
    const id = uuidv4()
    const {
      name,
      phone,
      username,
      email,
      password,
      balance
    } = req.body

    modelUser.checkUser(email)
      .then((result) => {
        console.log('ini resultnya' + result)
        if (result.length > 0) return helper.reject(res, null, 401, {
          error: 'email sudah ada'
        })

        bcrypt.genSalt(10, function (err, salt) {
          bcrypt.hash(password, salt, function (err, hash) {
            const data = {
              id,
              name,
              phone,
              username,
              email,
              password: hash,
              balance
            }

            if (data.name == '' && data.phone == '' && data.username == '' && data.email == '' && data.password == '' && data.balance == '') {
              return helper.reject(res, data, 400, {
                message: 'can\'t add data, some or all data is empty'
              })
            }

            modelUser.insertUser(data)
              .then(result => {
                helper.response(res, {
                  message: 'success register'
                }, 200, null)
              })
              .catch((err) => {
                console.log(err)
              })
          });
        })
      })

  },

  loginUser: (req, res) => {

  }
}
module.exports = users
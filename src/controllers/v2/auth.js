const modelUser = require('../../models/v2/users')
const helper = require('../../helpers/help')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const {
  v4: uuidv4
} = require('uuid');

const users = {
  signUpUser: (req, res) => {
    const id = uuidv4()
    const {
      username,
      email,
      password,
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
              username,
              email,
              password: hash,
            }

            if (data.username == '' || data.email == '' || data.password == '') {
              return helper.reject(res, null, 401, {
                message: `can't add data, some or all data is empty`
              })
            }

            modelUser.insertUser(data)
              .then(result => {
                helper.response(res, {
                  message: 'success register'
                }, 201, null)
              })
              .catch((err) => {
                console.log(err)
              })
          });
        })
      })

  },

  loginUser: (req, res) => {
    const {
      email,
      password
    } = req.body

    modelUser.checkUser(email)
      .then((result) => {
        const user = result[0]

        // Compare Password
        bcrypt.compare(password, user.password, function (err, resCheck) {
          if (!resCheck) return helper.response(res, null, 401, {
            error: 'password wrong !!'
          })
          delete user.password

          // JSON Web Token
          jwt.sign({
            userID: user.id,
            email: user.email,
            roleID: user.roleid
          }, process.env.SECRET_KEY, {
            expiresIn: '24h'
          }, function (err, token) {
            user.token = token
            return helper.response(res, user, 200, null)
          });

        });
      })
  }
}
module.exports = users
const modelUser = require('../../models/v2/users')
const helper = require('../../helpers/help')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {
  sendEmail
} = require('../../helpers/email')
const {
  v4: uuidv4
} = require('uuid')

const users = {
  signUpUser: (req, res, next) => {
    const id = uuidv4()
    const activeToken = uuidv4()
    const {
      username,
      email,
      password
    } = req.body

    modelUser.checkUser(email)
      .then((result) => {
        console.log(result)
        if (result.length > 0) {
          return helper.reject(res, null, 401, {
            error: 'email already exist'
          })
        }

        bcrypt.genSalt(10, function (err, salt) {
          bcrypt.hash(password, salt, function (err, hash) {
            const data = {
              id,
              roleid: uuidv4(),
              username,
              email,
              password: hash,
              activeToken
            }

            if (data.username === '' || data.email === '' || data.password === '') {
              return helper.reject(res, null, 401, {
                message: 'can\'t add data, some or all data is empty'
              })
            }

            modelUser.insertUser(data)
              .then(result => {
                // const user = result[0]
                const email = req.body.email
                const id = data.id
                const activeToken = data.activeToken
                console.log(email)
                console.log(data.id)
                console.log(activeToken)
                // JSON Web Token
                const payload = {
                  userID: id,
                  isVerified: 'true',
                  tokenAct: activeToken
                }
                const secret = process.env.SECRET_KEY
                const option = {
                  expiresIn: '24h'
                }
                const getToken = function (err, token) {
                  data.token = token
                  console.log(data)
                  sendEmail(data.email, `${token}`)
                  console.log(err)
                  return helper.response(res, data, 200, null)
                }

                jwt.sign(payload, secret, option, getToken)

                helper.response(res, {
                  message: 'success register, check your email now'
                }, 201, null)
              })
            console.log(err)
          })
          console.log(err)
        })
      })
      .catch((err) => {
        console.log(err)
      })
  },

  loginUser: (req, res) => {
    // Take data from body
    const {
      email,
      password
    } = req.body

    // Error handling
    const data = {
      email,
      password
    }
    if (data.email === '' || data.password === '') {
      return helper.reject(res, null, 401, {
        message: 'can\'t add data, some or all data is empty'
      })
    }

    // Check user from model
    modelUser.checkUser(email)
      .then((result) => {
        const user = result[0]

        // Checking Verified
        if (user.isVerified === 'false') {
          return helper.response(res, null, 401, {
            message: 'You must verified your account first'
          })
        }

        // Compare Password
        bcrypt.compare(password, user.password, function (err, resCheck) {
          if (!resCheck) {
            return helper.response(res, null, 401, {
              error: 'password wrong !!'
            })
          }
          delete user.password
          delete user.pin

          // JSON Web Token
          const payload = {
            userID: user.id,
            email: user.email,
            roleID: user.roleid,
            phone: user.phone,
            name: user.name,
            balance: user.balance
          }
          const option = {
            expiresIn: '24h'
          }
          const secret = process.env.SECRET_KEY
          const admin = process.env.ROLE_ADMIN

          const getToken = function (err, token) {
            user.token = token
            if (user.roleid === admin) {
              user.message = 'Welcome admin'
            } else {
              console.log(err)
              return helper.response(res, user, 200, null)
            }
          }

          jwt.sign(payload, secret, option, getToken)
          console.log(err)
        })
      })
      .catch(err => {
        console.log(err)
      })
  },

  sendEmailer: (req, res) => {
    // Get Token from Params
    const token = req.params.token

    // JWT Verify
    jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
      if (err) {
        if (err.name === 'JsonWebTokenError') {
          return helper.response(res, null, 401, {
            message: 'invalid token'
          })
        } else if (err.name === 'TokenExpiredError') {
          return helper.response(res, null, 401, {
            message: 'token expired'
          })
        }
      }

      const data = {
        isVerified: decoded.isVerified
      }

      const loadIdUser = decoded.userID
      modelUser.updateUser(loadIdUser, data)
        .then((result) => {
          const resultUpdateUser = result
          if (resultUpdateUser.affectedRows === 0) {
            helper.reject(res, resultUpdateUser, 404, {
              message: 'id not found, can\'t update data'
            })
          }
          helper.response(res, {
            message: 'Account has been verified'
          }, 200, null)
        })
        .catch((error) => {
          console.log(error)
        })
    })
    // const email = req.body.email
    // const message = req.body.message
    // const {
    //   email,
    //   message
    // } = req.body
    // sendEmail(email, message)
    //   .then((result) => {
    //     console.log('ini res = ', result)
    //     return helper.response(res, {
    //       message: 'send email success'
    //     }, 200, null)
    //   })
    //   .catch((err) => {
    //     return helper.response(res, null, 500, {
    //       message: 'error send email'
    //     })
    //   })
  }
}
module.exports = users

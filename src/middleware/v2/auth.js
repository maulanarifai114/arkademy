const jwt = require('jsonwebtoken')
const helper = require('../../helpers/help')

exports.verifyAccess = (req, res, next) => {

  // Get Token from Header
  const authorization = req.headers.authorization
  if (!authorization) {
    return helper.response(res, null, 401, {
      message: 'Server need token'
    })
  }

  // authorization = 'Bearer 234klfjsdkfjrjisjfsdf'
  // ['Bearer', 'sdfsjadfku8jdskfsdf']
  let token = authorization.split(" ")
  token = token[1]

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
    console.log('isi decode', decoded.userID)
    req.userID = decoded.userID
    req.roleID = decoded.roleID
    next()
  })
}
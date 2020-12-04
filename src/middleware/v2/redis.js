const redis = require('redis')
const client = redis.createClient(6379)

const {
  response
} = require('../../helpers/help')

exports.cacheAllUsers = (req, res, next) => {
  client.get("getAllUsers", function (err, data) {
    if (data !== null) {
      const result = JSON.parse(data)
      return response(res, result, 200, null)
    } else {
      next()
    }
  });
}

exports.delCacheAllUsers = (req, res, nex) => {
  client.del("getAllUsers")
  next()
}

// exports.getDetailUsers = (req, res, next) => {
//   const id = req.params.id
//   client.get("product" + id, function (err, data) {

//     if (data !== null) {
//       const result = JSON.parse(data)
//       return response(res, result, 200, null)
//     } else {
//       next()
//     }
//   });
// }
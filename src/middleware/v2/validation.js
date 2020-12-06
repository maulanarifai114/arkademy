const fs = require('fs')
const helper = require('../../helpers/help')
const valid = (req, res, next) => {
  if (req.file === undefined) {
    return next()
  } else if (!(req.file.mimetype).includes('jpeg') && !(req.file.mimetype).includes('png') && !(req.file.mimetype).includes('jpg')) {
    fs.unlinkSync(`./upload/${req.file.filename}`)
    return helper.reject(res, null, 400, {
      error: 'File not supported'
    })
  }

  if (req.file.size > 1024 * 1024) {
    fs.unlinkSync(`./upload/${req.file.filename}`)
    return helper.reject(res, null, 400, {
      error: 'File is too big'
    })
  }

  next()
}

const validPost = (req, res, next) => {
  if (req.file === undefined) {
    return helper.reject(res, null, 400, {
      error: 'File is empty, must be filled'
    })
  } else if (!(req.file.mimetype).includes('jpeg') && !(req.file.mimetype).includes('png') && !(req.file.mimetype).includes('jpg')) {
    fs.unlinkSync(`./upload/${req.file.filename}`)
    return helper.reject(res, null, 400, {
      error: 'File not supported'
    })
  }

  if (req.file.size > 1024 * 1024) {
    fs.unlinkSync(`./upload/${req.file.filename}`)
    return helper.reject(res, null, 400, {
      error: 'File is too big'
    })
  }

  next()
}

module.exports = {
  validation: valid,
  validationPost: validPost
}
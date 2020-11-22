const transModel = require('../models/transaction')
const helper = require('../helpers/help')

const trans = {

  // get All Transaction
  getAllTrans: (req, res) => {
    // res.send(`berhasil get`)
    transModel.getTransaction()
      .then(result => {
        const resultAllUsers = result
        if (resultAllUsers.length == 0) {
          helper.reject(res, resultAllUsers, 404, {
            message: 'history is empty'
          })
        }
        helper.response(res, resultAllUsers, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  // input Transaction
  insertTrans: (req, res) => {
    const {
      amount,
      notes,
      id_transfer,
      id_receiver
    } = req.body

    const data = {
      amount,
      notes,
      id_transfer,
      id_receiver
    }

    if (data.amount == '' || data.notes == '' || data.id_transfer == '' || data.id_receiver == '') {
      return helper.reject(res, data, 400, {
        message: 'can\'t add data, some or all data is empty'
      })
    }

    transModel.insertTransaction(data)
      .then(result => {
        const resultInsertTrans = result
        helper.response(res, {
          message: 'success transfer'
        }, 200, null)
      })
      .catch((err) => {
        console.log(err)
      })
  },

  deleteTrans: (req, res) => {
    const id = req.params.id
    transModel.deleteTrans(id)
      .then(result => {
        const resultDeleteTrans = result
        if (resultDeleteTrans.affectedRows == 0) {
          helper.reject(res, resultDeleteTrans, 404, {
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

module.exports = trans

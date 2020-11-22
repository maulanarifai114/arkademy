const connection = require('../configs/db')
const {
  deleteTrans
} = require('../controllers/transaction')

const trans = {

  getTransaction: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT transactions.*, users.name, users.balance FROM transactions INNER JOIN users ON users.id = transactions.id_transfer ORDER BY datetime DESC', (error, results) => {
        if (!error) {
          resolve(results)
        } else {
          reject(error)
        }
      })
    })
  },

  insertTransaction: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO transactions SET ?', data, (error, results) => {
        if (!error) {
          resolve(results)
        } else {
          reject(error)
        }
      })
    })
  },

  deleteTrans: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM transactions WHERE id = ?', id, (error, results) => {
        if (!error) {
          resolve(results)
        } else {
          reject(error)
        }
      })
    })
  }
}
module.exports = trans

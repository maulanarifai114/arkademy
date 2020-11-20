const connection = require('../configs/db')

const trans = {

    getTransaction: () => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM transaction ORDER BY id DESC', [], (error, results) => {
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
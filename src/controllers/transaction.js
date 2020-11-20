const transModel = require('../models/transaction')

const trans = {

    getAllTrans: (req, res) => {
        // res.send(`berhasil get`)
        transModel.getTransaction()
            .then(result => {
                res.json(result)
            })
            .catch((err) => {
                console.log(err);
            })
    }

}

module.exports = trans
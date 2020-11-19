const modelProducts = require('../../models/users')

const nameSearch = {
    byUrl: (req, res) => {
        const name = req.query.name
        const phone = req.query.phone
        if (name != null) {
            modelProducts.getUserByName(name)
                .then(result => {
                    if (result.length > 0) {
                        res.json(result)
                    } else {
                        res.send('Name NOT found')
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
        } else if (phone != null) {
            modelProducts.getUserByPhone(phone)
                .then(result => {
                    if (result.length > 0) {
                        res.json(result)
                    } else {
                        res.send('Phone NOT found')
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    },
    byBody: (req, res) => {
        const name = req.body.name
        const phone = req.body.phone
        if (name != null) {
            modelProducts.getUserByName(name)
                .then(result => {
                    if (result.length > 0) {
                        res.json(result)
                    } else {
                        res.send('Name NOT found')
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
        } else if (phone != null) {
            modelProducts.getUserByPhone(phone)
                .then(result => {
                    if (result.length > 0) {
                        res.json(result)
                    } else {
                        res.send('Phone NOT found')
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    },
}

module.exports = nameSearch
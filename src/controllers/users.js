const modelUser = require('../models/users')
const helper = require('../helpers/help')
const users = {

	// getAllUsers, getUserByName, getUserByPhone
	getAllUsers: (req, res) => {
		const name = req.query.name
		const phone = req.query.phone
		modelUser.getAllUsers(name, phone)
			.then(result => {
				const resultAllUsers = result
				helper.response(res, resultAllUsers, 200, null)
			})
			.catch((err) => {
				console.log(err)
			})
	},

	// Masukan User Baru
	insertUser: (req, res) => {
		const {
			name,
			phone,
			username,
			email,
			password,
			balance
		} = req.body
		const data = {
			name,
			phone,
			username,
			email,
			password,
			balance
		}
		modelUser.insertUser(data)
			.then(result => {
				res.json(result)
			})
			.catch((err) => {
				console.log(err)
			})
	},

	// Update User
	updateUser: (req, res) => {
		const id = req.params.id
		const {
			name,
			phone,
			username,
			email,
			password,
			balance
		} = req.body
		const data = {
			name,
			phone,
			username,
			email,
			password,
			balance
		}
		console.log(data);
		modelUser.updateUser(id, data)
			.then((result) => {
				res.json(result)
			})
			.catch((error) => {
				console.log(error)
			})
	},

	// Delete User
	deleteUser: (req, res) => {
		const id = req.params.id
		modelUser.deleteUser(id)
			.then(result => {
				res.json(result)
			})
			.catch((err) => {
				console.log(err)
			})
	}

}
module.exports = users;

// if (name != "") {
// 	data.name
// }
// if (phone != "") {
// 	data.phone
// }
// if (username != "") {
// 	data.username
// }
// if (email != "") {
// 	data.email
// }
// if (password != "") {
// 	data.password
// }
// if (balance != 0) {
// 	data.balance
// }





































































// const modelUser = require('../models/users')
// module.exports = users
// const users = {

// }
// const helper = require('../helpers/helpers')
// const products = {
//     getProducts: (req, res) => {
//         modelUser.getProduct()
//             .then(result => {
//                 const resultProdcut = result
//                 // res.send(resultProdcut)
//                 helper.response(res, resultProdcut, 200, null)
//                 // res.json(resultProdcut)
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//     },
//     detailProducts: (req, res) => {
//         const id = req.params.id
//         modelUser.getProductById(id)
//             .then(result => {
//                 const resultProdcut = result
//                 // res.send(resultProdcut)
//                 helper.response(res, resultProdcut, 200, null)
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//     },
//     insertProduct: (req, res) => {
//         const {
//             name,
//             description,
//             price
//         } = req.body
//         const data = {
//             name,
//             description,
//             price,
//             createdAt: new Date(),
//             updatedAt: new Date()
//         }
//         modelUser.insertProduct(data)
//             .then(result => {
//                 const resultProdcut = result
//                 // res.send(resultProdcut)
//                 helper.response(res, resultProdcut, 201, null)
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//     },
//     updateProduct: (req, res) => {
//         const id = req.params.id
//         const name = req.body.name || ''
//         const description = req.body.description || ''
//         const price = req.body.price || 0
//         const data = {
//             name,
//             description,
//             price,
//         }
//         modelUser.updateProduct(id, data)
//             .then((result) => {
//                 const dataResult = result
//                 dataResult.hello = "helo world"
//                 helper.response(res, dataResult, 200, null)
//             })
//             .catch((error) => {
//                 console.log(error)
//             })
//     },
//     updateProduct2: (req, res) => {
//         const id = req.params.id

//         const name = req.body.name
//         const description = req.body.description
//         const price = req.body.price
//         const data = {}
//         if (name) {
//             data.name = name
//         }
//         if (description) {
//             data.description = description
//         }
//         if (price) {
//             data.price = price
//         }

//         modelUser.updateProduct(id, data)
//             .then((result) => {
//                 const dataResult = result
//                 helper.response(res, dataResult, 200, null)
//             })
//             .catch((error) => {
//                 console.log(error)
//             })
//     },
//     deleteProduct: (req, res) => {
//         const id = req.params.iduser
//         modelUser.deleteProduct(id)
//             .then(result => {
//                 const resultProdcut = result
//                 helper.response(res, resultProdcut, 200, null)
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//     }
// }
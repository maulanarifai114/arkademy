const connection = require('../configs/db')

const users = {
    getAllUsers: (name, phone, offset, limit) => {
        return new Promise((resolve, reject) => {
            if (name) {
                connection.query("SELECT * FROM users WHERE name LIKE ?", `%${name}%`, (error, results) => {
                    if (!error) {
                        resolve(results)
                    } else {
                        reject(error)
                    }
                })
            } else if (phone) {
                connection.query("SELECT * FROM users WHERE phone LIKE ?", `%${phone}%`, (error, results) => {
                    if (!error) {
                        resolve(results)
                    } else {
                        reject(error)
                    }
                })
            } else if (offset || limit) {
                connection.query(`SELECT * FROM users LIMIT ${limit} OFFSET ${offset}`, (error, results) => {
                    if (!error) {
                        resolve(results)
                    } else {
                        reject(error)
                    }
                })
            } else {
                connection.query("SELECT * FROM users", (error, results) => {
                    if (!error) {
                        resolve(results)
                    } else {
                        reject(error)
                    }
                })
            }
        })
    },

    insertUser: (data) => {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO users SET ?', data, (error, results) => {
                if (!error) {
                    resolve(results)
                } else {
                    reject(error)
                }
            })
        })
    },

    updateUser: (id, data) => {
        return new Promise((resolve, reject) => {
            connection.query('UPDATE users SET ? WHERE id=?', [data, id], (error, results) => {
                if (!error) {
                    resolve(results)
                } else {
                    reject(error)
                }
            })
        })
    },

    deleteUser: (id) => {
        return new Promise((resolve, reject) => {
            connection.query('DELETE FROM users WHERE id = ?', id, (error, results) => {
                if (!error) {
                    resolve(results)
                } else {
                    reject(error)
                }
            })
        })
    }

}
module.exports = users



// const products = {
//     getProduct: () => {
//         return new Promise((resolve, reject) => {
//             connection.query("SELECT * FROM products", (error, results) => {
//                 if (!error) {
//                     resolve(results)
//                 } else {
//                     reject(error)
//                 }
//             })
//         })
//     },
//     getProductById: (id) => {
//         return new Promise((resolve, reject) => {
//             connection.query(`SELECT * FROM products WHERE id = ?`, id, (error, results) => {
//                 if (!error) {
//                     resolve(results)
//                 } else {
//                     reject(error)
//                 }
//             })
//         })
//     },
//     insertProduct: (data) => {
//         return new Promise((resolve, reject) => {
//             connection.query("INSERT INTO products SET ?", data, (error, results) => {
//                 if (!error) {
//                     resolve(results)
//                 } else {
//                     reject(error)
//                 }
//             })
//         })
//     },
//     deleteProduct: (id) => {
//         return new Promise((resolve, reject) => {
//             connection.query("DELETE FROM products WHERE id = ?", id, (error, results) => {
//                 if (!error) {
//                     resolve(results)
//                 } else {
//                     reject(error)
//                 }
//             })
//         })
//     },
//     updateProduct: (id, data) => {
//         return new Promise((resolve, reject) => {
//             connection.query("UPDATE products SET ? WHERE id=?", [data, id], (error, results) => {
//                 if (!error) {
//                     resolve(results)
//                 } else {
//                     reject(error)
//                 }
//             })
//         })
//     }
// }
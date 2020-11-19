require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const app = express()
const PORT = process.env.PORT
const routerUsers = require('./src/routes/users')
const bodyParser = require('body-parser')

// membuat middleware
const mymiddleware = (req, res, next) => {
	console.log('menjalankan my middleware')
	next()
}

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
	extended: false
}))

// parse application/json
app.use(bodyParser.json())

// add morgan
app.use(morgan('dev'))

// add mymiddleware
app.use(mymiddleware)

// menggunakan router
app.use('/users', routerUsers)

app.listen(PORT, () => console.log(`server is running port ${PORT}`))
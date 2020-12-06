require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const PORT = process.env.PORT
const routerServerV2 = require('./src/routes/v2/appv2')
const bodyParser = require('body-parser')
const helper = require('./src/helpers/help')

// Enable CORS
app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}))

// parse application/json
app.use(bodyParser.json())

// add morgan
app.use(morgan('dev'))

// main API
app.use('/v2', routerServerV2)
app.use('/upload', express.static('./upload'))

app.use('*', (req, res) => {
  helper.reject(res, null, 404, {
    message: 'URL Not Found'
  })
})

app.listen(PORT, function () {
  console.log(`CORS-enabled web server listening on port ${PORT}`)
})

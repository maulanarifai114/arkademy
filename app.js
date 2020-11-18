require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const app = express();
const router = express.Router();
const PORT = 4000;
const routerUsers = require('./src/routers/users');
const routerProducts = require('./src/routers/products');

// membuat middleware
const mymiddleware = (req, res, next) => {
    console.log('ini middleware');
    next();
}

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())

// add morgan
app.use(morgan('dev'));

app.use(mymiddleware);

router.get('/', (req, res) => {
    res.send('ini router')
})

router.get('/1', (req, res) => {
    res.send('ini router 1')
})

router.get('/2', (req, res) => {
    res.send('ini router 2')
})

router.get('/3', (req, res) => {
    res.send('ini router 3')
})

router.post('/login', (req, res) => {
    res.send('ini router login')
})

// menggunakan router
app.use('/users', routerUsers);
app.use('/products', routerProducts);

app.listen(PORT, () => console.log(`server is running in port ${PORT}`))
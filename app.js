require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const app = express();
const router = express.Router();
const PORT = 4000;

app.use(morgan('dev'));

const mymiddleware = (req, res, next) => {
    console.log('ini middleware');
    next();
}

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

app.use('/users', router)

app.get('/product', (req, res) => {
    res.send('hello');
});

app.listen(PORT, () => console.log(`server is running in port ${PORT}`))
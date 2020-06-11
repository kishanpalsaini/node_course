const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geoCode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// console.log(__dirname)
// console.log(path.join(__dirname, '../public'))
// console.log(__filename)

const app = express()

// define path for expres config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// handlerbar setup 
app.set('view engine', 'hbs');
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))


app.get('', (req, res) => {
    res.render('index', {
        title: 'index hbs',
        name: 'kp saini'
    })
})
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'about hbs',
        name: 'kp saini'
    })
})
app.get('/help', (req, res) => {
    res.render('help', {
        title: 'help hbs',
        name: 'kp saini'
    })
})

app.get('/weather', (req, res) => {

    if (!req.query.address) {
        return res.send({
            error: 'pleace provide a address !'
        })
    }

    geoCode(req.query.address, (error, { latitude, longitude, place } = {}) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (err, forecastData) => {
            if (err) {
                return res.send({ error })
            }
            res.send({
                data: forecastData,
                place,
                address: req.query.address
            })
        })
    })
})


app.get('/product', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'pleace provide a search term'
        })
    }
    res.send({
        search: 'i will provide data after some time'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404-page', {
        error: 'help page not found !'
    })
})

app.get('*', (req, res) => {
    res.render('404-page', {
        error: 'page not found'
    })
})

app.listen(3000, () => {
    console.log('server is up on port 3000')
})
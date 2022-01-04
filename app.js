const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const qrcodeRoute = require('./routes/qrcode.route')
const app = express()

app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))

app.use(cors({
    origin : '*',
    method : ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders : 'x-requested-with, Content-Type, Accept, Authorization',
}))

app.use('/qrcode', qrcodeRoute)

module.exports = app
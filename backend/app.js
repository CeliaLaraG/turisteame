'use strict'

const express = require('express')
const database = require('./modules/database')
// const bearerToken = require('express-bearer-token');
const cors = require("cors");


const indexController = require('./controllers/IndexController')
const articleController = require('./controllers/ArticlesController')
const usersController = require('./controllers/UsersController')
// const authController = require('./controllers/AuthController')


const app = express()

// app.use(bearerToken())
app.use(cors())

app.use(express.json())


app.use(indexController)
app.use(articleController)
app.use(usersController)
// app.use(authController)

database.connect()



module.exports = app

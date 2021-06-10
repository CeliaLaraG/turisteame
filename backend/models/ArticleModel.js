'use strict'

const mongoose = require('mongoose')

const ArticleSChema = require('./schemas/ArticleSchema')

const ArticleModel = mongoose.model('articles', ArticleSChema)

module.exports = ArticleModel

'use strict'

const { Router } = require('express')
const express = require('express')
const { sha512 } = require('js-sha512')
const router = express.Router()
// const jwt = require('jsonwebtoken')
const config = require('../modules/config')

const userModel = require('../models/UserModel')




router.route('/auth/login')
  .post((req, res) => {

  })

module.exports = router

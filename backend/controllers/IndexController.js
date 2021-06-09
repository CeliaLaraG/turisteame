'use strict'

const express = require('express')
const router = express.Router()

router.route('/')
  .get((req, res) => {
    const now = new Date()
    const indexMessage = `Turistéame. Derechos reservados ${now.getFullYear()}.`
    res.send(indexMessage)
  })

module.exports = router

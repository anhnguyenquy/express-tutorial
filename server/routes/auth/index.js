const express = require('express')
const router = express.Router()
const { login, logout } = require('../../controllers/auth')

router.get('/login', login)
      .get('/logout', logout)

module.exports = router
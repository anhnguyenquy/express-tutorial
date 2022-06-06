const express = require('express')
const router = express.Router()
const { user } = require('../../controllers')

const { getUser } = user

// router.get('/:userID', getUser) // using Params
router.get('/', getUser) // using Query

module.exports = router
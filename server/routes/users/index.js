const express = require('express')
const router = express.Router()
const { users } = require('../../controllers')
const { create, getAll, getByCustomQueries, removeByCustomQueries, update, generate } = users

router.get('/all', getAll)
  .get('/byQuery', getByCustomQueries)
  .post('/create', create)
  .put('/update/:id', update)
  .delete('/delete', removeByCustomQueries)
  .get('/generate', generate)

module.exports = router
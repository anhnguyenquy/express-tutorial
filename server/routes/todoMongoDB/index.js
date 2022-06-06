const express = require('express')
const router = express.Router()
const { todoMongoDB } = require('../../controllers')

const {
  createAssignment,
  deleteAssignment,
  getAssignmentByID,
  getAssignmentsByFilter,
  modifyAssignment,
  generate
} = todoMongoDB

router.post('/create', createAssignment)
  .get('/byFilter', getAssignmentsByFilter)
  .get('/id/:id', getAssignmentByID)
  .put('/modify/:id', modifyAssignment)
  .delete('/delete/:id', deleteAssignment)
  .get('/generate', generate) 

module.exports = router